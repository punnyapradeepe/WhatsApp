import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const EditStatusScreen = () => {
  const [statusText, setStatusText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a status"
        placeholderTextColor={Colors.Gray}
        value={statusText}
        onChangeText={setStatusText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF7F7F',
  },
  input: {
    height: 50,
    borderColor: '#FFF',
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '100%',
  },
});

export default EditStatusScreen;
