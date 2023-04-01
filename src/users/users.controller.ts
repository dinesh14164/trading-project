import { Controller, Post, Body, UnauthorizedException  } from '@nestjs/common';
import { IUser } from '../shared/common-type';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Post('login')
    async login(@Body() body: IUser): Promise<{ token: string }> {
      const token = await this.userService.login(body);
      if (!token) {
        throw new UnauthorizedException();
      }
      return token;
    }
  
    @Post('registor')
    registor(@Body() payload: IUser): Promise<IUser> {
      return this.userService.registor(payload);
    }
}
