import type { ExecutionContext } from '@nestjs/common';
import {
	createParamDecorator,
	InternalServerErrorException,
	SetMetadata,
} from '@nestjs/common';
import type { User } from '@prisma/client';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

import type { ExtendedRequest } from './auth.guard';

export type UserAuth = User;
export type TokenAuth = DecodedIdToken;

export const Auth = createParamDecorator<
	string,
	ExecutionContext,
	UserAuth | TokenAuth
>((key: 'token' | 'user', ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest<Request>() as ExtendedRequest;

	if (key == 'token') {
		return request.authToken;
	}

	const user = request.user;
	if (!user)
		throw new InternalServerErrorException(
			'invalid user, it needs to be handled by auth guard',
		);

	return user;
});

export type AuthOptions = {
	justCheckAuth: boolean;
};
export const ConfigAuth = (options: AuthOptions) =>
	SetMetadata('authOptions', options);
