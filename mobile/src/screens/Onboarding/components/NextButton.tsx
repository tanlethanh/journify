import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
}

export const NextButton: FC<Props> = ({ style }) => {
	return (
		<View style={[styles.container, style]}>
			<Svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				stroke="#FFFFFF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<Path d="M18 8L22 12L18 16" />
				<Path d="M2 12H22" />
			</Svg>
		</View>
	);
};

export default NextButton;

const styles = StyleSheet.create({
	container: {
		height: 40,
		width: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#22b24d',
	},
});
