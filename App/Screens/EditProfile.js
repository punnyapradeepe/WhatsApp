import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LeftBackArrow } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LeftBackArrow style={styles.backArrow} />
        <Text style={styles.settingsText}>Settings</Text>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('./../../assets/Images/Oval 2.png')}
              style={styles.profileImage}
            />
            <Text style={styles.editImageText}>Edit</Text>
          </View>
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
    flex: 1, // Ensures the text takes up available space
  },
  editProfileText: {
    fontSize: 20,
    color: Colors.Black,
    textAlign: 'center',
    flex: 1, // Centers the text
  },
  content: {
    padding: 10,
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
