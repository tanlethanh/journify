import { Controller, Get, Param, Put } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import type { Post as PostModel } from '@prisma/client';

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
		return "Hello, we're Zenonian Labs";
	}

	@Get('feed')
	async getPublishedPosts(): Promise<PostModel[]> {
		return this.postService.posts({
			where: { published: true },
		});
	}

	@Get('filtered-posts/:searchString')
	@ApiParam({
		name: 'searchString',
		type: String,
		description:
			'Search string that might appear in the titles and contents of some Post',
		example: 'HCMUT',
	})
	async getFilteredPosts(
		@Param('searchString') searchString: string,
	): Promise<PostModel[]> {
		return this.postService.posts({
			where: {
				OR: [
					{
						title: { contains: searchString },
					},
					{
						content: { contains: searchString },
					},
				],
			},
		});
	}

	@Put('publish/:id')
	@ApiParam({
		name: 'id',
		type: String,
		description: 'ID of post want to update',
	})
	async publishPost(@Param('id') id: string): Promise<PostModel> {
		return this.postService.updatePost({
			where: { id: Number(id) },
			data: { published: true },
		});
	}
}
