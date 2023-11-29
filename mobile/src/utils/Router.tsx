import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Example from '../screens/Example';

type RootStackParamList = {
	Example: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Example" component={Example} />
		</Stack.Navigator>
	);
};

export default Router;
