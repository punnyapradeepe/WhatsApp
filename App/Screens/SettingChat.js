import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { LeftBackArrow, RightArrow } from '../Utils/SvgIcons'
import { useNavigation } from '@react-navigation/native'
import Colors from '../Utils/Colors';

export default function SettingChat() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.header}><TouchableOpacity style={{marginLeft:5}} onPress={()=>navigation.goBack()}>
    <LeftBackArrow/></TouchableOpacity>
     <Text style={{fontSize:16,color:Colors.PRIMARY,marginLeft:5}}>Settings</Text>
      <Text style={styles.headerTitle}>Chats</Text>
    </View>
    <TouchableOpacity style={styles.statusContainer}>
    <Text style={styles.StatusText}>Change Wallpaper</Text>
    <View style={{marginLeft:'auto'}}>
    <RightArrow/></View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.statusContainer}>
    <Text style={styles.StatusText}>Save to Camera Roll</Text>
    <View style={{marginLeft:'auto'}}>
    <RightArrow/></View>
    </TouchableOpacity>

    <Text style={{marginTop:5,color:Colors.DarkGray,fontSize:15,marginLeft:10,marginRight:10}}>Automatically save photos and videos you receive to your iphone's Camera Roll </Text>

    <TouchableOpacity style={styles.statusContainer}>
    <Text style={styles.StatusText}>Chat BackUp</Text>
    <View style={{marginLeft:'auto'}}>
    <RightArrow/></View>
    </TouchableOpacity>
    
    <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.messageRow} >
            <Text style={styles.messageText1}>Archive All Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageRow} >
            <Text style={styles.messageText}>Clear All Chats</Text>
          </TouchableOpacity>
         

          <TouchableOpacity style={styles.messageRow1}>
            <Text style={styles.messageText}>Delete All Chats</Text>
          </TouchableOpacity>
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
    
      },
      statusContainer1: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        borderTopColor: Colors.Gray,
        borderBottomColor: Colors.Gray,
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
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        marginTop: 30,
        borderWidth:1,borderColor:Colors.Gray
      },
      StatusText:{
        fontSize:16,

      },
      messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.Gray,
        paddingVertical: 10,
      },
      messageRow1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        paddingVertical: 10,

      },
      messageText: {
        fontSize: 16,
    marginRight:'auto',
    color:'red'
      },
      messageText1: {
        fontSize: 16,
    marginRight:'auto',
    color:Colors.PRIMARY
      },
})