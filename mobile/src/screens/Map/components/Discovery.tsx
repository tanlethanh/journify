import type { FC } from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = ViewProps;

export const Discovery: FC<Props> = ({ style, ...props }) => {
	return (
		<View style={[styles.container, style]} {...props}>
			<Text>{"You are the first one here! Let's discovery this place"}</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Discovery</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Discovery;

const styles = StyleSheet.create({
	container: {
		gap: 14,
	},
	button: {
		backgroundColor: '#1F41F4',
		borderRadius: 8,
		padding: 18,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: '800',
		color: '#FFFFFF',
	},
});
