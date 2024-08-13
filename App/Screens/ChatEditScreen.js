import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import imageMapping from './../../Components/imageMapping';
import Colors from './../Utils/Colors';

const getImageSource = (imageName) => {
  return imageMapping[imageName];
};

const ChatListItem = ({ name, message, date, avatar, isSelected, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={[styles.selectionCircle, isSelected && styles.selectionCircleSelected]} />
    <Image source={getImageSource(avatar)} style={styles.avatar} />
    <View style={styles.messageContainer}>
      <View style={styles.messageHeader}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  </TouchableOpacity>
);

export default function ChatEditScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const url = 'http://192.168.1.40:5000/chats';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter(item => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:16,color:Colors.PRIMARY,marginTop:20,fontWeight:'bold'}}>Done</Text>
        <Text style={{fontSize:30,fontWeight:'bold',marginTop:0}}>Chats</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity style={{color:Colors.DarkGray,fontSize:16}}>
            <Text style={{color:Colors.DarkGray,fontSize:16}}> Broadcast Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color:Colors.DarkGray,fontSize:16}}>New Group</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <ChatListItem
            name={item.name}
            message={item.message}
            date={item.date}
            avatar={item.avatar}
            isSelected={selectedItems.includes(item.id)}
            onPress={() => handleSelectItem(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Archive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Read All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 50, 
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray,
    marginRight: 15,
  },
  selectionCircleSelected: {
    backgroundColor: Colors.PRIMARY,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  message: {
    color: 'gray',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    paddingHorizontal: 20,
  },
  footerButtonText: {
    fontSize: 16,
    color: Colors.DarkGray,
  },
});
