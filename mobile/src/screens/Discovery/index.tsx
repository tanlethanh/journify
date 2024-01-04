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

import { postDiscovery } from '@/api/posts';
import { addPlace } from '@/store/map';
import { useLocation } from '@/utils/map';

const Discovery = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const [name, setName] = useState<string>('');
	const [handle, setHandle] = useState<string>('');
	const [caption, setCaption] = useState<string>('');
	const [image, setPostImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const { region } = useLocation();
	const dispatch = useDispatch();

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
		const discovery = await postDiscovery({
			name,
			handle,
			caption,
			imageURL: image || '',
			latitude: region.latitude,
			longitude: region.longitude,
		});
		if (discovery) {
			dispatch(
				addPlace({
					place: {
						id: discovery.id,
						name: discovery.name,
						handle: discovery.handle,
						caption: discovery.caption,
						imageUrl: discovery.imageURL,
						location: {
							latitude: discovery.latitude,
							longitude: discovery.longitude,
						},
						real: true,
						checkInCount: 0,
					},
				}),
			);
		}
		setLoading(false);
		setCaption('');
		setPostImage(null);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Name</Text>
			<TextInput
				style={styles.singleLineTextInput}
				placeholder="Location"
				value={name}
				onChangeText={setName}
			/>

			<Text style={styles.title}>Handle</Text>
			<TextInput
				style={styles.singleLineTextInput}
				placeholder="@handle"
				value={handle}
				onChangeText={setHandle}
			/>

			<Text style={styles.title}>Caption</Text>
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
				<Text style={styles.title}>Add Image</Text>
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
		color: '#000000',
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
	title: {
		color: '#000000',
	},
});

export default Discovery;
