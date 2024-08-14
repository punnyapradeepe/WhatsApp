import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../Utils/Colors';
import { useFocusEffect } from '@react-navigation/native';

export default function CameraScreen() {
  const [image, setImage] = useState(null);

  // Function to open the camera
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission required', 'Permission to access camera is required!');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!cameraResult.canceled) {
      setImage({ uri: cameraResult.assets[0].uri });
    }
  };

  // Use useEffect to open the camera when the component mounts
  useFocusEffect(() => {
    openCamera();
  }, []);

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={image}
          style={styles.image}
        />
      ) : (
        <Text style={styles.title}>Opening camera...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BackgroundGray,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
