import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	onPress?: () => void;
}

export const NextButton: FC<Props> = ({ style, onPress }) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
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
		</TouchableOpacity>
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
