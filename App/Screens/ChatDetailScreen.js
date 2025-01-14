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
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [chatData, setChatData] = useState(null);
  const [inputText, setInputText] = useState(''); 
  const [messages, setMessages] = useState([]);  
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);
  const [isEdited, setIsEdited] = useState(false);

  
  useEffect(() => {
    const url = `http://192.168.1.40:5000/chats/${id}`;

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
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: formatDate(),
        isEdited: isEdited, // Track if the message was edited
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      setIsEdited(false); // Reset after sending the message
      Keyboard.dismiss();
    }
  };
  

  const handleLongPress = (index) => {
    setSelectedMessageIndex(index);
    setOptionsModalVisible(true);
  };

  const handleDeleteMessage = () => {
    setMessages(messages.filter((_, i) => i !== selectedMessageIndex));
    setOptionsModalVisible(false);
  };

  const handleEditMessage = () => {
    setInputText(messages[selectedMessageIndex].text);
    setMessages(messages.filter((_, i) => i !== selectedMessageIndex));
    setOptionsModalVisible(false);
    setIsEdited(true); // Set this to true when editing a message
  };
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <View style={{marginleft:10}}>
        <Back /></View></TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',paddingRight:15,marginleft:'auto'}} onPress={() => navigation.navigate('contactInfo', { id })}>
          <Image source={imageMapping[avatar]} style={styles.avatar} />
          <View>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={{ color: Colors.DarkGray ,paddingLeft:10}}>Tap here for contact info</Text>
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
      <TouchableOpacity
        onLongPress={() => handleLongPress(index)}
        style={styles.messageContainer}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
        {item.isEdited && <Text style={styles.editedLabel}>Edited</Text>}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={optionsModalVisible}
        onRequestClose={() => setOptionsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={handleEditMessage}>
              <Text style={styles.optionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleDeleteMessage}>
              <Text style={styles.optionText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setOptionsModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
   paddingBottom:20,
   paddingTop:6,
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
  editedLabel: {
    fontSize: 10,
    color: Colors.DarkGray,
    marginTop: 2,
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
  optionsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  optionButton: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
