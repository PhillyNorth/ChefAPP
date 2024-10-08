// screens/AddMenuItemScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddMenuItemScreen({ navigation }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    console.log({
      dishName,
      description,
      course,
      price
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Dish Name:</Text>
      <TextInput style={styles.input} value={dishName} onChangeText={setDishName} />
      
      <Text>Description:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      
      <Text>Course:</Text>
      <TextInput style={styles.input} value={course} onChangeText={setCourse} />
      
      <Text>Price:</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Button title="Add Menu Item" onPress={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
