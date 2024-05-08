import * as React from 'react';
import { useState } from 'react';
import {Text, TextInput, View, StyleSheet, Image, AppRegistry, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';



const Login = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const VerifyLogin = () => {
    if (nome == '' && senha == ''){
      Alert.alert('Preencha todos os campos')
    } else {CheckLogin()}
  }

  const CheckLogin = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:3000/cadastros`, {
        params:{
          nome: nome,
          senha: senha
        }
      });
      const data = JSON.stringify(response.data)
      console.log(data)
      if (data.includes(nome) && data.includes(senha)){
        Alert.alert('Login efetuado com sucesso')
        console.log('N sei')
        navigation.navigate('AppStart')
      } else {
          Alert.alert('Usuario Não encontrado')
          console.log('Erro')
      }
    } catch (error) {
      console.error('Erro ao verificar cadastro:', error);
      Alert.alert('Erro ao verificar cadastro.');
    }
  };
    return (
        <View style={{
            marginTop: 100,
            margin: 20,
          }}>
            <Image source={require('/Users/asaph/kamaleduc/icon.png')}
            style={{width: 150, height: 100, alignSelf: 'center'}} />
            <Text
            style={style.kamaleduc}
            >Kamaleduc</Text>
            <View style={{marginBottom: 20}}>
            <TextInput style={style.textCamp}
              placeholder= "  Insira seu Nome de Usuario"
              onChangeText={setNome}
              value={nome}>
            </TextInput>
            <TextInput style={style.textCamp}
              placeholder= "  Insira sua Senha"
              onChangeText={setSenha}
              value={senha}>
            </TextInput>
            </View>
            <View style={{alignItems: 'center'}}>
            <View style={style.button}>
              <Text style={style.buttonText} onPress={VerifyLogin}>
                Entrar
              </Text>
              <View>
                <Text style={style.textCadEnt}>Não possue uma conta?</Text>
                <Text style={style.textCadEnt2} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
              </View>
            </View>
            </View>
          </View>
    );
  }

const Cadastro = ({ navigation }) => {
  const [nome, setCadNome] = useState('');
  const [senha, setCadSenha] = useState('');
  const [email, setCadEmail] = useState('');
  const [nasc, setCadNasc] = useState('');

const VerifyCampos= () => {
  if (nome == '' || senha == '' || email== '' || nasc == ''){
    Alert.alert('Alguns campos obrigatórios não foram preenchidos.')
  } else {
    CheckCadastrar()
  }
} 
const CheckCadastrar = async () =>{
  const responseNo = await axios.get(`http://192.168.1.2:3000/check`,{
    params:{
      nome: nome,
      email: email
    }
  })
  const data = JSON.stringify(responseNo.data)
  if (data.includes(nome) && data.includes(email)){
    Alert.alert('Email e Nome de Usuario já utilizados')
  }  
  else if (data.includes(nome)) {
    Alert.alert('Nome de usuario já utilizado')
  } else if (data.includes(email)){
    Alert.alert('Email já utilizado')
  } else {
    cadastrar()
  }
}
  const cadastrar = async () => {
    try {
      const responseC = await axios.post(`http://192.168.1.2:3000/cadastrar`, {
          nome: nome,
          senha: senha,
          email: email,
          nasc: nasc
      })
        console.log('Cadastro realizado com sucesso:', responseC.data)
      
      
        const responseL = await axios.get(`http://192.168.1.2:3000/cadastros`, {
          params:{
            nome: nome,
            senha: senha
          }
        })
      if (responseL.data.length > 0) {
        Alert.alert('Cadastro Efetuado com sucesso')
        navigation.navigate('AppStart')
      } else {
        Alert.alert('Não foi possivel cadastrar.');
      }
    } catch (error) {
      console.error('Erro ao verificar cadastro:', error);
      Alert.alert('Erro ao verificar cadastro.');
    }
  };
    return(
      <View style={{
        marginTop: 100,
        margin: 20,
      }}>
        <Image source={require('/Users/asaph/kamaleduc/icon.png')}
        style={{width: 150, height: 100, alignSelf: 'center'}} />
        <Text
        style={style.kamaleduc}
        >Kamaleduc</Text>
        <View style={{marginBottom: 20}}>
        <TextInput style={style.textCamp}
          placeholder= "  Insira seu Nome de Usuario"
          onChangeText={setCadNome}
          value={nome}>
        </TextInput>
        <TextInput style={style.textCamp}
          placeholder= "  Insira sua Senha"
          onChangeText={setCadSenha}
          value={senha}>
        </TextInput>
        <TextInput style={style.textCamp}
          placeholder= "  Insira seu Email"
          onChangeText={setCadEmail}
          value={email}>
        </TextInput>
        <TextInput style={style.textCamp}
          placeholder= "  dd/mm/aaaa"
          onChangeText={setCadNasc}
          value={nasc}>
        </TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={style.button}>
          <Text style={style.buttonText} onPress={VerifyCampos}>
            Cadastrar
          </Text>
        </View>
        <View>
            <Text style={style.textCadEnt}>Possue uma conta?</Text>
            <Text style={style.textCadEnt2} onPress={() => navigation.navigate('Login')}>Entrar</Text>
        </View>
        </View>
      </View>
    )
  }

const Stack = createNativeStackNavigator()

const Entrar = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }
    }>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}

AppRegistry.registerComponent('Entrar', () => Entrar)

export default Entrar

const style = StyleSheet.create({
    textCamp:{
      fontSize: 20,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 25,
      height: 40,
    },
    kamaleduc:{
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#52AE19',
      marginBottom: 20,
      marginTop: 20,
    },
    button:{
      width: 300,
      backgroundColor: "#52AE19",
      height: 50,
      borderRadius: 30,
      marginBottom: 20,
    },
    buttonText:{
      margin: 5,
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      shadowColor: 'black'
    },
    textCadEnt: {
        marginTop: 20,
        color: '#009621',
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    textCadEnt2: {
        marginTop: 12,
        color: '#009621',
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: 18,
        textDecorationLine: 'underline',
        textAlign: 'center',
    }
})