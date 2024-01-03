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
import { FileImage } from 'lucide-react-native';

import { postDiscovery } from '@/api/posts';
import { useLocation } from '@/utils/map';

const Discovery = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const [name, setName] = useState<string>('');
	const [handle, setHandle] = useState<string>('');
	const [caption, setCaption] = useState<string>('');
	const [image, setPostImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const { region } = useLocation();

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
		await postDiscovery({
			name,
			handle,
			caption,
			imageURL: image || '',
			latitude: region.latitude,
			longitude: region.longitude,
		});
		setLoading(false);
		setCaption('');
		setPostImage(null);
	};

	return (
		<View style={styles.container}>
			<Text>Name</Text>
			<TextInput
				style={styles.singleLineTextInput}
				placeholder="Location"
				value={name}
				onChangeText={setName}
			/>

			<Text>Handle</Text>
			<TextInput
				style={styles.singleLineTextInput}
				placeholder="@handle"
				value={handle}
				onChangeText={setHandle}
			/>

			<Text>Caption</Text>
			<TextInput
				style={styles.textInput}
				placeholder="What's on your mind?"
				value={caption}
				onChangeText={setCaption}
				multiline
			/>

			{image && <Image source={{ uri: image }} style={styles.imagePreview} />}
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
		gap: 10,
	},
	imagePreview: {
		width: '100%',
		height: 200,
		marginVertical: 10,
	},
	singleLineTextInput: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		borderColor: '#D9D9D9',
		borderWidth: 1,
		borderRadius: 10,
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

export default Discovery;
