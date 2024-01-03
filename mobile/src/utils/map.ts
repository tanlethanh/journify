import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geo from 'react-native-geolocation-service';
import { interpolateColor } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

import { getMockedPlaces, mockedCheckIns } from './mock';

import type { RootState } from '@/store';
import { setCheckIns, setLocation, setPlaces } from '@/store';
import type { PlaceData } from '@/types';

export const useLocation = () => {
	const location = useSelector((state: RootState) => state.app.location);
	const dispatch = useDispatch();

	const resolveLocation = async () => {
		const granted = await grantLocationPermission();
		if (!granted) {
			console.log('not granted');
			return;
		}

		try {
			const loc = await getCurrentLocation();
			dispatch(
				setLocation({ lat: loc.coords.latitude, long: loc.coords.longitude }),
			);
		} catch (e) {
			console.log('can not get current location', e);
		}
	};

	useEffect(() => {
		resolveLocation();

		const watchId = Geo.watchPosition((loc) => {
			dispatch(
				setLocation({ lat: loc.coords.latitude, long: loc.coords.longitude }),
			);
		});

		return Geo.clearWatch(watchId);
	}, []);

	return { region: location };
};

export const usePlaces = () => {
	const { region } = useLocation();
	const places = useSelector((state: RootState) => state.places.places);
	const checkIns = useSelector((state: RootState) => state.places.checkIns);
	const dispatch = useDispatch();

	useEffect(() => {
		if (checkIns.length === 0) {
			dispatch(setCheckIns({ checkIns: mockedCheckIns }));
		}
	}, []);

	useEffect(() => {
		if (places.length === 0 || places.length === 5) {
			const updatedPlaces = getMockedPlaces(region);
			dispatch(setPlaces({ places: updatedPlaces }));
		}
	}, [region]);

	return { places, checkIns };
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
