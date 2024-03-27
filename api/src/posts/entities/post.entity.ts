import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Post {
	@ApiProperty({
		description: 'The id of the Post',
		example: '2014451',
	})
	@IsNotEmpty()
	@IsNumber()
	id: number;

	@ApiProperty({
		description: 'The title of the Post',
		example: 'Spaghetti',
	})
	@IsNotEmpty()
	@IsString()
	title: string;

	@ApiProperty({
		description: 'The Check In Location of the Post',
		example: 'PinkyPeppaPiggy Coffee',
	})
	@IsNotEmpty()
	@IsString()
	checkIn: string;

	@ApiPropertyOptional({
		description: 'The content of the Post',
		example: 'Lovely day <3, !',
	})
	@IsString()
	content: string;

	@ApiPropertyOptional({
		description: 'The publish status of the Post',
		example: 'false',
	})
	@IsString()
	published: boolean;

	@ApiPropertyOptional({
		description: 'Author ID of the Post',
		example: '123',
	})
	@IsNumber()
	author: number;
}
