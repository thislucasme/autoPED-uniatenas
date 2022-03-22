import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('login-coordenador')
    async login (@Body() body:Usuario){
        return null;
    }
    @Post('login-ti')
    async loginTI (@Body() body:Usuario){
        return null;
    }
    @Post('cadastro-coordenador')
    async cadastroCoordenador (@Body() body:Coordenador){
        return null;
    }
    @Get()
    async getUser(@Body() coordenador:Coordenador){
        return null;
    }

    

}
