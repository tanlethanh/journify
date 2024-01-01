import { useMemo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, MapIcon, SignpostBigIcon } from 'lucide-react-native';
import { ThemeColors } from 'src/theme';

import { useAuth } from './auth';

import Explore from '@/screens/Explore';
import Homepage from '@/screens/Homepage';
import Map from '@/screens/Map';
import User from '@/screens/User';

enum TabScreens {
	HOMEPAGE = 'Home',
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
	const { user } = useAuth();
	const profileName = useMemo(() => {
		const words = user?.displayName.split(' ') || [];
		if (words?.length <= 2) return user?.displayName;
		else return user?.displayName;
	}, [user]);

	return (
		<Tab.Navigator
			initialRouteName={TabScreens.HOMEPAGE}
			screenOptions={{
				headerTitleAlign: 'left',
				tabBarStyle: styles.tabBarStyle,
				tabBarLabelStyle: styles.tabBarLabelStyle,
				tabBarActiveTintColor: ThemeColors.PRIMARY,
			}}
		>
			<Tab.Screen
				name={TabScreens.HOMEPAGE}
				component={Homepage}
				options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
			/>
			<Tab.Screen
				name={TabScreens.MAP}
				component={Map}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <MapIcon color={color} />,
				}}
			/>
			<Tab.Screen
				name={TabScreens.EXPLORE}
				component={Explore}
				options={{
					tabBarIcon: ({ color }) => <SignpostBigIcon color={color} />,
				}}
			/>
			<Tab.Screen
				name={TabScreens.USER}
				component={User}
				options={{
					headerShown: false,
					tabBarLabel: profileName || 'User',
					tabBarIcon: ({ color }) =>
						user?.photoURL ? (
							<Image style={styles.avatar} source={{ uri: user.photoURL }} />
						) : (
							<SignpostBigIcon color={color} />
						),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	avatar: {
		width: 32,
		height: 32,
		borderRadius: 16,
	},
	tabBarStyle: {
		height: 60,
		paddingTop: 4,
		paddingBottom: 8,
	},
	tabBarLabelStyle: {
		fontSize: 12,
	},
});
