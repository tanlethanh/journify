import type { NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';

import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
	imports: [UsersModule, PostsModule],
	controllers: [AppController],
	providers: [PrismaService, AppService, PostsService, UsersService],
})
export class AppModule implements NestModule {
	configure() {}
}
