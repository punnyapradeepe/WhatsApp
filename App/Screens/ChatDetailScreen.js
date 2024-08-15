import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, Keyboard, ImageBackground } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import { Back, Call, VideoCall, Audio, Add, CamImg, Sticker, Gallery, Document, Location, Contact } from '../Utils/SvgIcons';
import Colors from './../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChatDetailScreen({ route }) {
  const navigation = useNavigation();
  const { id, name, avatar } = route.params; 
  const [modalVisible, setModalVisible] = useState(false);
  const [chatData, setChatData] = useState(null);
  const [inputText, setInputText] = useState(''); 
  const [messages, setMessages] = useState([]);  
  const [editMessageId, setEditMessageId] = useState(null); // Track message being edited
  const [editText, setEditText] = useState(''); // Store the text being edited

  useEffect(() => {
    const url = `http://192.168.55.101:5000/chats/${id}`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        setChatData(json);
      })
      .catch(error => {
        console.error('Error fetching chat data: ', error);
      });
  }, [id]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const formatDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleSendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Add timestamp
        date: formatDate(),
      };
      setMessages([...messages, newMessage]); 
      setInputText(''); 
      Keyboard.dismiss();  
    }
  };

  const handleLongPress = (index) => {
    setEditMessageId(index);
    setEditText(messages[index].text);
  };

  const handleEditMessage = () => {
    if (editMessageId !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editMessageId].text = editText;
      setMessages(updatedMessages);
      setEditMessageId(null);
      setEditText('');
    }
  };

  const handleDeleteMessage = () => {
    if (editMessageId !== null) {
      const updatedMessages = messages.filter((_, index) => index !== editMessageId);
      setMessages(updatedMessages);
      setEditMessageId(null);
      setEditText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <View style={{marginLeft: 10}}>
            <Back />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingRight: 15, marginLeft: 'auto'}} onPress={() => navigation.navigate('contactInfo', { id })}>
          <Image source={imageMapping[avatar]} style={styles.avatar} />
          <View>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={{ color: Colors.DarkGray, paddingLeft: 10 }}>Tap here for contact info</Text>
          </View>
        </TouchableOpacity>
        <VideoCall />
        <Call />
      </View>

      <ImageBackground source={require('./../../assets/Images/Rectangle (2).png')} style={styles.backgroundImage}>
        <View style={styles.messagesContainer}>
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <>
                {index === 0 || messages[index - 1].date !== item.date ? (
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                  </View>
                ) : null}
                <TouchableOpacity onLongPress={() => handleLongPress(index)} style={styles.messageContainer}>
                  <Text style={styles.messageText}>{item.text}</Text>
                  <Text style={styles.messageTime}>{item.time}</Text>
                </TouchableOpacity>
              </>
            )}
            contentContainerStyle={{ padding: 10 }}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={openModal}>
            <Add />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSendMessage} 
            />
            <Sticker style={styles.stickerIcon} />
          </View>
          <CamImg />
          <Audio />
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <CamImg />
                <Text style={styles.modalText}>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Gallery />
                <Text style={styles.modalText}>Photo & Video Library</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Document />
                <Text style={styles.modalText}>Document</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Location />
                <Text style={styles.modalText}>Location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Contact />
                <Text style={styles.modalText}>Contact</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {editMessageId !== null && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={editMessageId !== null}
          onRequestClose={() => setEditMessageId(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.textInput}
                value={editText}
                onChangeText={setEditText}
                placeholder="Edit message"
              />
              <TouchableOpacity style={styles.modalButton} onPress={handleEditMessage}>
                <Text style={styles.modalText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleDeleteMessage}>
                <Text style={styles.modalText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setEditMessageId(null)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingRight:10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if needed
  },
  messagesContainer: {
    flex: 1,
    paddingBottom: 70, // Add padding to make space for the footer
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
    marginLeft: 10,
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
  messageContainer: {
    backgroundColor: '#e1ffc7',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    alignItems: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  dateContainer: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'lightblue',
    width:100,
    height:20,
    alignSelf:'center',
    borderRadius:10
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  stickerIcon: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  modalButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalText: {
    fontSize: 16,
  },
  cancelButton: {
    padding: 15,
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
  },
});
