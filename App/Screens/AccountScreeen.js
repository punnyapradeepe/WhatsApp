import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { LeftBackArrow, RightArrow, SideArrow } from '../Utils/SvgIcons'
import { useNavigation } from '@react-navigation/native'

export default function AccountScreeen() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <TouchableOpacity style={ styles.backArrow} onPress={() => navigation.goBack()}>
          <LeftBackArrow />
        </TouchableOpacity>
        <TouchableOpacity style={{ zIndex: 1 }} onPress={() => navigation.goBack()}>
  <Text style={{ color: Colors.PRIMARY, fontSize: 18 }}>Settings</Text>
</TouchableOpacity>


        <Text style={styles.editProfileText}>Account</Text>
      </View>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow} >
            <Text style={styles.messageText}>Privacy</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageRow}>
            <Text style={styles.messageText}>Security</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageRow}>
            <Text style={styles.messageText}>Two-Step Verification</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row2}>
            <Text style={styles.messageText}>Change Number</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow}>
            <Text style={styles.messageText}>Request Account Info</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row2}>
            <Text style={styles.messageText}>Delete My Account</Text>
            <RightArrow style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
    </View>
  )
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


  },
  backArrow: {
    zIndex: 1,
  },
  settingsText: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginLeft: 1,
  },
  editProfileText: {
    fontSize: 25,
    color: Colors.Black,
    position: 'absolute',
    fontWeight:'bold',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 0, 
  },
  content: {
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 30,
  },
  row2:
    {  flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,},

  statusContainer1: {
    backgroundColor: '#FFF',
    padding: 10,

    marginTop: 30,
    borderTopColor: Colors.Gray,
    borderBottomColor: Colors.Gray,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    borderWidth: 2,
    borderColor: Colors.Gray,
  },
  statusInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: Colors.DarkGray,
    fontSize: 14,
  },
  rightArrow: {
    marginRight: 20,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 18,
marginRight:'auto',

  },
})