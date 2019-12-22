import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/globalStyles';

export default function cell(props){
    return (
        <View style={styles.cell}>
            <TouchableOpacity onPress={_ => console.log(props.id)}>
                <Text style={styles.cellContent}> {props.id} </Text>
            </TouchableOpacity>
        </View>
    )
}