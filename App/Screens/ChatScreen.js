import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import { Archive, Dots, EditBtn } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import imageMapping from './../../Components/imageMapping';

const getImageSource = (imageName) => {
  return imageMapping[imageName];
};

const ChatListItem = ({ id, name, message, date, avatar, msgStatus, isSelected, onSelect, onPress, onLongPress, onSwipeableWillOpen, isEditMode }) => {
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
        {isEditMode && (
          <TouchableOpacity
            style={[styles.selectionCircle, isSelected && styles.selectionCircleSelected]}
            onPress={onSelect}
          />
        )}
        <Image source={getImageSource(avatar)} style={styles.avatar} />
        <View style={styles.messageContainer}>
          <View style={styles.messageHeader}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.messageWithStatusContainer}>
            <Image source={getImageSource(msgStatus)} style={styles.msgStatus} />
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default function ChatScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [previousSwipeable, setPreviousSwipeable] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);  
  const [selectedItems, setSelectedItems] = useState([]);  

  useEffect(() => {
    const url = 'http://192.168.55.101:5000/chats';

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
    if (isEditMode) {
      toggleSelection(item.id);
    } else {
      navigation.navigate('ChatDetailScreen', {
        id: item.id,
        name: item.name,
        avatar: item.avatar,
        msgStatus: item.msgStatus
      });
    }
  };

  const handleLongPress = (item) => {
    if (!isEditMode) {
      setSelectedItem(item);
      setModalVisible(true);
    }
  };
  

  const handleSwipeableWillOpen = (swipeableRef) => {
    if (previousSwipeable && previousSwipeable !== swipeableRef) {
      previousSwipeable.current?.close();
    }
    setPreviousSwipeable(swipeableRef);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (!isEditMode) setSelectedItems([]); // Reset selection when exiting edit mode
  };

  const toggleSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
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
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={toggleEditMode}>
          <Text style={styles.headerButtonText}>{isEditMode ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chats</Text>
        <TouchableOpacity style={styles.headerButton} onPress={toggleEditMode}>
          <EditBtn />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rowButton}>
          <Text style={styles.rowButtonText}>Broadcast Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rowButton, styles.newGroupButton]}>
          <Text style={styles.rowButtonText}>New Group</Text>
        </TouchableOpacity>
      </View>

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
            msgStatus={item.msgStatus}
            isSelected={selectedItems.includes(item.id)}
            onSelect={() => toggleSelection(item.id)}
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item)}
            onSwipeableWillOpen={handleSwipeableWillOpen}
            isEditMode={isEditMode}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {isEditMode && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Archive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Read All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

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
    backgroundColor: 'white',
    paddingTop: 40,
    padding:10

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowButton: {
    flex: 1,
  },
  newGroupButton: {
    marginRight: 20,
    alignItems: 'flex-end',
  },
  rowButtonText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 20,
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
  messageWithStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgStatus: {
    marginRight: 10,
  },
  message: {
    color: 'gray',
    fontSize: 14,
  },
  rightActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRightWidth: 1,
    borderColor: 'white',
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
  selectionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginRight: 10,
    alignSelf: 'center',
   
  },
  selectionCircleSelected: {
    backgroundColor: '#007AFF',
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
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    paddingHorizontal: 20,
  },
  footerButtonText: {
    fontSize: 16,
    color: Colors.DarkGray,
  },
});
