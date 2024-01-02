import type { CanActivate, ExecutionContext } from '@nestjs/common';
import {
	ForbiddenException,
	Inject,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import type { User } from '@prisma/client';
import { app } from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { PrismaService } from 'src/prisma.service';

export type ExtendedRequest = Request & { user: User };

@Injectable()
export class AuthGuard implements CanActivate {
	private firebase: app.App;
	constructor(
		@Inject('FIREBASE_APP') injectedFirebase: app.App,
		private prisma: PrismaService,
	) {
		this.firebase = injectedFirebase;
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest() as ExtendedRequest;
		const authHeader = request.headers['authorization'] as string;

		if (!authHeader || !authHeader.startsWith('Bearer '))
			throw new UnauthorizedException('auth token not found');

		const token = authHeader.split(' ')[1];
		if (!token) throw new UnauthorizedException('wrong auth format');

		let authToken: DecodedIdToken;
		try {
			authToken = await this.firebase.auth().verifyIdToken(token);
		} catch {
			throw new UnauthorizedException('invalid auth token');
		}

		const uid = authToken.uid;
		const user = await this.prisma.user.findUnique({
			where: { firebaseUID: uid },
		});

		if (!user)
			throw new ForbiddenException(
				`the user is not initialized, email ${authToken.email} uid ${authToken.uid}`,
			);

		request.user = user;

		return !!user;
	}
}
