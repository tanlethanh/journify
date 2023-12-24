import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class DeleteUserDto {
	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	id: number;
}
