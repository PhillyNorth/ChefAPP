// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [menuItems, setMenuItems] = React.useState([]);

  return (
    <View style={styles.container}>
      <Text>Total Menu Items: {menuItems.length}</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
      <Button title="View Menu" onPress={() => navigation.navigate('Menu')} />
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
});
