import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import Colors from './../Utils/Colors';
import { ChatFill, LeftBackArrow, Media, Mute, RightArrow, Search, StarImg } from '../Utils/SvgIcons';

export default function ContactInfoScreen({ route }) {
  const { id } = route.params;
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`http://192.168.137.1:5000/chats/${id}`);
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info: ', error);
      }
    };

    fetchContactInfo();
  }, [id]);

  if (!contactInfo) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { avatar, Firstname, Lastname, mobile, status, StatusUpdateDate } = contactInfo;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginLeft: 10 }}>
          <LeftBackArrow />
        </View>
        <Text style={styles.name1}>{`${Firstname} ${Lastname}`}</Text>
        <Text style={styles.headerTitle}>Contact Info</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Image source={imageMapping[avatar]} style={styles.avatar} />
      <View style={styles.statusContainer2}>
        <TouchableOpacity style={styles.messageRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Text style={styles.name}>{`${Firstname} ${Lastname}`}</Text>
              <Text style={styles.mobile}>{mobile}</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:'auto'}}>
            <View style={styles.chatFillContainer}>
              <ChatFill />
            </View>
            <View style={styles.chatFillContainer}>
              <ChatFill />
            </View>
            <View style={styles.chatFillContainer}>
              <ChatFill />
            </View></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageRow1}>
          <View style={{ marginRight: 10 }}>
            <Mute />
          </View>
          <Text style={styles.messageText}>Mute</Text>
          <RightArrow style={styles.rightArrow} />
        </TouchableOpacity>
      </View>

      <Text style={styles.status}>{status}</Text>
      <Text style={styles.statusUpdateDate}>{StatusUpdateDate}</Text>

      <View style={styles.statusContainer1}>
        <TouchableOpacity style={styles.messageRow}>
          <View style={{ marginRight: 10 }}>
            <Media />
          </View>
          <Text style={styles.messageText}>Media, Links, and Docs</Text>
          <RightArrow style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageRow}>
          <View style={{ marginRight: 20 }}>
            <StarImg />
          </View>
          <Text style={styles.messageText}>Starred Messages</Text>
          <RightArrow style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageRow1}>
          <View style={{ marginRight: 10 }}>
            <Search />
          </View>
          <Text style={styles.messageText}>Chat Search</Text>
          <RightArrow style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.statusContainer1}>
        <TouchableOpacity style={styles.messageRow1}>
          <View style={{ marginRight: 10 }}>
            <Mute />
          </View>
          <Text style={styles.messageText}>Mute</Text>
          <RightArrow style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 30,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  editButton: {
    marginLeft: 'auto',
  },
  editText: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginRight: 10,
  },
  avatar: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  name1: {
    fontSize: 20,
    color: Colors.PRIMARY,
    marginLeft: 10,
  },
  mobile: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.DarkGray,
  },
  status: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  statusUpdateDate: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  statusContainer1: {
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 30,
    borderTopColor: Colors.Gray,
    borderBottomColor: Colors.Gray,
    borderWidth: 1,
    borderColor: Colors.Gray,
  },
  statusContainer2: {
    backgroundColor: '#FFF',
    padding: 10,
    borderTopColor: Colors.Gray,
    borderBottomColor: Colors.Gray,
    borderWidth: 1,
    borderColor: Colors.Gray,
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
  messageRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  chatFillContainer: {
    padding: 10,
    backgroundColor: Colors.Gray,
    borderRadius: 50,
    marginLeft: 10,
   
    
  },
  messageText: {
    fontSize: 16,
    fontWeight: '400',
    marginRight: 'auto',
  },
});
