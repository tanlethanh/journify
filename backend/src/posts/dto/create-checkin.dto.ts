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

export class CreatePlaceDto {
	@ApiProperty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsString()
	caption: string;

	@ApiProperty()
	@IsString()
	handle: string;

	@ApiProperty()
	@IsString()
	imageURL: string;

	@IsString()
	latitude: number;

	@IsString()
	longitude: number;
}
