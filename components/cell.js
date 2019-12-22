import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/globalStyles';

export default function cell(props){
    function pressHandler(){
        console.log(`{props.id} clicked`);
    }
    return (
        <View style={styles.cell}>
            <TouchableOpacity onPress={pressHandler}>
                <Text style={styles.cellContent}> {props.id} </Text>
            </TouchableOpacity>
        </View>
    )
}