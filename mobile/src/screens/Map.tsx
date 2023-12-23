import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
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
