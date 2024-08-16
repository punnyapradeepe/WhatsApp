import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import Colors from '../Utils/Colors';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function EditContactScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const [contact, setContact] = useState({
    Firstname: '',
    Lastname: '',
    Country: '',
    mobile: '',
    name: '',  
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`http://192.168.137.1:5000/chats/${id}`);
        const data = await response.json();
        setContact((prev) => ({
          ...prev,
          ...data,
          name: `${data.Firstname} ${data.Lastname}`,
        }));
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContact();
  }, [id]);

  useEffect(() => {
    setContact((prev) => ({
      ...prev,
      name: `${prev.Firstname} ${prev.Lastname}`,
    }));
  }, [contact.Firstname, contact.Lastname]);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://192.168.137.1:5000/chats/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert('Contact updated successfully!');
        navigation.goBack();
      } else {
        console.error('Failed to update contact:', responseData);
        alert('Failed to update contact.');
      }
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('Error saving contact.');
    }
  };
  

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this contact?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              const response = await fetch(`http://192.168.137.1:5000/chats/${id}`, {
                method: 'DELETE',
              });
              if (response.ok) {
                alert('Contact deleted successfully!');
                navigation.goBack();
              } else {
                alert('Failed to delete contact.');
              }
            } catch (error) {
              console.error('Error deleting contact:', error);
              alert('Error deleting contact.');
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Contact</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Name   </Text>
          <View>
            <TextInput
              style={styles.fieldValue}
              placeholder="First Name"
              value={contact.Firstname}
              onChangeText={(text) => setContact((prev) => ({ ...prev, Firstname: text }))}
            />
            <TextInput
              style={styles.fieldValue}
              placeholder="Last Name"
              value={contact.Lastname}
              onChangeText={(text) => setContact((prev) => ({ ...prev, Lastname: text }))}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Country</Text>
          <TextInput
            style={styles.fieldValue}
            placeholder="Country"
            value={contact.Country}
            onChangeText={(text) => setContact((prev) => ({ ...prev, Country: text }))}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Mobile </Text>
          <TextInput
            style={styles.fieldValue}
            value={contact.mobile}
            onChangeText={(text) => setContact((prev) => ({ ...prev, mobile: text }))}
          />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>More Fields</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteContainer} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete Contact</Text>
        </TouchableOpacity>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cancelText: {
    color: Colors.PRIMARY,
    fontSize: 18,
  },
  saveText: {
    color: Colors.DarkGray,
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal:10
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
  },
  fieldValue: {
    marginLeft: 50,
    fontSize: 18,
    fontWeight: '400',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#C7C7CC',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  linkText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#007AFF',
  },
  deleteContainer: {
    marginTop: 20,
  },
  deleteText: {
    color: '#FF3B30',
    fontSize: 18,
  },
});
