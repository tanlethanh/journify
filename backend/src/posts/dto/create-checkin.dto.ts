import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCheckInDto {
	@ApiProperty()
	@IsString()
	caption: string;

	@ApiPropertyOptional()
	@IsString()
	imageURL: string;

	@ApiPropertyOptional()
	@IsNumber()
	placeId: number;
}
