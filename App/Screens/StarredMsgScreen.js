import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import { LeftBackArrow } from '../Utils/SvgIcons';
import { useNavigation } from '@react-navigation/native';

export default function StarredMsgScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
          <LeftBackArrow />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={styles.settingsText}>Settings</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Starred Messages</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('./../../assets/Images/starred.png')} style={styles.image} />
        <Text style={styles.noMessagesText}>No Starred Messages</Text>
        <Text style={styles.infoText}>Tap and hold on any message to star it to</Text>
        <Text style={styles.infoText}>easily find it later</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
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
  backArrow: {
  
  },
  settingsText: {
    color: Colors.PRIMARY,
    fontSize: 17,
   
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
   paddingLeft:30,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  noMessagesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGray,
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DarkGray,
  },
});
