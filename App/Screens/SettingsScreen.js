import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Colors from '../Utils/Colors';
import { Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, ICon8, RightArrow, StarImg } from '../Utils/SvgIcons';
import { CamImg, Gallery, Document, Location, Contact } from '../Utils/SvgIcons'; // Adjust according to your icon imports
import { useNavigation } from '@react-navigation/native';

const StatusScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.statusContainer} onPress={() => navigation.navigate('EditProfile')}>
          <Image
            source={require('./../../assets/Images/Oval 2.png')}
            style={styles.profileImage}
          />
          <View style={styles.statusInfo}>
            <View style={styles.textContainer}>
              <Text style={styles.statusText}>Sobohiddin</Text>
              <Text style={styles.subText}>Digital goodies designer - Pixsellz</Text>
            </View>
            <RightArrow style={styles.rightArrow} />
          </View>
        </TouchableOpacity>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow} onPress={() => navigation.navigate('stared')}>
            <View style={{ marginRight: 10 }}><StarImg /></View>
            <Text style={styles.messageText}>Starred Messages</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row2}>
            <View style={{ marginRight: 10 }}><Icon2 /></View>
            <Text style={styles.messageText}>WhatsApp Web/Desktop</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow} onPress={() => navigation.navigate('account')}>
            <View style={{ marginRight: 10 }}><Icon3 /></View>
            <Text style={styles.messageText}>Account</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageRow} onPress={() => navigation.navigate('whats')}>
            <View style={{ marginRight: 10 }}><Icon4 /></View>
            <Text style={styles.messageText}>Chats</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageRow} onPress={() => navigation.navigate('notification')}>
            <View style={{ marginRight: 10 }}><Icon5 /></View>
            <Text style={styles.messageText}>Notifications</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row2} onPress={() => navigation.navigate('data')}>
            <View style={{ marginRight: 10 }}><Icon6 /></View>
            <Text style={styles.messageText}>Data and Storage Usage</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow} onPress={openModal}>
            <View style={{ marginRight: 10 }}><ICon8 /></View>
            <Text style={styles.messageText}>Help</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row2}>
            <View style={{ marginRight: 10 }}><Icon7 /></View>
            <Text style={styles.messageText}>Tell a Friend</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Mail</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Message</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.modalContent}>
               
                <Text style={styles.modalText}>More</Text>
              </View>
            </TouchableOpacity>
        
          </View>
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingBottom:20
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
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    marginTop:'auto',

  },
  modalButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: Colors.PRIMARY, // Set the text color to blue
    marginLeft: 10,
    textAlign: 'center',
    flex: 1,
    fontWeight:'bold'
  },
  cancelButton: {
    width: '80%', // Match the width of the modal container
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    marginBottom:30
  },
  cancelText: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontWeight: '500',
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
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  statusContainer1: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    borderTopColor: Colors.Gray,
    borderBottomColor: Colors.Gray,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subText: {
    color: Colors.DarkGray,
    fontSize: 16,
  },
  rightArrow: {
    marginRight: 20,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 18,
    marginRight: 'auto',
  },
});

export default StatusScreen;
