import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import ModalContainer from './ModalContainer';
import type { UIState } from './state';

const ModalManager = () => {
	const modals = useSelector((state: UIState) => state.modal.map);

	return (
		<Fragment>
			{Object.values(modals).map((config) => {
				return <ModalContainer key={config.id} {...config} />;
			})}
		</Fragment>
	);
};

export default ModalManager;
