import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { CallBtn, Iconimg } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const callHistory = [
  {
    id: '1',
    name: 'Martin Randolph',
    type: 'outgoing',
    date: '10/13/19',
    avatar: require('./../../assets/Images/Oval.png'),
  },
  {
    id: '2',
    name: 'Karen Castillo',
    type: 'outgoing',
    date: '10/11/19',
    avatar: require('./../../assets/Images/Oval (2).png'),
  },
  {
    id: '3',
    name: 'Kieron Dotson',
    type: 'outgoing',
    date: '10/8/19',
    avatar: require('./../../assets/Images/Oval (3).png'),
  },
  {
    id: '4',
    name: 'Karen Castillo',
    type: 'missed',
    date: '9/30/19',
    avatar: require('./../../assets/Images/Oval (4).png'),
  },
  {
    id: '5',
    name: 'Zack John',
    type: 'incoming',
    date: '9/24/19',
    avatar: require('./../../assets/Images/Oval (6).png'),
  },
  {
    id: '6',
    name: 'Martin Randolph',
    type: 'outgoing',
    date: '10/13/19',
    avatar: require('./../../assets/Images/Oval (4).png'),
  },
  {
    id: '7',
    name: 'Karen Castillo',
    type: 'outgoing',
    date: '10/11/19',
    avatar: require('./../../assets/Images/Oval (2).png'),
  },
  {
    id: '8',
    name: 'Kieron Dotson',
    type: 'missed',
    date: '10/8/19',
    avatar: require('./../../assets/Images/Oval (3).png'),
  },
  {
    id: '9',
    name: 'Karen Castillo',
    type: 'missed',
    date: '9/30/19',
    avatar: require('./../../assets/Images/Oval (3).png'),
  },
  {
    id: '10',
    name: 'Zack John',
    type: 'incoming',
    date: '9/24/19',
    avatar: require('./../../assets/Images/Oval (4).png'),
  },
];

export default function CallScreen() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('All');

  const filteredCalls = callHistory.filter(
    (item) => filter === 'All' || item.type === 'missed'
  );

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
      <TouchableOpacity style={styles.infoButton}>
        <Iconimg />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('calledit')}>
          <Text style={{ color: Colors.PRIMARY }}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterItem,
              filter === 'All' ? styles.leftFilter : styles.rightFilter,
            ]}
            onPress={() => setFilter('All')}
          >
            <Text
              style={filter === 'All' ? styles.leftText : styles.rightText}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterItem,
              filter === 'missed' ? styles.leftFilter : styles.rightFilter,
            ]}
            onPress={() => setFilter('missed')}
          >
            <Text
              style={filter === 'missed' ? styles.leftText : styles.rightText}
            >
              Missed
            </Text>
          </TouchableOpacity>
        </View>
        <CallBtn />
      </View>
      <FlatList
        data={filteredCalls}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
    paddingBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
    overflow: 'hidden',
  },
  filterItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  leftFilter: {
    backgroundColor: Colors.PRIMARY,
  },
  rightFilter: {
    backgroundColor: 'white',
  },
  leftText: {
    color: 'white',
  },
  rightText: {
    color: Colors.PRIMARY,
  },
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
  date: {
    fontSize: 14,
    color: '#999',
  },
  infoButton: {
    marginLeft: 10,
  },
});
