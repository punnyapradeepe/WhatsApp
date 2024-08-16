import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import Colors from '../Utils/Colors';
import { LeftBackArrow, RightArrow } from '../Utils/SvgIcons';
import { useNavigation } from '@react-navigation/native';

const DataAndStorageUsageScreen = () => {
  const [lowDataUsage, setLowDataUsage] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <View style={styles.leftContainer}>
          <LeftBackArrow />
        </View></TouchableOpacity>
        <Text style={styles.titleText}>Data and Storage Usage</Text>
      </View>
<ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MEDIA AUTO-DOWNLOAD</Text>
        <TouchableOpacity style={styles.option1}>
          <Text style={styles.optionText}>Photos</Text>
          <Text style={styles.optionDetail}>Wi-Fi and Cellular</Text>
          <View style={{ marginRight: 10 }}><RightArrow /></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Audio</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
          <View style={{ marginRight: 10 }}><RightArrow /></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Videos</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
          <View style={{ marginRight: 10 }}><RightArrow /></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Documents</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
          <View style={{ marginRight: 10 }}><RightArrow /></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText1}>Reset Auto-Download Settings</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>
          Voice Messages are always automatically downloaded for the best communication experience.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CALL SETTINGS</Text>
        <View style={styles.option2}>
          <Text style={styles.optionText}>Low Data Usage</Text>
          <Switch
            value={lowDataUsage}
            onValueChange={(value) => setLowDataUsage(value)}
          />
        </View>
        <Text style={styles.noteText}>
          Lower the amount of data used during a WhatsApp call on cellular.
        </Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Network Usage</Text>
        <View style={{ marginRight: 10 }}><RightArrow /></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Storage Usage</Text>
        <View style={{ marginRight: 10 }}><RightArrow /></View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingBottom:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingTop: 40,
    justifyContent: 'space-between', 
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  settingsText: {
    color: Colors.PRIMARY,
    marginLeft: 1,
    fontSize:17
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    top:40
  },
  section: {
   
  },
  sectionTitle: {
    fontSize: 15,
    color: '#8E8E93',
    marginTop: 10,
    paddingHorizontal: 15,
    marginTop:20,
    marginBottom:10
    
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  option1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  option2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '400',
  },
  optionText1: {
    fontSize: 16,
    color: Colors.DarkGray,
  },
  optionDetail: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 'auto',
    marginRight:10
  },
  noteText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom:10
  },
});

export default DataAndStorageUsageScreen;
