import type { ExecutionContext } from '@nestjs/common';
import {
	createParamDecorator,
	InternalServerErrorException,
} from '@nestjs/common';
import type { User } from '@prisma/client';

import type { ExtendedRequest } from './auth.guard';

export type UserAuth = User;

export const Auth = createParamDecorator<string, ExecutionContext, UserAuth>(
	(_: string, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<Request>() as ExtendedRequest;
		const user = request.user;
		if (!user)
			throw new InternalServerErrorException(
				'invalid user, it needs to be handled by auth guard',
			);
		return user;
	},
);
