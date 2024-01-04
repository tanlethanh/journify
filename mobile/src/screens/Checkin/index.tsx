import { useState } from 'react';
import {
	ActivityIndicator,
	Button,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	useColorScheme,
	View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { FileImage } from 'lucide-react-native';

import { postCheckIn } from '@/api/posts';
import { addCheckIn } from '@/store/map';
import { useAuth } from '@/utils/auth';
import { usePlaces } from '@/utils/map';

const CheckIn = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const [postText, setPostText] = useState<string>('');
	const [postImage, setPostImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const { places } = usePlaces();
	const dispatch = useDispatch();
	const { user } = useAuth();
	const currentPlace = places.find((e) => e.real === true);

	const handleImagePick = () => {
		launchImageLibrary(
			{ mediaType: 'photo', includeBase64: true },
			(response) => {
				if (response.assets?.length) {
					const uri = 'data:image/png;base64,' + response.assets[0].base64;
					setPostImage(uri);
				}
			},
		);
	};

	const handleSubmit = async () => {
		setLoading(true);
		if (currentPlace) {
			const checkin = await postCheckIn({
				caption: postText,
				imageURL: postImage,
				placeId: currentPlace?.id as number,
			});
			if (checkin) {
				dispatch(
					addCheckIn({
						checkIn: {
							id: checkin?.id,
							caption: checkin?.caption,
							placeId: checkin?.placeId,
							date: '3 Jan',
							imageUrl: checkin?.imageURL,
							user: {
								name: user?.displayName as string,
								handle: '@me',
								tick: true,
								image: user?.photoURL as string,
								discovery: 100,
							},
							upvote: checkin?.upvote,
							downvote: checkin?.downvote,
							impressions: checkin?.impressions,
							replyCount: 0,
						},
					}),
				);
			}
		} else {
			console.log('not found current place');
		}
		setLoading(false);
		setPostText('');
		setPostImage(null);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="What's on your mind?"
				value={postText}
				onChangeText={(text) => setPostText(text)}
				multiline
			/>
			{postImage && (
				<Image source={{ uri: postImage }} style={styles.imagePreview} />
			)}
			<TouchableOpacity onPress={handleImagePick} style={styles.attachment}>
				<FileImage color={isDarkMode ? Colors.white : Colors.black} />
				<Text>Add Image</Text>
			</TouchableOpacity>
			{loading ? (
				<ActivityIndicator />
			) : (
				<Button title="Post" onPress={handleSubmit} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 20,
	},
	imagePreview: {
		width: '100%',
		height: 200,
		marginVertical: 10,
	},
	textInput: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		height: 100,
		textAlignVertical: 'top',
		borderColor: '#D9D9D9',
		borderWidth: 1,
		borderRadius: 10,
		color: '#000000',
	},
	attachment: {
		flexDirection: 'row',
		gap: 20,
	},
});

export default CheckIn;
