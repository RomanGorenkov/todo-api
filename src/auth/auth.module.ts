import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LocalGoogleStrategy} from './google.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { from } from 'rxjs';
import { VkontacteStrategy } from './vkontakte.strategy';
import { FacebookStrategy } from './facebook.strategy';


@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, LocalGoogleStrategy, VkontacteStrategy, FacebookStrategy],
  exports: [AuthService],
})
export class AuthModule {}
