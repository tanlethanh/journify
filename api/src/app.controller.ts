import { Controller, Get } from '@nestjs/common';

import { PostsService } from './posts/posts.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
	constructor(
		private readonly userService: UsersService,
		private readonly postService: PostsService,
	) {}

	@Get()
	getHello(): string {
		return `Hello, we're Zenonian Labs`;
	}
}
