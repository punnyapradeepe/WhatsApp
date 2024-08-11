import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import { Back, Call, CameraImg, Sticker, VideoCall, Audio, Add, CameraIcon, CamImg } from '../Utils/SvgIcons';
import Colors from './../Utils/Colors';

export default function ChatDetailScreen({ route }) {
  const { name, avatar } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Image source={imageMapping[avatar]} style={styles.avatar} />
        <View>
          <Text style={styles.headerTitle}>{name}</Text>
          <Text style={{ color: Colors.DarkGray }}>Tap here for contact info</Text>
        </View>
        <VideoCall />
        <Call />
      </View>
      <View style={styles.footer}>
        <Add />
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Type a message" />
          <Sticker style={styles.stickerIcon} />
        </View>
        <CamImg />
        <Audio />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderColor: Colors.Gray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-between', 
  },
  textInput: {
    flex: 1,
    marginRight: 10, 
  },

});
