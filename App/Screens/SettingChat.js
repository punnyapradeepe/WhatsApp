import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { LeftBackArrow, RightArrow } from '../Utils/SvgIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';

export default function SettingChat() {
  const navigation = useNavigation();
  const [saveToCameraRollEnabled, setSaveToCameraRollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftBackArrow style={styles.backArrow} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{color:Colors.PRIMARY,fontSize:18}}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.editProfileText}>Chats</Text>
      </View>

      <TouchableOpacity style={styles.statusContainer}>
        <Text style={styles.StatusText}>Change Wallpaper</Text>
        <RightArrow />
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <Text style={styles.StatusText}>Save to Camera Roll</Text>
        <Switch
          style={styles.switchStyle}
          value={saveToCameraRollEnabled}
          onValueChange={setSaveToCameraRollEnabled}
          trackColor={{ false: Colors.Gray, true: Colors.PRIMARY }}
          thumbColor={saveToCameraRollEnabled ? 'white' : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      <Text style={styles.infoText}>
        Automatically save photos and videos you receive to your iPhone's Camera Roll
      </Text>

      <TouchableOpacity style={styles.statusContainer}>
        <Text style={styles.StatusText}>Chat BackUp</Text>
        <RightArrow />
      </TouchableOpacity>

      <View style={styles.statusContainer1}>
        <TouchableOpacity style={styles.messageRow}>
          <Text style={styles.messageText1}>Archive All Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageRow}>
          <Text style={styles.messageText}>Clear All Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageRow1}>
          <Text style={styles.messageText}>Delete All Chats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
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
    justifyContent: 'center', 
  },
  backArrowContainer: {
    position: 'absolute',
    left: 15,
    top:40
  },
  backArrow: {
    zIndex: 1,
  },
  editProfileText: {
    fontSize: 25,
    color: Colors.Black,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
     marginRight:'20%'
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginTop: 30,
    borderWidth: 1,
    borderColor: Colors.Gray,
  },
  StatusText: {
    fontSize: 18,
    flex: 1, 
  },
  infoText: {
    marginTop: 5,
    color: Colors.DarkGray,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  statusContainer1: {
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 30,
    borderTopColor: Colors.Gray,
    borderBottomColor: Colors.Gray,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
    paddingVertical: 10,
  },
  messageRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 18,
    marginRight: 'auto',
    color: 'red',
  },
  messageText1: {
    fontSize: 16,
    marginRight: 'auto',
    color: Colors.PRIMARY,
  },
});
