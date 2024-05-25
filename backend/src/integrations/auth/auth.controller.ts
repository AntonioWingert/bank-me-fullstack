import { Body, Controller, Post } from '@nestjs/common';
import { LoginHeader } from 'src/dtos/login-header';
import { AuthService } from './auth.service';

@Controller('integration')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth')
  async login(@Body() authCredentials: LoginHeader) {
    return this.authService.login({
      login: authCredentials.login,
      password: authCredentials.password,
    });
  }

  @Post('register')
  async register(@Body() authCredentials: LoginHeader) {
    return this.authService.register({
      login: authCredentials.login,
      password: authCredentials.password,
    });
  }
}
