import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Archive, Dots, EditBtn } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import Chats from '../../Components/Chats';

export default function ChatScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chats</Text>
        <TouchableOpacity style={styles.headerButton}>
          <EditBtn />
        </TouchableOpacity>
      </View>

      
      <View style={styles.row}>
        <TouchableOpacity style={styles.rowButton}>
          <Text style={styles.rowButtonText}>Broadcast Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rowButton, styles.newGroupButton]}>
          <Text style={styles.rowButtonText}>New Group</Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,borderColor:Colors.Gray}}>

          <Text></Text>
          <View style={{marginLeft:'auto',flexDirection:'row'}}>
         
          <View style={{backgroundColor:'#C6C6CC',padding:20}}>
            <View style={{alignItems:'center', alignSelf:'center',marginTop:10}}><Dots/></View><Text style={{color:'white',alignSelf:'center',marginTop:8}}>more</Text></View>
          
          <View style={{backgroundColor:'#3E70A3',padding:20}}>
            <View style={{alignItems:'center'}}><Archive/></View>
            <Text  style={{color:'white'}}>Archive</Text></View>
        </View>
        </View>
        <Chats/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
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
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowButton: {
    flex: 1,
  },
  newGroupButton: {
    marginRight: 20,
    alignItems: 'flex-end',
  },
  rowButtonText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft:20
  },
});
