import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return 'create user' + createUserDto;
	}

	@Get()
	findAll() {
		return 'find all users';
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return 'get user by id' + id;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return 'update user by id' + id + updateUserDto;
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return 'delete user by id' + id;
	}
}
