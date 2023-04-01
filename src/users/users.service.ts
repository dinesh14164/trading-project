
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IUser } from '../shared/common-type';
import { User } from '../schemas/user.schema';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private authService: AuthService
    ) {}

      async login(payload: IUser): Promise<{ token: string }> {
        console.log('service', payload);
        const user = await this.findOne(payload);
        if (!user) {
            return null;
        }
        const token = await this.authService.createToekn({ username: user.username, email: user.email });
        return { token: token };
      }
    
      async registor(payload: IUser): Promise<IUser> {
        return this.create(payload);
      }
      async create(payload: IUser): Promise<IUser> {
        const createdUser = new this.userModel(payload);
        return createdUser.save();
      }

      async findOne(user: IUser): Promise<IUser> {
        const userDb = await this.userModel.findOne({ email: user.email, password: user.password });
        console.log('db user', userDb);
        return userDb;
      }
}
