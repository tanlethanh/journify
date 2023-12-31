import type { FC } from 'react';
import type { ColorValue } from 'react-native';
import { Path, Svg } from 'react-native-svg';

type Props = {
	fill?: ColorValue;
	stroke?: ColorValue;
	size?: number;
};

export const TrendUpIcon: FC<Props> = ({ size, fill, stroke }) => {
	return (
		<Svg
			width={size}
			height={size}
			fill={fill || 'none'}
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke={stroke || 'currentColor'}
		>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
			/>
		</Svg>
	);
};

export default TrendUpIcon;
