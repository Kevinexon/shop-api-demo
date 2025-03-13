import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user-dto';
import { UserDataDto } from './dto/user-data-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: { login: string; password: string }): UserDto | null {
    return this.authService.login(body.login, body.password);
  }

  @Get('user/:id')
  getUser(@Param('id', ParseIntPipe) id: number): UserDataDto | null {
    return this.authService.getUserData(id);
  }

  @Put('user/:id')
  editUser(@Param('id', ParseIntPipe) id: number, @Body() body: UserDataDto) {
    return this.authService.editUser(id, body);
  }
}
