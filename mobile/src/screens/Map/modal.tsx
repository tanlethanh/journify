import { PlaceDetail } from './components';
import type { CheckInData, PlaceData } from './types';

import { showModal } from '@/utils/modal';

export const showDetailPlaceModal = (
	place: PlaceData,
	checkIns: CheckInData[],
) => {
	showModal({
		id: `place-detail-${place.id}`,
		index: 1,
		snapPoints: ['50%', '94%'],
		handleStyle: { padding: 0 },
		Component: () => {
			return <PlaceDetail place={place} checkIns={checkIns} />;
		},
	});
};
