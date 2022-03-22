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
                host: "kdkdjd",
                port: 3306,
                user:"usuario",
                password:"senha",
                database:"database"
            }
        })
    }

    getConnection(){
        return this.knex
    }
   
}
