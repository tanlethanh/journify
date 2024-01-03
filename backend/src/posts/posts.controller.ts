import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UseGuards,
} from '@nestjs/common';
import {
	ApiAcceptedResponse,
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiParam,
} from '@nestjs/swagger';
import type {
	CheckIn as CheckInModel,
	Place as PlaceModel,
} from '@prisma/client';
import { Auth, UserAuth } from 'src/auth/auth.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

import { CreateCheckInDto, CreatePlaceDto } from './dto/create-checkin.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Post('places')
	@ApiAcceptedResponse()
	@ApiNotFoundResponse()
	@ApiBadRequestResponse()
	@ApiBearerAuth()
	@UseGuards(AuthGuard)
	async createDiscovery(
		@Body() createPlaceDto: CreatePlaceDto,
		@Auth() user: UserAuth,
	): Promise<PlaceModel> {
		const { name, caption, handle, imageURL, latitude, longitude } =
			createPlaceDto;
		return this.postsService.createDiscovery({
			name,
			handle,
			caption,
			imageURL,
			latitude,
			longitude,
			upvote: 0,
			downvote: 0,
			impressions: 0,
			owner: {
				connect: {
					id: user.id,
				},
			},
		});
	}

	@Get('places')
	@ApiOkResponse()
	async findAllPlaces(): Promise<PlaceModel[]> {
		return this.postsService.getPlaces({});
	}

	@Get('places/:id')
	@ApiParam({ name: 'id', type: Number })
	async getPlaceById(
		@Param('id', new ParseIntPipe()) id: number,
	): Promise<PlaceModel> {
		return this.postsService.getPlace({ id });
	}

	@Delete('places/:id')
	@ApiParam({ name: 'id', type: Number })
	async deletePlaceById(
		@Param('id', new ParseIntPipe()) id: number,
	): Promise<PlaceModel> {
		return this.postsService.deletePlace({ id });
	}

	// -------------------- checkin --------------------

	@Post('checkins')
	@ApiAcceptedResponse()
	@ApiNotFoundResponse()
	@ApiBadRequestResponse()
	@ApiBearerAuth()
	@UseGuards(AuthGuard)
	async createCheckIn(
		@Body() createCheckInDto: CreateCheckInDto,
		@Auth() user: UserAuth,
	): Promise<CheckInModel> {
		const { caption, imageURL, placeId } = createCheckInDto;
		return this.postsService.createCheckin({
			caption,
			imageURL,
			place: {
				connect: {
					id: placeId,
				},
			},
			author: {
				connect: {
					id: user.id,
				},
			},
		});
	}

	@Get('checkins')
	@ApiOkResponse()
	async findAllCheckIns(): Promise<CheckInModel[]> {
		return this.postsService.getCheckIns({});
	}

	@Get('checkins/:id')
	@ApiParam({ name: 'id', type: Number })
	async getCheckInById(
		@Param('id', new ParseIntPipe()) id: number,
	): Promise<CheckInModel> {
		return this.postsService.getCheckIn({ id });
	}

	@Delete('checkins/:id')
	@ApiParam({ name: 'id', type: Number })
	async deleteCheckInById(
		@Param('id', new ParseIntPipe()) id: number,
	): Promise<CheckInModel> {
		return this.postsService.deleteCheckIn({ id });
	}
}
