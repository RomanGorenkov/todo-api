import { Strategy } from 'passport-facebook';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly authService: AuthService) {
    super(
        {
        clientID: '444379766425301',
        clientSecret: '9d0d191cbb784a9342f793532863823c',
        callbackURL: 'http://localhost:3000/api/facebook/callback',
        profileFields: ['id', 'first_name', 'displayName', 'photos', 'email'],
    }
    );
  }

  async validate(accessToken: string, refreshToken: string, profile, done: Function)
  {
      try
      {
          console.log(profile);

          const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.FACEBOOK);
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


