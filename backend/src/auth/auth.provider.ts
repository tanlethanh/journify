import type { ServiceAccount } from 'firebase-admin';
import * as firebaseAdmin from 'firebase-admin';

import * as serviceAccount from '../../firebase.admin.json';

export const FirebaseProvider = {
	provide: 'FIREBASE_APP',
	useFactory: () => {
		const config = serviceAccount as ServiceAccount;
		return firebaseAdmin.initializeApp({
			credential: firebaseAdmin.credential.cert(config),
		});
	},
};
