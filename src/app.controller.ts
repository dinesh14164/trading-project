import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './shared/common-type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
