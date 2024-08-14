import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import Colors from '../Utils/Colors';
import { CrossImg, PaintBox, TextImg } from '../Utils/SvgIcons';
import { useNavigation } from '@react-navigation/native';

const colorOptions = [
  '#FF7F7F', // Red
  '#FFBF7F', // Orange
  '#FFFF7F', // Yellow
  '#7FFF7F', // Green
  '#7F7FFF', // Blue
  '#BF7FFF', // Purple

  '#000000', // Black
];

const EditStatusScreen = () => {
  const [statusText, setStatusText] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FF7F7F'); // Default background color

  const navigation = useNavigation();

  const selectColor = (color) => {
    setBackgroundColor(color);
    setShowColorPicker(false);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CrossImg />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }}>
          <TextImg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowColorPicker(true)}>
          <PaintBox />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type a status"
        placeholderTextColor={Colors.Gray}
        value={statusText}
        onChangeText={setStatusText}
      />
      {/* Color Picker Modal */}
      <Modal
        transparent={true}
        visible={showColorPicker}
        onRequestClose={() => setShowColorPicker(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={colorOptions}
            numColumns={4}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: item }]}
                onPress={() => selectColor(item)}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#FFF',
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '70%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
});

export default EditStatusScreen;
