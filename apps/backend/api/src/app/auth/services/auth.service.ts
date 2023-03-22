import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  ISingAuthPayload,
  ISingAuthResponse,
} from '@ss/shared/data-access/interfaces';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/services/user.service';
import { PasswordService } from './password.service';
import { UserEntity } from '../../users/entities/user.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService
  ) {}

  async validateUser(
    signInPayload: ISingAuthPayload
  ): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(
      signInPayload.username
    );
    if (
      user &&
      (await this.passwordService.compareHash(
        signInPayload.password,
        user.password
      ))
    ) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(signInPayload: ISingAuthPayload): Promise<ISingAuthResponse> {
    const user = await this.validateUser(signInPayload);
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: this.jwtService.sign({
        username: user.username,
        userId: user.id,
      }),
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
      id: user.id,
    };
  }
}
