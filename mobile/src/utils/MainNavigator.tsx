import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookUser, Home, Map, SignpostBig } from 'lucide-react-native';
import { ThemeColors } from 'src/theme';

import Explore from '@/screens/Explore';
import Homepage from '@/screens/Homepage';
import User from '@/screens/User';

enum TabScreens {
	HOMEPAGE = 'Homepage',
	EXPLORE = 'Explore',
	MAP = 'Map',
	USER = 'User',
}

export type TabParamList = {
	[TabScreens.HOMEPAGE]: undefined;
	[TabScreens.EXPLORE]: undefined;
	[TabScreens.MAP]: undefined;
	[TabScreens.USER]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const MainNavigator = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<Tab.Navigator
			initialRouteName={TabScreens.HOMEPAGE}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === TabScreens.USER) {
						return <BookUser color={color} />;
					} else if (route.name === TabScreens.EXPLORE) {
						return <SignpostBig color={color} />;
					} else if (route.name === TabScreens.MAP) {
						return <Map color={color} />;
					}
					return <Home color={color} />;
				},
				tabBarStyle: {
					width: '100%',
					height: '7%',
					paddingTop: '2%',
					paddingBottom: '2%',
				},
				tabBarLabelStyle: {
					fontSize: 12,
					marginTop: 0,
				},
				tabBarActiveTintColor: ThemeColors.PRIMARY,
				tabBarInactiveTintColor: isDarkMode ? Colors.white : Colors.black,
			})}
		>
			<Tab.Screen name={TabScreens.HOMEPAGE} component={Homepage} />
			<Tab.Screen name={TabScreens.EXPLORE} component={Explore} />
			<Tab.Screen name={TabScreens.USER} component={User} />
		</Tab.Navigator>
	);
};
