import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function HomeScreen({ navigation }) {
  const { menuItems } = useContext(MenuContext);

  // Calculate average prices by course
  const calculateAveragePrice = (course) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const total = filteredItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return filteredItems.length ? (total / filteredItems.length).toFixed(2) : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Overview</Text>
      <Text>Total Menu Items: {menuItems.length}</Text>
      <Text>Average Price - Starters: ${calculateAveragePrice('Starter')}</Text>
      <Text>Average Price - Mains: ${calculateAveragePrice('Main')}</Text>
      <Text>Average Price - Desserts: ${calculateAveragePrice('Dessert')}</Text>

      <Button title="Manage Menu" onPress={() => navigation.navigate('ManageMenu')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('Filter')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
