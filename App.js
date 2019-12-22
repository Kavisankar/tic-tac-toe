import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import Body from './components/body'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#039dfc',
    alignContent:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:20,
  }
});
