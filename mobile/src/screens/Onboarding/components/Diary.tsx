import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export const Diary = () => {
	return (
		<Animated.View
			style={styles.container}
			entering={FadeInUp.delay(300).duration(500)}
		>
			<View style={styles.timeColumn} />
			<View style={styles.diaryContainer}>
				<View style={styles.itemContainer}>
					<View style={styles.blackPoint}></View>
					<View>
						<Text style={styles.blackTitleText}>
							29/11/2025 - Canh Dong Thanh Lam
						</Text>
						<Text style={styles.blackDiaryText}>
							Back to home, I’m graduated
						</Text>
					</View>
				</View>

				<View style={styles.itemContainer}>
					<View style={styles.whitePoint}></View>
					<View>
						<Text style={styles.whiteTitleText}>
							15/11/2024 - Phu Son Mountain
						</Text>
						<Text style={styles.whiteDiaryText}>
							I’m really happy for this journey, that’s wonderful life!!!
						</Text>
					</View>
				</View>
			</View>
		</Animated.View>
	);
};

export default Diary;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingLeft: 20,
	},
	timeColumn: {
		width: 4,
		height: 300,
		borderRadius: 100,
		backgroundColor: '#001d08',
	},
	diaryContainer: {
		paddingVertical: 20,
		left: -10,
		gap: 60,
	},
	itemContainer: {
		flexDirection: 'row',
		gap: 16,
	},
	blackPoint: {
		width: 16,
		height: 16,
		borderRadius: 100,
		backgroundColor: '#001d08',
	},
	whitePoint: {
		width: 16,
		height: 16,
		borderRadius: 100,
		backgroundColor: '#FFFFFF',
	},
	blackTitleText: {
		fontSize: 16,
		color: '#001d08',
		top: -3,
	},
	blackDiaryText: {
		fontSize: 24,
		color: '#001d08',
	},
	whiteTitleText: {
		fontSize: 16,
		color: '#FFFFFF',
		top: -3,
	},
	whiteDiaryText: {
		fontSize: 24,
		color: '#FFFFFF',
	},
});
