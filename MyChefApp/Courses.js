import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function FilterScreen() {
  const { menuItems } = useContext(MenuContext);
  const [filteredCourse, setFilteredCourse] = useState('All');

  const filteredItems = filteredCourse === 'All'
    ? menuItems
    : menuItems.filter(item => item.course === filteredCourse);

  return (
    <View style={styles.container}>
      <Button title="Show All" onPress={() => setFilteredCourse('All')} />
      <Button title="Show Starters" onPress={() => setFilteredCourse('Starter')} />
      <Button title="Show Mains" onPress={() => setFilteredCourse('Main')} />
      <Button title="Show Desserts" onPress={() => setFilteredCourse('Dessert')} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.dishName} - ${item.price}</Text>
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
});
