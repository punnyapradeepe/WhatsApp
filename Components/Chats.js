import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Andrew Parker',
    message: 'What kind of strategy is better?',
    date: '11/16/19',
    avatar: require('./../assets/Images/Oval.png')
  },
  {
    id: '2',
    name: 'Karen Castillo',
    message: '0:14',
    date: '11/15/19',
    avatar:  require('./../assets/Images/Oval.png')
  },
  {
    id: '3',
    name: 'Maximillian Jacobson',
    message: 'Bro, I have a good idea!',
    date: '10/30/19',
    avatar:  require('./../assets/Images/Oval.png')
  },
  {
    id: '4',
    name: 'Martha Craig',
    message: 'Photo',
    date: '10/28/19',
    avatar:  require('./../assets/Images/Oval.png')
  },
  {
    id: '5',
    name: 'Tabitha Potter',
    message: 'Actually I wanted to check with you about your online business plan on our...',
    date: '8/25/19',
    avatar:  require('./../assets/Images/Oval.png')
  },
  {
    id: '6',
    name: 'Maisy Humphrey',
    message: 'Welcome, to make design process faster, look at Pixsellz',
    date: '8/20/19',
    avatar: require('./../assets/Images/Oval.png')
  },
  {
    id: '7',
    name: 'Kieron Dotson',
    message: 'Ok, have a good trip!',
    date: '7/29/19',
    avatar: require('./../assets/Images/Oval.png')
  },
];

const ChatListItem = ({ name, message, date, avatar }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={avatar} style={styles.avatar} />
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
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <ChatListItem
            name={item.name}
            message={item.message}
            date={item.date}
            avatar={item.avatar}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
});
