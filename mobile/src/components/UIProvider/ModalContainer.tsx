import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import { hideModalAction, type ModalConfig } from './state/modal';
import { uiStore } from './state';

const ModalContainer = (config: ModalConfig) => {
	const {
		id,
		index,
		style,
		context,
		Component,
		onDismiss,
		snapPoints,
		useBackdrop = true,
		backgroundStyle,
		...bottomSheetConfig
	} = config;
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	const handleDismiss = () => {
		onDismiss?.();
		uiStore.dispatch(hideModalAction({ id }));
	};

	useEffect(() => {
		bottomSheetModalRef.current?.present();
	}, []);

	return (
		<BottomSheetModal
			style={[styles.sheet, style]}
			index={index || 0}
			ref={bottomSheetModalRef}
			snapPoints={snapPoints || ['100%']}
			onDismiss={handleDismiss}
			handleIndicatorStyle={styles.handleIndicator}
			backdropComponent={useBackdrop ? CustomBackdrop : null}
			backgroundStyle={[styles.background, backgroundStyle]}
			{...bottomSheetConfig}
		>
			<Component context={context} />
		</BottomSheetModal>
	);
};

const CustomBackdrop: FC<BottomSheetBackdropProps> = (props) => {
	return (
		<BottomSheetBackdrop {...props} opacity={0.3} disappearsOnIndex={-1} />
	);
};

export default ModalContainer;

const styles = StyleSheet.create({
	handleIndicator: {
		height: 0,
	},
	sheet: {
		borderRadius: 20,
		overflow: 'hidden',
		shadowOffset: {
			width: 1,
			height: 1,
		},
		elevation: 8,
		shadowOpacity: 0.5,
		shadowColor: '#000000',
	},
	background: {
		borderRadius: 0,
	},
});
