import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import type { Post as PostModel } from '@prisma/client';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	@ApiResponse({
		status: 201,
		description: 'The post has been successfully created.',
	})
	@ApiResponse({
		status: 400,
		description: 'Can not create post',
	})
	@ApiResponse({
		status: 500,
		description: 'Something went wrong with server. Please try again later!',
	})
	async create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
		const { title, content, checkIn, published } = createPostDto;
		return this.postsService.createPost({
			title,
			content,
			checkIn,
			published,
		});
	}

	@Get()
	@ApiResponse({
		status: 200,
		description: 'The list of posts has been successfully retrieved.',
		type: [PostEntity],
	})
	@ApiResponse({
		status: 500,
		description: 'Something went wrong with server. Please try again later!',
	})
	async findAll(): Promise<PostModel[]> {
		return this.postsService.posts({});
	}

	@Get(':id')
	@ApiParam({
		name: 'id',
		type: String,
		description: 'ID of post want to find',
	})
	async getPostById(@Param('id') id: string): Promise<PostModel> {
		return this.postsService.post({ id: Number(id) });
	}

	@Patch(':id')
	@ApiParam({
		name: 'id',
		type: String,
		description: 'ID of post want to update',
	})
	async update(
		@Param('id') id: string,
		@Body() updatePostDto: UpdatePostDto,
	): Promise<PostModel> {
		const { title, content, published } = updatePostDto;
		return this.postsService.updatePost({
			where: { id: Number(id) },
			data: {
				title,
				content,
				published,
			},
		});
	}

	@Delete(':id')
	@ApiParam({
		name: 'id',
		type: String,
		description: 'ID of post want to update',
	})
	async remove(@Param('id') id: string): Promise<PostModel> {
		return this.postsService.deletePost({ id: Number(id) });
	}
}
