import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
	@ApiProperty()
	@IsBoolean()
	onboarding: boolean;
}
