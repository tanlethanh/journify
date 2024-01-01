import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
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
				tabBarIcon: ({ color }) => {
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
			<Tab.Screen
				name={TabScreens.HOMEPAGE}
				component={Homepage}
				options={({ navigation }) => ({
					headerShown: true,
					title: TabScreens.HOMEPAGE,
					headerTitleAlign: 'left',
					headerStyle: styles.headerStyle,
					headerRight: () => (
						<TouchableOpacity
							style={styles.headerRight}
							onPress={() => navigation.navigate('Map')}
						>
							<Map color={isDarkMode ? Colors.white : Colors.black} />
						</TouchableOpacity>
					),
				})}
			/>
			<Tab.Screen
				name={TabScreens.EXPLORE}
				component={Explore}
				options={({ navigation }) => ({
					headerShown: true,
					title: TabScreens.EXPLORE,
					headerTitleAlign: 'left',
					headerStyle: styles.headerStyle,
					headerRight: () => (
						<TouchableOpacity
							style={styles.headerRight}
							onPress={() => navigation.navigate('Map')}
						>
							<Map color={isDarkMode ? Colors.white : Colors.black} />
						</TouchableOpacity>
					),
				})}
			/>
			<Tab.Screen
				name={TabScreens.USER}
				component={User}
				options={({ navigation }) => ({
					headerShown: true,
					title: TabScreens.USER,
					headerTitleAlign: 'left',
					headerStyle: styles.headerStyle,
					headerRight: () => (
						<TouchableOpacity
							style={styles.headerRight}
							onPress={() => navigation.navigate('Map')}
						>
							<Map color={isDarkMode ? Colors.white : Colors.black} />
						</TouchableOpacity>
					),
				})}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	headerRight: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},
	headerStyle: {
		backgroundColor: '#FFFFFF',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowColor: 'black',
		shadowOpacity: 1,
		shadowRadius: 3.84,
		elevation: 15,
	},
});
