import type React from 'react';
import { useState } from 'react';
import {
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
import { FileImage } from 'lucide-react-native';

import { postCheckIn } from '@/utils/http';
const CheckIn = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const [postText, setPostText] = useState<string>('');
	const [postImage, setPostImage] = useState<string | null>(null);

	const handleImagePick = () => {
		launchImageLibrary({ mediaType: 'photo' }, (response) => {
			if (response.assets?.length) {
				setPostImage(response.assets[0].uri as string);
			}
		});
	};
	const handleSubmit = () => {
		postCheckIn({
			caption: postText,
			imageURL: postImage,
		});
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
				<Text>Addd Image</Text>
			</TouchableOpacity>
			<Button title="Post" onPress={handleSubmit} />
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
	},
	attachment: {
		flexDirection: 'row',
		gap: 20,
	},
});

export default CheckIn;
