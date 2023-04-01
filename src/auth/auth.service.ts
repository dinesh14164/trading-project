import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}
    
    async createToekn(payload): Promise<string> {
        const access_token = await this.jwtService.signAsync(payload);
        console.log('access token', access_token);
        return access_token;
    }
}
