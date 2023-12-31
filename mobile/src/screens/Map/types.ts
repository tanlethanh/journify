export type PlaceData = {
	id: string;
	name: string;
	handle: string;
	location: Location;
	imageUrl: string;
	checkInCount: number;
};

export type Location = {
	latitude: number;
	longitude: number;
};
