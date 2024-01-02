import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator, UnauthorizedException } from '@nestjs/common';

export type UserAuth = {
	message: 'auth';
};

export const Auth = createParamDecorator<string, ExecutionContext, UserAuth>(
	(_: string, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<Request>();
		const authHeader = request.headers['authorization'] as string;
		if (!authHeader || !authHeader.startsWith('Bearer '))
			throw new UnauthorizedException('auth token not found');

		const token = authHeader.split(' ')[1];
		if (!token) throw new UnauthorizedException('wrong auth format');

		return { message: 'auth' };
	},
);
