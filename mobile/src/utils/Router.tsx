import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainNavigator } from './MainNavigator';

import Checkin from '@/screens/Checkin';
import {
	FirstOnBoarding,
	SecondOnBoarding,
	ThirdOnBoarding,
} from '@/screens/Onboarding';
import SignIn from '@/screens/SignIn';
import Splash from '@/screens/Splash';

export type RootStackParamList = {
	Splash: undefined;
	SignIn: undefined;
	FirstOnBoarding: undefined;
	SecondOnBoarding: undefined;
	ThirdOnBoarding: undefined;
	MainNavigator: undefined;
	Checkin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="FirstOnBoarding" component={FirstOnBoarding} />
			<Stack.Screen name="SecondOnBoarding" component={SecondOnBoarding} />
			<Stack.Screen name="ThirdOnBoarding" component={ThirdOnBoarding} />
			<Stack.Screen name="MainNavigator" component={MainNavigator} />
			<Stack.Screen
				name="Checkin"
				component={Checkin}
				options={() => ({
					headerShown: true,
					title: 'Check-in',
					headerTitleAlign: 'center',
				})}
			/>
		</Stack.Navigator>
	);
};

export default Router;
