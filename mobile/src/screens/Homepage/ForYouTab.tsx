import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import CheckInDetail from './component/CheckInDetail';
import { checkIns as data } from './mock';
export const ForYou = () => {
	const checkIns = data;
	const navigation = useNavigation();

	const handlePressViewMap = () => {
		navigation.navigate('Map' as never);
	};
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scroll}
				contentContainerStyle={styles.checkInsContainer}
			>
				<View style={styles.suggestion}>
					<Text style={styles.title}>
						Do you want to explore your area map?
					</Text>
					<View style={styles.suggestContent}>
						<View style={styles.suggestionTextBox}>
							<Text style={styles.suggestionText}>
								Discover local gems and recommendations. Start exploring for
								daily adventures that make your day extraordinary!
							</Text>
							<TouchableOpacity
								style={styles.button}
								onPress={handlePressViewMap}
							>
								<Text style={styles.buttonText}>Explore map</Text>
							</TouchableOpacity>
						</View>
						<LottieView
							style={styles.animation}
							source={require('@/assets/images/earth_animation.json')}
							autoPlay
							loop
						/>
					</View>
				</View>
				<View style={styles.line} />
				{checkIns.map((c, i) => {
					return <CheckInDetail key={c.id} checkIn={c} showImage={i > 0} />;
				})}
			</ScrollView>
		</View>
	);
};

export default ForYou;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DC143C',
	},
	scroll: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	checkInsContainer: {
		padding: 10,
		paddingBottom: 40,
	},
	button: {
		backgroundColor: '#24B24C',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 12,
		fontWeight: '800',
		color: '#FFFFFF',
	},
	title: {
		color: '#000000',
		fontSize: 16,
		fontWeight: '700',
	},
	suggestionText: {
		color: '#000000',
		textAlign: 'left',
		fontSize: 15,
		lineHeight: 20,
	},
	suggestion: {
		flex: 1,
		gap: 10,
		paddingBottom: 20,
		paddingHorizontal: 10,
		paddingTop: 10,
	},
	line: {
		backgroundColor: '#D9D9D9',
		height: 1,
		width: '100%',
		marginBottom: 20,
	},
	animation: {
		width: 120,
		height: 120,
	},
	suggestContent: {
		flex: 1,
		flexDirection: 'row',
	},
	suggestionTextBox: {
		flex: 1,
		gap: 20,
	},
});
