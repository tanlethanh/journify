import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Discovery, Place, Search, User } from './components';
import { getColorByCheckInCount, useLocation, usePlaces } from './utils';

import { useAuth } from '@/utils/auth';

export const Map = () => {
	const { user } = useAuth();
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
				<User location={region} imageUrl={user?.photoURL as string} />
			</MapView>
			<View style={searchBarStyle}>
				<Search />
			</View>
			<View style={styles.bottomView}></View>
			<Discovery style={styles.bottomView} />
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
	bottomView: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 14,
		paddingTop: 16,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		shadowOffset: {
			height: -1,
			width: 0,
		},
		shadowOpacity: 0.2,
	},
});
