import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';
import { CallBtn } from '../Utils/SvgIcons';

const initialCallHistory = [
  // ... (your initial call history data)
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
    setIsEditing(false);
  };

  const clearAllItems = () => {
    setCallHistory([]);
    setSelectedItems([]);
    setIsEditing(false);
  };

  const toggleEditing = () => {
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
        <Text
          style={[
            styles.name,
            item.type === 'missed' && styles.missedCallName,
          ]}
        >
          {item.name}
        </Text>
        <Text style={styles.callType}>{item.type}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
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
          <TouchableOpacity onPress={deleteSelectedItems}>
            <Text style={{ color: Colors.PRIMARY }}>Delete</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={clearAllItems}>
            <Text style={{ color: Colors.PRIMARY }}>Clear</Text>
          </TouchableOpacity>
        )}
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
