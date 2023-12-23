import { PermissionsAndroid, Platform } from 'react-native';

export const grantLocationPermission = async (): Promise<boolean> => {
	if (Platform.OS === 'android') {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		);

		console.log({ granted });

		if (granted == 'granted') {
			return true;
		}
	} else if (Platform.OS === 'ios') {
		return true;
	}

	return false;
};
