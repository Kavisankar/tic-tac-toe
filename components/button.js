import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function button(props){
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Ionicons size={18} name={props.icon} />
                <Text style={styles.buttonText}> {props.children} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        backgroundColor: "#0394fc",
        padding: 15,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 15,
        marginLeft: 5,
    }
})