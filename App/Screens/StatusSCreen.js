import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../Utils/Colors';
import { CameraIcon, EditIcon } from '../Utils/SvgIcons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const StatusScreen = () => {
const navigation =useNavigation();
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.uri);
     
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Status</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statusContainer}>
          <Image
            source={require('./../../assets/Images/Oval 2.png')}
            style={styles.profileImage}
          />
          <View style={styles.statusInfo}>
            <Text style={styles.statusText}>My Status</Text>
            <Text style={styles.subText}>Add to my status</Text>
          </View>
          <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={openCamera}>
            <CameraIcon size={24} color="blue" />
          </TouchableOpacity>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('editStaus')}>
              <EditIcon size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.noUpdates}>
          <Text style={styles.noUpdatesText}>No recent updates to show right now.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD', 
    paddingTop: 40,
  },
  headerText: {
    color: Colors.PRIMARY, 
    justifyContent: 'flex-start',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '29%',
  },
  content: {
    paddingHorizontal: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    borderWidth: 2,
    borderColor: Colors.Gray,
  },
  statusInfo: {
    flex: 1,
    marginLeft: 10,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: Colors.DarkGray,
    fontSize: 14,
  },
  iconsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.Gray,
    borderRadius: 50,
    padding: 5,
    marginLeft: 5,
  },
  noUpdates: {
    marginTop: 20,
    alignItems: 'center',
  },
  noUpdatesText: {
    color: '#888',
  },
});

export default StatusScreen;
