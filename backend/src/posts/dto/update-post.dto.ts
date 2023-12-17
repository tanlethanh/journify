import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class UpdatePostDto {
	@ApiProperty({
		description: 'The title of the Post',
		example: 'Wonderful day at HCMUT',
	})
	@IsString()
	title: string;

	@ApiProperty({
		description: 'The content of the Post',
		example:
			'To day is a wonderful day at HCMUT, I have to review the courses for the incoming exam.',
	})
	@IsString()
	content: string;

	@ApiPropertyOptional({
		description: 'The published configuration of the Post, published or not?',
		example: 'true',
	})
	@IsBoolean()
	published: boolean;
}
