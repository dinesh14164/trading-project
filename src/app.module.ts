import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AUTH } from './ENV';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth/auth.guard';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MongooseModule.forRoot(AUTH.db.url), AuthModule, UsersModule, MessageModule],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
