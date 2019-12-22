import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function button(props){
    function pressHandler(){
        console.log(`{props.children} clicked`);
    }
    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={styles.button}>
                <Ionicons size={18} name={props.icon} />
                <Text style={styles.buttonText}> {props.children} </Text>
            </View>
        </TouchableOpacity>
    )
}

