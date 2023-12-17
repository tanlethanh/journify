import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import type { User as UserModel } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiResponse({
		status: 201,
		description: 'The user has been successfully registered.',
	})
	@ApiResponse({
		status: 400,
		description: 'Can not register user',
	})
	@ApiResponse({
		status: 500,
		description: 'Something went wrong with server. Please try again later!',
	})
	create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
		const { name, email } = createUserDto;
		return this.usersService.createUser({ name, email });
	}
}
