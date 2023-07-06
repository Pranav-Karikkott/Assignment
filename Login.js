import { View, Text,StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import React ,{useState}from 'react'
import axios from 'axios'




const handleLoginEmailChange = (text) => {
    setLoginEmail(text);
  };
  
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.oopacks.com/api/test/login', {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log(response.data);

      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      
      console.error(error);
    }
  };

const Login = ({navigation}) => {
    const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');




const handleLoginEmailChange = (text) => {
    setLoginEmail(text);
  };
  
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };



  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.oopacks.com/api/test/login', {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log(response.data);

      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
        <Text style={styles.oopacks}>OOPACKS</Text>
      <View style={styles.viewstyle}>
        <Text style={styles.loginstyle}>Login</Text>
        <TextInput style={styles.inputview}
        placeholder='Email'
        placeholderTextColor={'black'}
        value={loginEmail}
        onChangeText={handleLoginEmailChange}>
        </TextInput>
        <TextInput style={styles.inputview1}
        placeholder='Password'
        placeholderTextColor={'black'}
        value={loginPassword}
        onChangeText={handleLoginPasswordChange}
        secureTextEntry={true}>
        </TextInput>
        <TouchableHighlight style={styles.inputview2}
        onPress={handleLogin}>
            <Text style={{color:'white',fontSize:20}}>Login</Text>
        </TouchableHighlight>
        
        <View style={{flexDirection: 'row', marginTop: 120}}>
          <Text style={{color:'black'}}>Don't have any account? </Text>
          <TouchableHighlight onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight:'bold',color:'black'}} >Sign Up</Text>
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
        marginTop: 20,
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
export default Login