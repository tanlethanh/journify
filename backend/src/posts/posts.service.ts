import { Injectable } from '@nestjs/common';
import type { CheckIn, Place, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
	constructor(private prisma: PrismaService) {}

	async createDiscovery(data: Prisma.PlaceCreateInput): Promise<Place> {
		return this.prisma.place.create({ data });
	}

	async getPlace(where: Prisma.PlaceWhereUniqueInput): Promise<Place | null> {
		return this.prisma.place.findUnique({
			where: where,
		});
	}

	async getPlaces(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.PlaceWhereUniqueInput;
		where?: Prisma.PlaceWhereInput;
		orderBy?: Prisma.PlaceOrderByWithRelationInput;
	}): Promise<Place[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.place.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}

	async updatePlace(params: {
		where: Prisma.PlaceWhereUniqueInput;
		data: Prisma.PlaceUpdateInput;
	}): Promise<Place> {
		const { data, where } = params;
		return this.prisma.place.update({
			data,
			where,
		});
	}

	async deletePlace(where: Prisma.PlaceWhereUniqueInput): Promise<Place> {
		return this.prisma.place.delete({
			where,
		});
	}

	async getCheckIn(
		where: Prisma.CheckInWhereUniqueInput,
	): Promise<CheckIn | null> {
		return this.prisma.checkIn.findUnique({
			where: where,
		});
	}

	async getCheckIns(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.CheckInWhereUniqueInput;
		where?: Prisma.CheckInWhereInput;
		orderBy?: Prisma.CheckInOrderByWithRelationInput;
	}): Promise<CheckIn[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.checkIn.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}

	async createCheckin(data: Prisma.CheckInCreateInput): Promise<CheckIn> {
		return this.prisma.checkIn.create({ data });
	}

	async updateCheckin(params: {
		where: Prisma.CheckInWhereUniqueInput;
		data: Prisma.CheckInUpdateInput;
	}): Promise<CheckIn> {
		const { data, where } = params;
		return this.prisma.checkIn.update({
			data,
			where,
		});
	}

	async deleteCheckIn(where: Prisma.CheckInWhereUniqueInput): Promise<CheckIn> {
		return this.prisma.checkIn.delete({
			where,
		});
	}
}
