import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './../styles/globalStyles';
import Cell from './cell';

export default function board(){
    const history = useSelector( state => state.history );
    const boardValue = history[history.length-1].values;
    const cells = boardValue.map((value,index)=>{
        return <Cell id={index}>{value}</Cell>
    })
    return (
        <View style={styles.board}>
            {cells}
        </View>
    )
}
