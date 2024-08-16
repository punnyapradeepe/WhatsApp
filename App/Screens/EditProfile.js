import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // Import ImagePicker
import { LeftBackArrow } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const [profileImage, setProfileImage] = useState(require('./../../assets/Images/Oval 2.png')); 
const navigation = useNavigation();
  const selectImage = async () => {
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrowContainer}>
          <LeftBackArrow style={styles.backArrow} />
        </TouchableOpacity>
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
          <TextInput style={styles.infoText}>Sabohiddin</TextInput>
        </View>
        <TextInput style={styles.sectionLabel}>PHONE NUMBER</TextInput>
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>+91 8086658470</Text>
        </View>
        <Text style={styles.sectionLabel}>ABOUT</Text>
        <View style={styles.infoSection}>
          <TextInput style={styles.infoText}>Digital goodies designer - Pixsellz</TextInput>
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
    position: 'relative',
  },
  backArrow: {
    marginLeft: 10,
    marginRight: 10,
    zIndex: 1, // Ensure this is on top
  },
  settingsText: {
    fontSize: 20,
    color: Colors.PRIMARY,
    marginLeft: 10,
  },
  editProfileText: {
    fontSize: 20,
    color: Colors.Black,
    position: 'absolute',
    fontWeight:'bold',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 0, // Ensure this is behind the arrow
  },
  content: {
    flex: 1,
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
    paddingBottom: 5,
  },
  descriptionText1: {
    color: Colors.DarkGray,
    paddingBottom: 10,
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
