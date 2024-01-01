import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeColors } from 'src/theme';

import Following from './FollowingTab';
import ForYou from './ForYouTab';

const TopTab = createMaterialTopTabNavigator();

export const Homepage = () => {
	return (
		<TopTab.Navigator
			screenOptions={{
				tabBarStyle: { elevation: 0 },
				tabBarIndicatorStyle: { backgroundColor: ThemeColors.PRIMARY },
			}}
		>
			<TopTab.Screen name="For you" component={ForYou} />
			<TopTab.Screen name="Following" component={Following} />
		</TopTab.Navigator>
	);
};

export default Homepage;
