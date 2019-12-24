import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

export default function button(props){
    const dispatch = useDispatch();
    function pressHandler(){
        dispatch({type:props.children})
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

