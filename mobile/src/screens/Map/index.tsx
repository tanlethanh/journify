import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Place, Search } from './components';
import { useLocation } from './utils';

export const Map = () => {
	const { region } = useLocation();
	const { top } = useSafeAreaInsets();
	const searchBarStyle = { ...styles.searchBar, top };

	return (
		<View style={styles.container}>
			<MapView
				style={styles.mapContainer}
				initialRegion={region}
				region={region}
				showsUserLocation={true}
			>
				<Place
					image={{
						uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
					}}
					location={{
						latitude: region.latitude + 0.005,
						longitude: region.longitude + 0.005,
					}}
				/>
			</MapView>
			<View style={searchBarStyle}>
				<Search />
			</View>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchBar: {
		position: 'absolute',
		left: 0,
		right: 0,
		paddingHorizontal: 14,
	},
	mapContainer: {
		flex: 1,
	},
});
