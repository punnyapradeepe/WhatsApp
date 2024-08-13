import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { LeftBackArrow } from '../Utils/SvgIcons'
import { useNavigation } from '@react-navigation/native'

export default function StarredMsgScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton} onPress={()=>navigation.goBack()}>
         <LeftBackArrow/>
          <Text style={styles.headerText}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Starred Messages</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('./../../assets/Images/starred.png')} style={styles.image} />
      <Text style={{fontSize:18,fontWeight:'bold',color :Colors.DarkGray}}>No Starred Messages</Text>
      <Text style={{fontSize:16,fontWeight:'bold',color :Colors.DarkGray}}>Tap and hold on any message to star it,so you can</Text>
      <Text style={{fontSize:16,fontWeight:'bold',color :Colors.DarkGray}}> easily find it later</Text>
      </View>
    </View>
  )
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
  settingsButton: {

    flexDirection:'row'
  },
  headerText: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:60
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,marginRight:10
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
})
