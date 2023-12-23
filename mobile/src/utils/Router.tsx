import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Example from '@/screens/Example';
import Map from '@/screens/Map';
import {
	FirstOnBoarding,
	SecondOnBoarding,
	ThirdOnBoarding,
} from '@/screens/Onboarding';
import Splash from '@/screens/Splash';

type RootStackParamList = {
	Splash: undefined;
	FirstOnBoarding: undefined;
	SecondOnBoarding: undefined;
	ThirdOnBoarding: undefined;
	// Example: undefined;
	Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="FirstOnBoarding" component={FirstOnBoarding} />
			<Stack.Screen name="SecondOnBoarding" component={SecondOnBoarding} />
			<Stack.Screen name="ThirdOnBoarding" component={ThirdOnBoarding} />
			{/* <Stack.Screen name="Example" component={Example} /> */}
			<Stack.Screen name="Map" component={Map} />
		</Stack.Navigator>
	);
};

export default Router;
