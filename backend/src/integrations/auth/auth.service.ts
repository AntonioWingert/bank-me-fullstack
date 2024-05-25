import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginHeader } from 'src/dtos/login-header';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login({ login, password }: LoginHeader) {
    const user = await this.prisma.user.findUnique({
      where: {
        login,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { login };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }

  async register({ login, password }: LoginHeader) {
    const user = await this.prisma.user.findUnique({
      where: {
        login,
      },
    });

    if (user) {
      throw new Error('Usuario já existe');
    }

    await this.prisma.user.create({
      data: {
        login,
        password,
      },
    });

    return this.login({ login, password });
  }
}
