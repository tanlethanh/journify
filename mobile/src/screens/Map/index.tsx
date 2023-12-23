import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { useLocation } from './utils';

export const Map = () => {
	const { region } = useLocation();

	return (
		<MapView
			style={styles.container}
			initialRegion={region}
			region={region}
			showsUserLocation={true}
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
