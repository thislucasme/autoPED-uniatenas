import { HeaderModule } from './dadoscadastro/header.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuracao from './config/configuracao';

@Module({
  imports: [
    HeaderModule,
    DatabaseModule,
    AuthModule, ConfigModule.forRoot({
      load: [configuracao],
      isGlobal: true
    })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
