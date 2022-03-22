import { Injectable } from '@nestjs/common';
import knexfn, { Knex} from 'knex';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class DatabaseService {
    private knex:Knex;
    constructor(private configService:ConfigService){
        const host  = configService.get('database.host');
        if(!host){
            throw new Error('Variável de ambiente HOST não encontrada.')
        }

        const port  = configService.get('database.port');
        if(!port){
            throw new Error('Variável de ambiente PORT não encontrada.')
        }

        const usuario  = configService.get('database.usuario');
        if(!port){
            throw new Error('Variável de ambiente USUARIO não encontrada.')
        }

        const senha  = configService.get('database.senha');
        if(!port){
            throw new Error('Variável de ambiente SENHA não encontrada.')
        }

        const database  = configService.get('database.databse');
        if(!port){
            throw new Error('Variável de ambiente DATABASE não encontrada.')
        }
        this.knex = knexfn({
            client: 'mysql2',
            connection:{
                host: host,
                port: port,
                user:usuario,
                password:senha,
                database:database
            }
        })
    }

    getConnection(){
        return this.knex
    }
   
}
