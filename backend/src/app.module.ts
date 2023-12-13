import { Module } from '@nestjs/common';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [UsersModule, PostsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
