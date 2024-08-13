import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LeftBackArrow } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';


const NotificationSettingsScreen = () => {
  const navigation = useNavigation();
  const [messageNotificationsEnabled, setMessageNotificationsEnabled] = useState(true);
  const [groupNotificationsEnabled, setGroupNotificationsEnabled] = useState(true);
  const [previewEnabled, setPreviewEnabled] = useState(true);

  return (
    <View style={styles.container}>
    <View style={styles.header}><TouchableOpacity style={{marginLeft:5}} onPress={()=>navigation.goBack()}>
    <LeftBackArrow/></TouchableOpacity>
     <Text style={{fontSize:16,color:Colors.PRIMARY,marginLeft:5}}>Settings</Text>
      <Text style={styles.headerTitle}>Chats</Text>
    </View>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          WARNING: Push Notifications are disabled. To enable visit: iPhone Settings {'>'} Notifications {'>'} WhatsApp
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MESSAGE NOTIFICATIONS</Text>
        <View style={styles.row}>
          <Text>Show Notifications</Text>
          <Switch
            value={messageNotificationsEnabled}
            onValueChange={setMessageNotificationsEnabled}
          />
        </View>
        <TouchableOpacity style={styles.row}>
          <Text>Sound</Text>
          <Text style={styles.note}>Note</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>GROUP NOTIFICATIONS</Text>
        <View style={styles.row}>
          <Text>Show Notifications</Text>
          <Switch
            value={groupNotificationsEnabled}
            onValueChange={setGroupNotificationsEnabled}
          />
        </View>
        <TouchableOpacity style={styles.row}>
          <Text>Sound</Text>
          <Text style={styles.note}>Note</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.section}>
        <Text>In-App Notifications</Text>
        <Text style={styles.note}>Banners, Sounds, Vibrate</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text>Show Preview</Text>
          <Switch
            value={previewEnabled}
            onValueChange={setPreviewEnabled}
          />
        </View>
        <Text style={styles.previewText}>Preview message text inside new message notifications.</Text>
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Notification Settings</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  warningContainer: {
    padding: 10,
    backgroundColor: '#EFEFF4',
    marginBottom: 20,
  },
  warningText: {
    color: 'gray',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  headerText: {
    color:Colors.PRIMARY,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 4, 
    fontSize: 20,
    fontWeight: 'bold',
   marginLeft:'20%'
  
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
  },
  settingsButton: {

  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#A9A9A9',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  note: {
    color: '#A9A9A9',
  },
  previewText: {
    color: '#A9A9A9',
    marginTop: 10,
    fontSize: 12,
  },
  resetButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  resetButtonText: {
    color: 'red',
  },
});

export default NotificationSettingsScreen;
