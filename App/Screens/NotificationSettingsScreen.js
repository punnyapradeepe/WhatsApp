import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LeftBackArrow, SideArrow } from '../Utils/SvgIcons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const NotificationSettingsScreen = () => {
  const navigation = useNavigation();
  const [messageNotificationsEnabled, setMessageNotificationsEnabled] = useState(true);
  const [groupNotificationsEnabled, setGroupNotificationsEnabled] = useState(true);
  const [previewEnabled, setPreviewEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <LeftBackArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            WARNING: Push Notifications are disabled. To enable visit: iPhone Settings {'>'} Notifications {'>'} WhatsApp
          </Text>
        </View>
        <Text style={styles.sectionTitle}>MESSAGE NOTIFICATIONS</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.Text}>Show Notifications</Text>
            <Switch
              value={messageNotificationsEnabled}
              onValueChange={setMessageNotificationsEnabled}
              trackColor={{ false: Colors.Gray, true: Colors.PRIMARY }}
              thumbColor={messageNotificationsEnabled ? 'white' : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          <TouchableOpacity style={styles.touchableRow}>
            <Text style={styles.Text}>Sound</Text>
            <Text style={styles.note}>Note</Text>
            <SideArrow />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>GROUP NOTIFICATIONS</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.Text}>Show Notifications</Text>
            <Switch
              style={styles.switchStyle}
              value={groupNotificationsEnabled}
              onValueChange={setGroupNotificationsEnabled}
              trackColor={{ false: Colors.Gray, true: Colors.PRIMARY }}
              thumbColor={groupNotificationsEnabled ? 'white' : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          <TouchableOpacity style={styles.touchableRow}>
            <Text style={styles.Text}>Sound</Text>
            <Text style={styles.note}>Note</Text>
            <SideArrow />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.Text}>In-App Notifications</Text>
            <SideArrow />
          </View>
          <Text style={styles.note1}>Banners, Sounds, Vibrate</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.Text}>Show Preview</Text>
            <Switch
              value={previewEnabled}
              onValueChange={setPreviewEnabled}
              trackColor={{ false: Colors.Gray, true: Colors.PRIMARY }}
              thumbColor={previewEnabled ? 'white' : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
        <Text style={styles.previewText}>Preview message text inside new message notifications.</Text>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset Notification Settings</Text>
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
  scrollViewContainer: {
   
  },
  warningContainer: {
   
    backgroundColor: '#EFEFF4',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: Colors.DarkGray,
  },
  warningText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
  backButton: {
    marginLeft: 5,
  },
  switchStyle: {
    transform: [{ scaleX: 1.10 }, { scaleY: 1.2 }],
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor: Colors.Gray,
  },
  sectionTitle: {
    color: Colors.DarkGray,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  Text: {
    fontSize: 18,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  touchableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  note: {
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 5,
    color: Colors.DarkGray,
  },
  note1: {
   
    marginRight: 10,
    marginTop: 5,
    color: Colors.DarkGray,
  },
  previewText: {
    color: Colors.DarkGray,
    marginLeft: 10,
    fontSize: 15,
    marginBottom: 10,
  },
  resetButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'red',
    fontSize: 16,
  },
});

export default NotificationSettingsScreen;
