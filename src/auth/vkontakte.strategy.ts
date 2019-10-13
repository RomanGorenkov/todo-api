import { Strategy } from 'passport-vkontakte';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class VkontacteStrategy extends PassportStrategy(Strategy, 'vkontakte') {
  constructor(private readonly authService: AuthService) {
    super(
        {
        clientID: '7155678',
        clientSecret: 'JDjlKXO9zP0gnCQeTT7J',
        callbackURL: 'http://localhost:3000/api/vkontakte/callback',
        apiVersion: '5.101',
    }
    );
  }

  async validate(accessToken: string, refreshToken: string, params, done)
  {
      try
      {
          console.log(params);

          const jwt: string = await this.authService.validateOAuthLogin(params.id, Provider.VKONTACTE);
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


