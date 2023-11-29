import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StateProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Router from './utils/Router';
import { store } from './store';

function App(): JSX.Element {
	return (
		<StateProvider store={store}>
			<NavigationContainer>
				<StatusBar translucent backgroundColor={'transparent'} />
				<SafeAreaProvider style={styles.container}>
					<Router />
				</SafeAreaProvider>
			</NavigationContainer>
		</StateProvider>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#141416',
	},
});
