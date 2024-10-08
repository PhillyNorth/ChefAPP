// CourseScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const sampleMenuItems = [
  { id: '1', name: 'Spaghetti', course: 'Main', price: 12.99 },
  { id: '2', name: 'Salad', course: 'Starter', price: 7.99 },
];

export default function FilterScreen() {
  const [filteredCourse, setFilteredCourse] = useState('All');

  const filteredItems = filteredCourse === 'All'
    ? sampleMenuItems
    : sampleMenuItems.filter(item => item.course === filteredCourse);

  return (
    <View style={styles.container}>
      <Button title="Show All" onPress={() => setFilteredCourse('All')} />
      <Button title="Show Starters" onPress={() => setFilteredCourse('Starter')} />
      <Button title="Show Mains" onPress={() => setFilteredCourse('Main')} />

      <FlatList
        data={filteredItems}
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
