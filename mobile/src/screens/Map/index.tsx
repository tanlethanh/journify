import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Geo from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

import { grantLocationPermission } from './utils';

export const Map = () => {
	useEffect(() => {
		(async function () {
			const granted = await grantLocationPermission();
			if (granted) {
				console.log('granted');
				Geo.getCurrentPosition(
					(pos) => {
						console.log('get current position success', pos);
					},
					(err) => {
						console.log('get current position failed', err);
					},
				);
			} else {
				console.log('not granted');
			}
		})();
	}, []);

	return (
		<MapView
			style={styles.container}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		/>
	);
};

export default Map;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
	},
});
