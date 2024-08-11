import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CallBtn } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';

export default function CallScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: Colors.PRIMARY }}>Edit</Text>
        <View style={styles.filterContainer}>
          <View style={styles.filterItem}>
            <Text style={styles.allText}>All</Text>
          </View>
          <Text>Missed</Text>
        </View>
        <CallBtn />
      </View>
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
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  filterItem: {
    borderRightWidth: 1,
    paddingHorizontal: 10,
  },
  allText: {
    color: 'white',
  
  },
});
