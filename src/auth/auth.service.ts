import { HttpException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { UserDataDto } from './dto/user-data-dto';

const users: UserDto[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    role: ['admin'],
  },
  {
    id: 2,
    username: 'WRuta',
    password: 'zaq1@WSX',
    role: [],
  },
];

const userData: UserDataDto[] = [
  {
    id: 1,
    userId: 1,
    street: 'street',
    city: 'city',
    zipCode: 'zipCode',
    name: 'name',
    surname: 'surname',
    phoneNumber: 'phoneNumber',
    email: 'email',
  },
  {
    id: 2,
    userId: 2,
    street: 'Mickiewicza 14/21',
    city: 'Wrocław',
    zipCode: '01-888',
    name: 'Wiktor',
    surname: 'Ruta',
    phoneNumber: '123456789',
    email: 'WRuta@sygnity.pl',
  },
];

@Injectable()
export class AuthService {
  login(login: string, password: string): UserDto | null {
    const result = users.find(
      (user) => user.username === login && user.password === password,
    );
    if (result) throw new HttpException('User not found', 402);
    return result ?? null;
  }

  getUserData(id: number) {
    const result = userData.find((user) => user.userId === id);
    if (result) throw new HttpException('User data not found', 404);
    return result ?? null;
  }

  editUser(id: number, body: UserDataDto) {
    const index = userData.findIndex((item) => item.id === id);
    userData[index] = { ...userData[index], ...body };
    return true;
  }
}
