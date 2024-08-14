import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Iconimg } from '../App/Utils/SvgIcons';
import Colors from '../App/Utils/Colors';

const callHistory = [
  {
    id: '1',
    name: 'Martin Randolph',
    type: 'outgoing',
    date: '10/13/19',
    avatar: require('./../assets/Images/Oval.png'),
  },
  {
    id: '2',
    name: 'Karen Castillo',
    type: 'outgoing',
    date: '10/11/19',
    avatar: require('./../assets/Images/Oval (2).png'),
  },
  {
    id: '3',
    name: 'Kieron Dotson',
    type: 'outgoing',
    date: '10/8/19',
    avatar: require('./../assets/Images/Oval (3).png'),
  },
  {
    id: '4',
    name: 'Karen Castillo',
    type: 'missed',
    date: '9/30/19',
    avatar: require('./../assets/Images/Oval (4).png'),
  },
  {
    id: '5',
    name: 'Zack John',
    type: 'incoming',
    date: '9/24/19',
    avatar: require('./../assets/Images/Oval (6).png'),
  },
  {
    id: '6',
    name: 'Martin Randolph',
    type: 'outgoing',
    date: '10/13/19',
    avatar: require('./../assets/Images/Oval (4).png'),
  },
  {
    id: '7',
    name: 'Karen Castillo',
    type: 'outgoing',
    date: '10/11/19',
    avatar: require('./../assets/Images/Oval (2).png'),
  },
  {
    id: '8',
    name: 'Kieron Dotson',
    type: 'missed',
    date: '10/8/19',
    avatar: require('./../assets/Images/Oval (3).png'),
  },
  {
    id: '9',
    name: 'Karen Castillo',
    type: 'missed',
    date: '9/30/19',
    avatar: require('./../assets/Images/Oval (3).png'),
  },
  {
    id: '10',
    name: 'Zack John',
    type: 'incoming',
    date: '9/24/19',
    avatar: require('./../assets/Images/Oval (4).png'),
  },
];

export default function CallEditComp() {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.infoContainer}>
            <Text
              style={[
                styles.name,
                item.type === 'missed' && styles.missedCallName,
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.callType,
                item.type === 'missed'
              ]}
            >
              {item.type}
            </Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
    
        </View>
      );
    
      return (
        <FlatList
          data={callHistory}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      );
    };
    
    const styles = StyleSheet.create({
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      infoContainer: {
        flex: 1,
      },
      name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000', 
      },
      missedCallName: {
        color: 'red',
      },
      callType: {
        fontSize: 14,
        color: '#999',
      },
      missedCall: {
        color: 'red',
      },
      date: {
        fontSize: 14,
        color: '#999',
      },
      infoButton: {
        marginLeft: 10,
      },
    });
    