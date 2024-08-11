import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import imageMapping from './imageMapping';
import Colors from '../App/Utils/Colors';

const getImageSource = (imageName) => {
  console.log('Requested image:', imageName);
  return imageMapping[imageName];
};

const ChatListItem = ({ name, message, date, avatar, onLongPress }) => (
  <TouchableOpacity
    style={styles.item}
    onLongPress={onLongPress}
  >
    <Image source={getImageSource(avatar)} style={styles.avatar} />
    <View style={styles.messageContainer}>
      <View style={styles.messageHeader}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  </TouchableOpacity>
);

export default function ChatListScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const url = 'http://192.168.1.7:5000/chats';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleLongPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <ChatListItem
            name={item.name}
            message={item.message}
            date={item.date}
            avatar={item.avatar}
            onLongPress={() => handleLongPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

    
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
         <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalText}>Mute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalText}>Contact Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalText}>Export Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalText}>Clear Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.deleteButton]}>
              <Text style={[styles.modalText, styles.deleteText]}>Delete Chat</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cancelButton}  onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          
        </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  message: {
    color: 'gray',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:20,
    marginLeft:20,
    marginRight:20
  },
  modalButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  deleteButton: {
    borderBottomWidth: 0,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontWeight:'500'
  },
  deleteText: {
    color: 'red',
  },
  cancelButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom:20,
    marginLeft:20,
    marginRight:20
  },
  cancelText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontWeight:'500'
  },
});
