import renderer from 'react-test-renderer';
import { it } from '@jest/globals';

import 'react-native';

import App from '../App';

it('renders correctly', () => {
	renderer.create(<App />);
});
