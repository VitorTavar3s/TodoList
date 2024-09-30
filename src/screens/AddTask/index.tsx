import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddTask() {
  return (
    <View style={styles.container}>
      <Text>Add Task Screen</Text>
      {/* Aqui você pode adicionar o formulário para criar uma nova tarefa */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});