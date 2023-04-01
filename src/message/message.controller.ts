import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';


@Controller('message')
export class MessageController {

    @UseGuards(AuthGuard)
    @Get()
    getMessage() {
        return 'Messages works!';
    }
}
