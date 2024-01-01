import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Following from './FollowingTab';
import ForYou from './ForYouTab';

const TopTab = createMaterialTopTabNavigator();

export const Homepage = () => {
	return (
		<TopTab.Navigator>
			<TopTab.Screen name="For you" component={ForYou} />
			<TopTab.Screen name="Following" component={Following} />
		</TopTab.Navigator>
	);
};

export default Homepage;
