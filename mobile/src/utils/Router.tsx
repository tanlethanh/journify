import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Example from '@/screens/Example';
import { FirstOnboarding } from '@/screens/Onboarding';
import Splash from '@/screens/Splash';

type RootStackParamList = {
	FirstOnboarding: undefined;
	Example: undefined;
	Splash: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="FirstOnboarding" component={FirstOnboarding} />
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="Example" component={Example} />
		</Stack.Navigator>
	);
};

export default Router;
