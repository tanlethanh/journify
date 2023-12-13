import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post()
	create(@Body() createPostDto: CreatePostDto) {
		return 'create post' + createPostDto;
	}

	@Get()
	findAll() {
		return 'get all';
	}

	@Get(':id')
	async getPostById(@Param('id') id: string) {
		return 'get post by id' + id;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
		return 'update post by id' + id + updatePostDto;
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return 'delete post by id' + id;
	}
}
