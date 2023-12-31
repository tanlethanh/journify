import {
	ScrollView,
	Text,
	TouchableOpacity,
	useColorScheme,
	View,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import { showModal } from '@/utils/modal';

export function Example(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<View style={backgroundStyle}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}
			>
				<Header />
				<TouchableOpacity
					style={{
						backgroundColor: 'green',
						padding: 20,
					}}
					onPress={() => {
						showModal({
							id: 'example',
							activeOffsetX: 0,
							detached: true,
							topInset: 100,
							bottomInset: 100,
							style: {
								marginHorizontal: 100,
							},
							Component: () => {
								return (
									<View style={{ backgroundColor: 'blue', height: 100 }}>
										<Text>Modal</Text>
									</View>
								);
							},
						});
					}}
				>
					<Text>Open modal</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

export default Example;
