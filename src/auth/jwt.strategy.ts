import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'VERY_SECRET_KEY',
    });
  }

  async validate(payload: any, done: Function) {
    try
        {
           console.log(payload);
          
            // You could add a function to the authService to verify the claims of the token:
            // i.e. does the user still have the roles that are claimed by the token
            //const validClaims = await this.authService.verifyTokenClaims(payload);
            
            //if (!validClaims)
            //    return done(new UnauthorizedException('invalid token claims'), false);
    
            done(null, payload);
        }
        catch (err)
        {
            throw new UnauthorizedException('unauthorized', err.message);
        }
    }

    // return { userId: payload.sub, username: payload.username };
}