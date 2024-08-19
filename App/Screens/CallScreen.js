import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../Utils/Colors';
import { CallBtn, CallIcon, CallScrn } from '../Utils/SvgIcons';

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

export default function CallScreen() {
  const [callHistory, setCallHistory] = useState(initialCallHistory);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isEditing, setIsEditing] = useState(false);

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

  const toggleEditing = () => {
    if (isEditing) {
      deleteSelectedItems();
    }
    setIsEditing(!isEditing);
    if (!isEditing) {
      setSelectedItems([]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, selectedItems.includes(item.id) && styles.selectedItem]}>
      {isEditing && (
        <TouchableOpacity
          style={[
            styles.redCircle,
            selectedItems.includes(item.id) && styles.selectedCircle,
          ]}
          onPress={() => toggleSelect(item.id)}
        >
          {selectedItems.includes(item.id) && <View style={styles.horizontalLine} />}
        </TouchableOpacity>
      )}
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[
              styles.name,
              item.type === 'missed' && styles.missedCallName,
            ]}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={styles.date}>{item.date}</Text>
            {!isEditing && <CallIcon />} 
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom:5}}>
          <CallScrn />
          <Text style={styles.callType}>{item.type}</Text>
        </View>
      </View>
    </View>
  );
  

  const filteredData = filter === 'All' ? callHistory : callHistory.filter(item => item.type === 'missed');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleEditing}>
          <Text style={{ color: Colors.PRIMARY }}>
            {isEditing ? 'Done' : 'Edit'}
          </Text>
        </TouchableOpacity>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterItem, filter === 'All' ? styles.leftFilter : styles.rightFilter]}
            onPress={() => setFilter('All')}
          >
            <Text style={filter === 'All' ? styles.leftText : styles.rightText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterItem, filter === 'missed' ? styles.leftFilter : styles.rightFilter]}
            onPress={() => setFilter('missed')}
          >
            <Text style={filter === 'missed' ? styles.leftText : styles.rightText}>Missed</Text>
          </TouchableOpacity>
        </View>
        {isEditing ? (
          <TouchableOpacity onPress={clearAllItems}>
            <Text style={{ color: Colors.PRIMARY }}>Clear</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <CallBtn />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView style={{backgroundColor:'white'}}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView></View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop:25,
    paddingBottom: 8,
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
    paddingVertical: 7,
    paddingHorizontal: 10,
  
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    borderBottomWidth:1,
    borderColor:Colors.Gray
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
    marginRight:10
  },
  redCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  selectedCircle: {
    backgroundColor: 'red',
  },
  horizontalLine: {
    width: 10,
    height: 2,
    backgroundColor: 'white',
  },
});
