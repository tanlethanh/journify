export type PlaceData = {
	id: number;
	name: string;
	handle: string;
	caption: string;
	location: Location;
	imageUrl: string;
	checkInCount: number;
	real?: boolean;
};

export type Location = {
	latitude: number;
	longitude: number;
};

export type UserInfo = {
	name: string;
	image: string;
	handle: string;
	tick: boolean;
	discovery: number;
};

export type Reply = {
	checkInId: string;
	content: string;
	date: string;
	user: UserInfo;
};

export type CheckInData = {
	id: number;
	placeId: number;
	date: string;
	user: UserInfo;
	upvote: number;
	downvote: number;
	impressions: number;
	caption: string;
	imageUrl: string;
	replyCount: number;
	reply?: Reply[];
};
