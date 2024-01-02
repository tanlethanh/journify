import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native';
import { MapPinIcon, SearchIcon } from 'lucide-react-native';

interface Props {
	style?: ViewStyle;
}

export const Search: FC<Props> = ({ style }) => {
	return (
		<View style={[style, styles.container]}>
			<SearchIcon color="#848484" />
			<TextInput
				style={styles.searchInput}
				placeholder="Type location..."
				placeholderTextColor={'#848484'}
			/>
			<MapPinIcon color="#848484" />
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 14,
		paddingVertical: 14,
		borderRadius: 200,
	},
	searchInput: {
		flex: 1,
		color: '#000000',
		padding: 0,
	},
});
