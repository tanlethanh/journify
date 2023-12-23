import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geo from 'react-native-geolocation-service';
import type { Region } from 'react-native-maps';

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
			console.log(loc, '<-- location');
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
