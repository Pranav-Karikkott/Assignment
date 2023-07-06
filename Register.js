import { View, Text,StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'


const Register = ({navigation}) => {

    
const [registerEmail, setRegisterEmail] = useState('');
const [registerPassword, setRegisterPassword] = useState('');
const [registerName, setRegisterName]= useState('')

const handleRegisterEmailChange = (text) => {
    setRegisterEmail(text);
  };
  
  const handleRegisterPasswordChange = (text) => {
    setRegisterPassword(text);
  };

  const handleRegisterNameChange = (text) => {
    setRegisterName(text);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.put('https://api.oopacks.com/api/test/register', {
        email: registerEmail,
        password: registerPassword,
      });

      console.log(response.data);
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
        <Text style={styles.oopacks}>Sign Up</Text>
      <View style={styles.viewstyle}>
        <TextInput style={styles.inputview}
        placeholder='Name'
        placeholderTextColor={'black'}
        value={registerName}
        onChangeText={handleRegisterNameChange}>
        </TextInput>
        <TextInput style={styles.inputview1}
        placeholder='Email'
        placeholderTextColor={'black'}
        value={registerEmail}
        onChangeText={handleRegisterEmailChange}>
        </TextInput>
        <TextInput style={styles.inputview1}
        placeholder='Password'
        placeholderTextColor={'black'}
        value={registerPassword}
        onChangeText={handleRegisterPasswordChange}
        secureTextEntry={true}>
        </TextInput>
        <TextInput style={styles.inputview1}
        placeholder='Confirm Password'
        placeholderTextColor={"black"}
        value={registerPassword}
        onChangeText={handleRegisterPasswordChange}
        secureTextEntry={true}>

        </TextInput>
        <TouchableHighlight style={styles.inputview2}
        onPress={handleRegister}>
            <Text style={{color:'white',fontSize:20}}>Sign Up</Text>
        </TouchableHighlight>
        
             
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color:'black'}}>you have a account? </Text>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight:'bold',color:'black'}} >Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        
    },
    viewstyle:{
        marginTop:"30%",
        height:'100%',
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderTopLeftRadius:100,
        alignItems:'center',
        
    },
    oopacks:{
        color:'white',
        fontSize:30,
        fontWeight:'normal',
        marginTop:70
    },
    inputview: {
        width: '80%',
        height: 55,
        marginTop: '20%',
        paddingLeft: 20,
        color: 'black',
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'white'
    },
    inputview1: {
        width: '80%',
        height: 55,
        marginTop: 20,
        paddingLeft: 20,
        color: 'black',
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'white',
    },
    inputview2: {
        width: '80%',
        height: 55,
        marginTop: 80,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    loginstyle:{
        fontSize:30,
        fontWeight:'normal',
        color:'black',
        marginTop:20
    }
    

})
export default Register