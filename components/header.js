import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function header(){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Tic-Toc-Toe </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        padding: 15,
        marginTop: 23,
        alignContent: "center",
        backgroundColor: "#0394fc",
    },
    headerText:{
        textAlign: "center",
        fontSize: 18,
    }
})