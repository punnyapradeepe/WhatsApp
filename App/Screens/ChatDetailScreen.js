import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import { Back, Call, VideoCall } from '../Utils/SvgIcons';
import Colors from './../Utils/Colors'

export default function ChatDetailScreen({ route }) {
  const { name, avatar } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back/>
        <Image source={imageMapping[avatar]} style={styles.avatar} />
        <View>
        <Text style={styles.headerTitle}>{name}</Text>
        <Text style ={{color: Colors.DarkGray}}>tap here for contact info</Text>
        </View>
        <VideoCall/>
        <Call/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop:30
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
   
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
});
