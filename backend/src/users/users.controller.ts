import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	ForbiddenException,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
	UseGuards,
} from '@nestjs/common';
import {
	ApiAcceptedResponse,
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiParam,
	ApiQuery,
} from '@nestjs/swagger';
import type { User as UserModel } from '@prisma/client';
import { Auth, ConfigAuth, TokenAuth, UserAuth } from 'src/auth/auth.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

import { DeleteUserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('/:id')
	@ApiParam({ name: 'id' })
	@ApiOkResponse()
	@ApiNotFoundResponse()
	@ApiForbiddenResponse()
	@ApiBearerAuth()
	@UseGuards(AuthGuard)
	getUserByID(
		@Param('id', new ParseIntPipe()) id: number,
		@Auth() user: UserAuth,
	): Promise<UserModel> {
		if (user.id !== id) throw new ForbiddenException('can not get ' + id);
		return this.usersService.user({ id });
	}

	@Get()
	@ApiQuery({ name: 'firebaseUID', required: false })
	@ApiOkResponse()
	@ApiNotFoundResponse()
	@ApiForbiddenResponse()
	@ApiBearerAuth()
	@UseGuards(AuthGuard)
	getUserByFirebaseUID(
		@Query('firebaseUID') firebaseUID: string,
		@Auth() user: UserAuth,
	): Promise<UserModel> {
		if (user.firebaseUID !== firebaseUID)
			throw new ForbiddenException('can not get ' + firebaseUID);
		return this.usersService.user({ firebaseUID });
	}

	@Post()
	@ApiAcceptedResponse()
	@ApiBadRequestResponse()
	@ApiBearerAuth()
	@ConfigAuth({ justCheckAuth: true })
	@UseGuards(AuthGuard)
	async createUser(@Auth('token') token: TokenAuth): Promise<UserModel> {
		const { name, email, uid } = token;
		try {
			return await this.usersService.createUser({
				name,
				email,
				firebaseUID: uid,
				onboarding: false,
			});
		} catch (e) {
			throw new BadRequestException(
				`can not create user, email ${email}, uid: ${uid}`,
			);
		}
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
