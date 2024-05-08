import * as React from 'react';
import {Text, TextInput, View, StyleSheet, Image, AppRegistry} from 'react-native';

const Profile = () => {
    return(
    <View style={style.test}>
        <Text style={{ textAlign: 'center', fontSize: 50}}>Profile</Text>
        <View>
            <Text>
                Em desenvolvimento volte mais tarde
            </Text>
        </View>
    </View>
    )
}

AppRegistry.registerComponent('Profile', () => Profile)

export default Profile

const style = StyleSheet.create({
    test:{
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})