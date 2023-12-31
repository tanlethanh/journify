import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Place, Search } from './components';
import { getColorByCheckInCount, useLocation, usePlaces } from './utils';

export const Map = () => {
	const { region } = useLocation();
	const { places } = usePlaces();
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
				{places.map((p) => {
					const { color, value } = getColorByCheckInCount(p);
					return (
						<Place
							key={p.id}
							title={p.name}
							location={p.location}
							image={{ uri: p.imageUrl }}
							tagText={value}
							tagColor={color}
						/>
					);
				})}
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
