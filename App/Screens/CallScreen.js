import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CallBtn } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import Calls from './../../Components/Calls';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CallScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('calledit')}>
        <Text style={{ color: Colors.PRIMARY }}>Edit</Text></TouchableOpacity>
        <View style={styles.filterContainer}>
          <View style={[styles.filterItem, styles.leftFilter]}>
            <Text style={styles.leftText}>All</Text>
          </View>
          <View style={[styles.filterItem, styles.rightFilter]}>
            <Text style={styles.rightText}>Missed</Text>
          </View>
        </View>
        <CallBtn />
      </View>
      <Calls />
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
});
