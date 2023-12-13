import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import type { Post as PostModel, User as UserModel } from '@prisma/client';

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
		return 'hello world';
	}

	@Get('post/:id')
	async getPostById(@Param('id') id: string): Promise<PostModel> {
		return this.postService.post({ id: Number(id) });
	}

	@Get('feed')
	async getPublishedPosts(): Promise<PostModel[]> {
		return this.postService.posts({
			where: { published: true },
		});
	}

	@Get('filtered-posts/:searchString')
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

	@Post('post')
	async createDraft(
		@Body()
		postData: {
			title: string;
			content?: string;
			checkIn?: string;
			authorEmail: string;
		},
	): Promise<PostModel> {
		const { title, content, checkIn, authorEmail } = postData;
		return this.postService.createPost({
			title,
			content,
			checkIn,
			author: {
				connect: { email: authorEmail },
			},
		});
	}

	@Post('user')
	async signupUser(
		@Body() userData: { name?: string; email: string },
	): Promise<UserModel> {
		return this.userService.createUser(userData);
	}

	@Put('publish/:id')
	async publishPost(@Param('id') id: string): Promise<PostModel> {
		return this.postService.updatePost({
			where: { id: Number(id) },
			data: { published: true },
		});
	}

	@Delete('post/:id')
	async deletePost(@Param('id') id: string): Promise<PostModel> {
		return this.postService.deletePost({ id: Number(id) });
	}
}
