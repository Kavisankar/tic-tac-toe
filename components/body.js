import React from 'react';
import { View, Text } from 'react-native';
import styles from './../styles/globalStyles';
import Board from './board';
import MyButton from './button';
import { useSelector } from 'react-redux';

function getPlayerInfo(state){
    if(state.stepNumber%2){
        return state.hasWinner?"Player X has won!":(state.stepNumber===9)?"Draw!":"Player O's turn";
    }
    else{
        return state.hasWinner?"Player O has won!":"Player X's turn";
    }
}

export default function body(){
    const history = useSelector( state => state.history );
    const current = history[history.length-1];
    return (
        <View style={styles.bodyContainer}>
            <Text style={styles.playerInfo}>{getPlayerInfo(current)}</Text>
            <Board></Board>
            <View style={styles.buttonContainer}>
                <MyButton icon="ios-undo">Undo</MyButton>
                <MyButton icon="ios-refresh">Restart</MyButton>
                <MyButton icon="ios-redo">Redo</MyButton>
            </View>
        </View>
    )
}
