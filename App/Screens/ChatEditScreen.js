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

  const deleteSelectedMessages = () => {
    const newData = data.filter(item => !selectedItems.includes(item.id));
    setData(newData);
    setSelectedItems([]);
    setIsEditMode(false);
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
          <TouchableOpacity style={styles.footerButton} onPress={deleteSelectedMessages}>
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
