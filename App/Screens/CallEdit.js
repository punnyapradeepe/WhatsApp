import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';

const initialCallHistory = [
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

export default function CallEdit() {
  const [callHistory, setCallHistory] = useState(initialCallHistory);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState('All'); // Add state for filter

  const toggleSelect = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const deleteSelectedItems = () => {
    setCallHistory((prevCallHistory) =>
      prevCallHistory.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  const clearAllItems = () => {
    setCallHistory([]);
    setSelectedItems([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[
          styles.redCircle,
          selectedItems.includes(item.id) && styles.selectedCircle,
        ]}
        onPress={() => toggleSelect(item.id)}
      >
        {selectedItems.includes(item.id) && <View style={styles.horizontalLine} />}
      </TouchableOpacity>
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
            item.type === 'missed' && styles.missedCall,
          ]}
        >
          {item.type}
        </Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  const filteredData = filter === 'All' ? callHistory : callHistory.filter(item => item.type === 'missed');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={deleteSelectedItems}>
          <Text style={{ color: Colors.PRIMARY }}>Done</Text>
        </TouchableOpacity>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterItem, filter === 'All' ? styles.leftFilter : styles.rightFilter]}
            onPress={() => setFilter('All')}
          >
            <Text style={filter === 'All' ? styles.leftText : styles.rightText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterItem, filter === 'Missed' ? styles.leftFilter : styles.rightFilter]}
            onPress={() => setFilter('Missed')}
          >
            <Text style={filter === 'Missed' ? styles.leftText : styles.rightText}>Missed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={clearAllItems}>
          <Text style={{ color: Colors.PRIMARY }}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  redCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'red',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    backgroundColor: 'red',
  },
  horizontalLine: {
    width: 10,
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -1 }],
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
});
