import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class LocalGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super(
        {
        clientID: '260653760475-3b7p54r2eb1npcubi1734uuojdb05hfo.apps.googleusercontent.com',
        clientSecret: 'gFbCUdt_TYYEMnEngfCcn2C1',
        callbackURL: 'http://localhost:3000/api/google/callback',
        passReqToCallback: true,
        scope: ['profile'],
    }
    );
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
  {
      try
      {
          console.log(profile);

          const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
          const user = 
          {
              jwt
          }

          done(null, user);
      }
      catch(err)
      {
          // console.log(err)
          done(err, false);
      }
  }
}


