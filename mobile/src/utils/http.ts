import axios from 'axios';

const request = axios.create({ baseURL: `http://192.168.1.2:3000/` });

type CheckInData = {
	caption: string;
	imageURL: string | null;
};

export const postCheckIn = async (checkInData: CheckInData) => {
	try {
		const response = await request.post('posts', checkInData);
		return response;
	} catch (error) {
		console.error('Error posting data:', error);
	}
};
