import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SideArrow } from '../Utils/SvgIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';

const countries = [
  { name: 'United States', code: '+1' },
  { name: 'India', code: '+91' },
];

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };

  const handleDonePress = () => {
    if (phoneNumber.length === 10) {
      setErrorMessage('');
      navigation.navigate('Chats');
    } else {
      setErrorMessage('Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Phone number</Text>
        </View>
        <TouchableOpacity onPress={handleDonePress}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.subText}>Please confirm your country code and </Text>
        <Text style={[styles.subText, styles.subTextCentered]}>enter your phone number</Text>
      </View>
      <TouchableOpacity style={styles.row} onPress={toggleDropdown}>
        <Text style={styles.Text2}>{selectedCountry.name}</Text>
        <View style={styles.rowRight}>
          <SideArrow />
        </View>
      </TouchableOpacity>
      <View style={styles.row1}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
        </View>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      {isDropdownVisible && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isDropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.dropdown}>
              <FlatList
                data={countries}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <Pressable style={styles.dropdownItem} onPress={() => selectCountry(item)}>
                    <Text style={styles.dropdownText}>{item.name}</Text>
                  </Pressable>
                )}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 40,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerView: {
    alignSelf: "center",
    marginLeft: '30%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  doneText: {
    alignSelf: 'center',
    color: 'gray',
    paddingRight: 20,
  },
  subcontainer: {
    marginTop: 5,
    alignSelf: 'center',
  },
  subText: {
    fontWeight: '500',
  },
  subTextCentered: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: Colors.Gray,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text2: {
    fontSize: 17,
    fontWeight: '400',
    color: '#007Aff',
    marginLeft: 10
  },
  arrowContainer: {
    marginLeft: 20,
  },
  countryCodeContainer: {
    borderRightWidth: 1,
    borderColor: '#3C3C43',
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 20,
  },
  countryCodeText: {
    fontSize: 17,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 17,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownText: {
    fontSize: 17,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
