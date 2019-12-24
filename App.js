import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import styles from './styles/globalStyles';
import Header from './components/header';
import Body from './components/body';
import rootReducer from './reducer/rootReducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <Header></Header>
        <Body></Body>
      </View>
    </Provider>
  );
}

