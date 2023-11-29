import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Example from '@/screens/Example';
import { FirstOnboarding, SecondOnboarding } from '@/screens/Onboarding';
import Splash from '@/screens/Splash';

type RootStackParamList = {
	FirstOnboarding: undefined;
	SecondOnboarding: undefined;
	Example: undefined;
	Splash: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SecondOnboarding" component={SecondOnboarding} />
			<Stack.Screen name="FirstOnboarding" component={FirstOnboarding} />
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="Example" component={Example} />
		</Stack.Navigator>
	);
};

export default Router;
