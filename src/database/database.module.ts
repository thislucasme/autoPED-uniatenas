import { DatabaseService } from './database.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [],
    controllers: [],
    providers: [
        ConfigService,
        DatabaseService,],
})
export class DatabaseModule { }
