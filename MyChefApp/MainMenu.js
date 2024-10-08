//MenuScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleMenuItems = [
  { id: '1', name: 'Spaghetti', course: 'Main', price: 12.99 },
  { id: '2', name: 'Salad', course: 'Starter', price: 7.99 },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleMenuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.course} - ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
