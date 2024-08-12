import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import { Back, Call, CameraImg, Sticker, VideoCall, Audio, Add, CameraIcon, CamImg, Gallery, Document, Location, Contact } from '../Utils/SvgIcons';
import Colors from './../Utils/Colors';

export default function ChatDetailScreen({ route }) {
  const { name, avatar } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
        <TouchableOpacity onPress={openModal}>
          <Add />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Type a message" />
          <Sticker style={styles.stickerIcon} />
        </View>
        <CamImg />
        <Audio />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{display:'flex',flexDirection:'row'}}>
                <CamImg/>
              <Text style={styles.modalText}>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Gallery/>
              <Text style={styles.modalText}>Photo & Video Library</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
            <View style={{display:'flex',flexDirection:'row'}}><Document/>
              <Text style={styles.modalText}>Document</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
            <View style={{display:'flex',flexDirection:'row'}}><Location/>
              <Text style={styles.modalText}>LOcation</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
            <View style={{display:'flex',flexDirection:'row'}}><Contact/>
              <Text style={styles.modalText}>Contact</Text></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginTop: 20,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  modalButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft:10
  },
  cancelButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  cancelText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontWeight: '500',
  },
});
