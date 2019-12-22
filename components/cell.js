import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function cell(props){
    return (
        <View style={styles.cell}>
            <TouchableOpacity onPress={_ => console.log(props.id)}>
                <Text style={styles.cellContent}> {props.id} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cellContent:{
        fontSize: 50,
    },
    cell:{
        flex: 1,
        borderWidth: 2,
        alignItems: "center",
        alignContent:"center",
        justifyContent:"center",
    }
})