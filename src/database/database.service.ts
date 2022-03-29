import { Injectable } from '@nestjs/common';
import knexfn, { Knex} from 'knex';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class DatabaseService {
    private knex:Knex;
    constructor(){
        this.knex = knexfn({
            client: 'mysql2',
            connection:{
                host: "localhost",
                port: 3306,
                user:"root",
                password:"gemmaN123_",
                database:"sys"
            }
        })
    }

    getConnection(){
        return this.knex
    }
   
}
