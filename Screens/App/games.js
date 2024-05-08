import * as React from 'react';
import {Text, TextInput, View, StyleSheet, Image, AppRegistry} from 'react-native';

const Game = () => {
    return(
    <View style={style.test}>
        <Text style={{ textAlign: 'center', fontSize: 50}}>Games</Text>
        <View>
            <Text>
                Em desenvolvimento volte mais tarde
            </Text>
        </View>
    </View>
    )
}

AppRegistry.registerComponent('Game', () => Game)

export default Game

const style = StyleSheet.create({
    test:{
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})