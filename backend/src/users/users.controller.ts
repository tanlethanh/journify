import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import {
	ApiAcceptedResponse,
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiQuery,
} from '@nestjs/swagger';
import type { User as UserModel } from '@prisma/client';

import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	@ApiQuery({ name: 'id', type: Number })
	@ApiOkResponse()
	@ApiNotFoundResponse()
	get(@Query('id') id: number): Promise<UserModel> {
		return this.usersService.user({ id: Number(id) });
	}

	@Post()
	@ApiAcceptedResponse()
	@ApiBadRequestResponse()
	create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
		const { name, email, firebaseUID } = createUserDto;
		return this.usersService.createUser({
			name,
			email,
			firebaseUID,
			onboarding: false,
		});
	}

	@Put()
	@ApiAcceptedResponse()
	@ApiBadRequestResponse()
	update(@Body() updateUserDto: UpdateUserDto): Promise<UserModel> {
		const { id, ...data } = updateUserDto;
		return this.usersService.updateUser({ where: { id }, data });
	}

	@Delete()
	@ApiAcceptedResponse()
	@ApiBadRequestResponse()
	delete(@Body() deleteUserDto: DeleteUserDto): Promise<UserModel> {
		return this.usersService.deleteUser({ id: deleteUserDto.id });
	}
}
