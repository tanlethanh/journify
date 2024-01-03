import type { AxiosError } from 'axios';

import { Axios } from './axios';

type CheckInData = {
	caption: string;
	imageURL: string | null;
	placeId: number;
};

type CheckInResponse = {
	id: number;
	caption: string;
	upvote: number;
	downvote: number;
	impressions: number;
	imageURL: string;
	placeId: number;
	authorId: number;
};

export const postCheckIn = async (checkInData: CheckInData) => {
	try {
		const response = await Axios.post('posts/checkins', {
			...checkInData,
		});
		return response.data as CheckInResponse;
	} catch (error) {
		console.log('Error posting data: ', (error as AxiosError).response?.data);
	}
};

type DiscoveryData = {
	name: string;
	caption: string;
	handle: string;
	imageURL: string;
	latitude: number;
	longitude: number;
};

type PlaceResponse = {
	id: number;
	name: string;
	caption: string;
	handle: string;
	upvote: number;
	downvote: number;
	impressions: number;
	imageURL: string;
	latitude: number;
	longitude: number;
	ownerId: number;
};

export const postDiscovery = async (discoveryData: DiscoveryData) => {
	try {
		const response = await Axios.post('posts/places', discoveryData);
		return response.data as PlaceResponse;
	} catch (error) {
		console.log('Error posting data: ', (error as AxiosError).response?.data);
	}
};
