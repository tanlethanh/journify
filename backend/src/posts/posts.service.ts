import { Injectable } from '@nestjs/common';

import type { CreatePostDto } from './dto/create-post.dto';
import type { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
	create(createPostDto: CreatePostDto) {
		return 'This action adds a new post';
	}

	findAll() {
		return `This action returns all posts`;
	}

	findOne(id: number) {
		return `This action returns a #${id} post`;
	}

	update(id: number, updatePostDto: UpdatePostDto) {
		return `This action updates a #${id} post`;
	}

	remove(id: number) {
		return `This action removes a #${id} post`;
	}
}
