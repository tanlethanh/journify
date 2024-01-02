import type { NestModule } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { FirebaseProvider } from './auth/auth.provider';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Global()
@Module({
	imports: [UsersModule, PostsModule],
	controllers: [AppController],
	providers: [
		PrismaService,
		AppService,
		PostsService,
		UsersService,
		FirebaseProvider,
	],
	exports: [FirebaseProvider],
})
export class AppModule implements NestModule {
	configure() {}
}
