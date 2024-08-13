import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // Import ImagePicker
import { LeftBackArrow } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';

export default function EditProfile() {
  const [profileImage, setProfileImage] = useState(require('./../../assets/Images/Oval 2.png')); // Default profile image

  const selectImage = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImage({ uri: pickerResult.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LeftBackArrow style={styles.backArrow} />
        <Text style={styles.settingsText}>Settings</Text>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.profileImageContainer} onPress={selectImage}>
            <Image
              source={profileImage}
              style={styles.profileImage}
            />
            <Text style={styles.editImageText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.profileDescription}>
            <Text style={styles.descriptionText}>
              Enter your name and add an optional
            </Text>
            <Text style={styles.descriptionText}>profile picture</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Sabohiddin</Text>
        </View>
        <Text style={styles.sectionLabel}>PHONE NUMBER</Text>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>+988346244571</Text>
        </View>
        <Text style={styles.sectionLabel}>ABOUT</Text>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Digital goodies designer - Pixsellz</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundGray,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  backArrow: {
    marginRight: 10,
  },
  settingsText: {
    fontSize: 20,
    color: Colors.PRIMARY,
    marginLeft: 10,
    flex: 1, 
  },
  editProfileText: {
    fontSize: 20,
    color: Colors.Black,
    textAlign: 'center',
    flex: 1,
  },
  content: {
   
  },
  profileSection: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
  },
  profileImageContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  editImageText: {
    color: Colors.PRIMARY,
    marginTop: 5,
  },
  profileDescription: {
    justifyContent: 'center',
  },
  descriptionText: {
    color: Colors.DarkGray,
    paddingBottom:10
  },
  infoSection: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.Gray,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    color: Colors.Black,
  },
  sectionLabel: {
    paddingTop: 30,
    paddingHorizontal: 10,
    color: Colors.DarkGray,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
