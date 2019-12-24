import React from 'react';
import { View, Text } from 'react-native';
import styles from './../styles/globalStyles';

export default function header(){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}> Tic-Toc-Toe </Text>
        </View>
    )
}