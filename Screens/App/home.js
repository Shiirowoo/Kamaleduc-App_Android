import * as React from 'react';
import {Text, TextInput, View, StyleSheet, Image, AppRegistry} from 'react-native';

const Home = () => {
    return(
    <View style={style.test}>
        <Text style={{ textAlign: 'center', fontSize: 50}}>Home</Text>
        <View>
            <Text>
                Em desenvolvimento volte mais tarde
            </Text>
        </View>
    </View>
    )
}

AppRegistry.registerComponent('Home', () => Home)

export default Home

const style = StyleSheet.create({
    test:{
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})