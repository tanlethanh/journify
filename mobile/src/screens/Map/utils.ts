import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geo from 'react-native-geolocation-service';
import type { Region } from 'react-native-maps';
import { interpolateColor } from 'react-native-reanimated';

import { getMockedPlaces } from './mock';
import type { PlaceData } from './types';

// Ho Chi Minh city
const defaultLocation: Region = {
	latitude: 10.762622,
	latitudeDelta: 0.04,
	longitude: 106.660172,
	longitudeDelta: 0.02,
};

export const useLocation = () => {
	const [region, setRegion] = useState<Region>(defaultLocation);

	const resolveLocation = async () => {
		const granted = await grantLocationPermission();
		if (!granted) {
			console.log('not granted');
			return;
		}

		try {
			const loc = await getCurrentLocation();
			setRegion({
				latitude: loc.coords.latitude as number,
				latitudeDelta: defaultLocation.latitudeDelta,
				longitude: loc.coords.longitude as number,
				longitudeDelta: defaultLocation.longitudeDelta,
			});
		} catch (e) {
			console.log('can not get current location', e);
		}
	};

	useEffect(() => {
		resolveLocation();

		const watchId = Geo.watchPosition((loc) => {
			setRegion({
				latitude: loc.coords.altitude as number,
				latitudeDelta: defaultLocation.latitudeDelta,
				longitude: loc.coords.longitude as number,
				longitudeDelta: defaultLocation.longitudeDelta,
			});
		});

		return Geo.clearWatch(watchId);
	}, []);

	return { region };
};

export const usePlaces = () => {
	const { region } = useLocation();
	const places = getMockedPlaces(region);

	return { places };
};

export const grantLocationPermission = async (): Promise<boolean> => {
	if (Platform.OS === 'android') {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		);
		if (granted == 'granted') return true;
	} else if (Platform.OS === 'ios') {
		const granted = await Geo.requestAuthorization('whenInUse');
		if (granted == 'granted') return true;
	}

	return false;
};

const getCurrentLocation = (): Promise<Geo.GeoPosition> => {
	return new Promise((resolve, reject) => {
		Geo.getCurrentPosition(
			(pos) => resolve(pos),
			(err) => reject(err),
		);
	});
};

export const inspectCheckInCount = (place: PlaceData) => {
	const color = interpolateColor(
		place.checkInCount,
		[0, 500, 1000, 10000],
		['#00E0FF', '#24B2A1', '#2487B2', '#24B24C'],
	);

	let value = place.checkInCount.toString();
	if (place.checkInCount > 1000) {
		value = (place.checkInCount / 1000).toFixed(1) + 'k';
	}

	return { color, value };
};
