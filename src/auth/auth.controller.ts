import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('login')
    async login (@Body() body:Usuario){
        return {hell0o: "ehejdhjdhsdghfgh"};
    }

    @Get()
    async getUser(){
        return {hell0o: "ehejdhjdhsdghfgh"};
    }

    

}
