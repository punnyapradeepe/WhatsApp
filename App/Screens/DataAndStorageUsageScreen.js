import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const DataAndStorageUsageScreen = () => {
  const [lowDataUsage, setLowDataUsage] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MEDIA AUTO-DOWNLOAD</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Photos</Text>
          <Text style={styles.optionDetail}>Wi-Fi and Cellular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Audio</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Videos</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Documents</Text>
          <Text style={styles.optionDetail}>Wi-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>Reset Auto-Download Settings</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>
          Voice Messages are always automatically downloaded for the best communication experience.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CALL SETTINGS</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Low Data Usage</Text>
          <Switch
            value={lowDataUsage}
            onValueChange={(value) => setLowDataUsage(value)}
          />
        </View>
        <Text style={styles.noteText}>
          Lower the amount of data used during a WhatsApp call on cellular.
        </Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Network Usage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Storage Usage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionDetail: {
    fontSize: 16,
    color: '#8E8E93',
  },
  resetButton: {
    paddingVertical: 15,
    marginTop: 10,
  },
  resetText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'left',
  },
  noteText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 10,
  },
});

export default DataAndStorageUsageScreen;
