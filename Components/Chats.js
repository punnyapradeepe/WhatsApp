import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import imageMapping from './imageMapping';
import Colors from '../App/Utils/Colors';
import { Archive, Dots } from '../App/Utils/SvgIcons';

const getImageSource = (imageName) => {
  return imageMapping[imageName];
};

const ChatListItem = ({ id, name, message, date, avatar, onPress, onLongPress, onSwipeableWillOpen }) => {
  const swipeableRef = useRef(null);

  return (
    <Swipeable
      ref={swipeableRef}
      onSwipeableWillOpen={() => {
        onSwipeableWillOpen(swipeableRef);
      }}
      renderRightActions={() => (
        <View style={styles.rightActions}>
          <TouchableOpacity style={[styles.actionButton, styles.archiveButton]}>
            <Dots />
            <Text style={styles.actionText}>More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.archiveButton]}>
            <Archive />
            <Text style={styles.actionText}>Archive</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={onPress}
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
    </Swipeable>
  );
};

export default function ChatListScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [previousSwipeable, setPreviousSwipeable] = useState(null);

  useEffect(() => {
    const url = 'http://192.168.1.40:5000/chats';

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

  const handlePress = (item) => {
    navigation.navigate('ChatDetailScreen', {
      id: item.id,
      name: item.name,
      avatar: item.avatar,
    });
  };

  const handleLongPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

 const handleSwipeableWillOpen = (swipeableRef) => {
  if (previousSwipeable && previousSwipeable !== swipeableRef) {
    previousSwipeable.current?.close();
  }
  setPreviousSwipeable(swipeableRef);
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
            id={item.id}
            name={item.name}
            message={item.message}
            date={item.date}
            avatar={item.avatar}
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item)}
            onSwipeableWillOpen={handleSwipeableWillOpen}
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
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
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
  rightActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRightWidth: 1,
    borderColor: 'white'
  },
  actionButton: {
    backgroundColor: '#C6C6CC',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  archiveButton: {
    backgroundColor: '#3E70A3',
  },
  actionText: {
    color: 'white',
    marginTop: 5,
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
  deleteButton: {
    borderBottomWidth: 0,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontWeight: '500',
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
