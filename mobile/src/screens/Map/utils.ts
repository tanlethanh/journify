import { PermissionsAndroid, Platform } from 'react-native';
import Geo from 'react-native-geolocation-service';

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
