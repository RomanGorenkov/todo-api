import { Controller, Get, Request, Post, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

const passport = require('passport');

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  getPro(@Request() req) {
    return req;
  }

  @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt) {
          // return res;
          res.redirect('http://localhost:4200/notes');
        } else {
          res.redirect('http://localhost:4200/login/failure');
        }
    }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource() {
    return 'JWT is working!';
  }

  @Get('vkontakte')
  @UseGuards(AuthGuard('vkontakte'))
  getVk() {

  }

  @Get('vkontakte/callback')
    @UseGuards(AuthGuard('vkontakte'))
    vkLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        // const jwt: string = req.user.jwt;
        // if (jwt) {
        //   res.redirect('http://localhost:4200');
        // } else {
        //   res.redirect('http://localhost:4200/login/failure');
        // }
    }

    @Get('facebook')
    @UseGuards(AuthGuard('facebook'))
    getFacebook() {
  
    }
  
    @Get('facebook/callback')
      @UseGuards(AuthGuard('facebook'))
      facebookLoginCallback(@Req() req, @Res() res) {
          // handles the Google OAuth2 callback
          // const jwt: string = req.user.jwt;
          // if (jwt) {
          //   res.redirect('http://localhost:4200');
          // } else {
          //   res.redirect('http://localhost:4200/login/failure');
          // }
      }

  @Get('get')
  send(@Request() req, @Res() res) {
    return  res.send(`{ "given_name": "Johnny", 
                        "picture": "https://lh3.googleusercontent.com/a-/AAuE7mC6p2hC0kLCvd7nqQ3gftuZgwQ914PJq16tq2f3",
                        "id": "114932851376733737293" }`);
  }

}
