import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
	@ApiProperty({
		description: 'The name of the new User',
		example: 'HunHunVipro2002',
	})
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty({
		description: 'The email of the new User',
		example: 'hunhunvippro2002@gmail.com',
	})
	@IsString()
	@IsNotEmpty()
	email: string;
}
