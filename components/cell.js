import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './../styles/globalStyles';

export default function cell(props){
    const dispatch = useDispatch();
    function pressHandler(){
        if(props.children === '-')
        {
            dispatch({type:"PLACE-VALUE",payload:props.id});
        }
    }
    return (
        <View style={styles.cell}>
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.cellContent}>
                    <Text style={styles.cellText}> {props.children} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}