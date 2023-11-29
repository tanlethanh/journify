import { Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StateProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './store';

function App(): JSX.Element {
	console.log(StatusBar.currentHeight, '<-- status bar', Platform.OS);
	return (
		<StateProvider store={store}>
			<NavigationContainer>
				<SafeAreaProvider style={[styles.container, styles.background]}>
					<StatusBar backgroundColor={styles.background.backgroundColor} />
					<Text>Hello</Text>
				</SafeAreaProvider>
			</NavigationContainer>
		</StateProvider>
	);
}

export default App;

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#141416',
	},
	container: {
		flex: 1,
	},
});
