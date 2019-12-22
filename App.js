import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/globalStyles';
import Header from './components/header';
import Body from './components/body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
    </View>
  );
}

