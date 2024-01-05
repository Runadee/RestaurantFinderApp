import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux'
import { login, autoLogin } from '../redux/userSlice'
import { Loading, Button } from '../components';


const LoginScreen = ({navigation}) => { 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [handleErrorMessage, setHandleErrorMessage] = useState('')

  const dispatch = useDispatch()

  const { isLoading, errorMessage } = useSelector((state)=>state.user)

  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  useEffect(() => {

    const invalidEmail = 'Firebase: Error (auth/invalid-email)'

    if(invalidEmail == errorMessage){
      setHandleErrorMessage('Invalid Email or Password! Try Again')
    }

    setHandleErrorMessage(errorMessage)
    
  }, [errorMessage])
  
  

  const handleLogin =()=>{
    dispatch(login({email, password}))
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <View style={styles.container}>

      <View style={styles.loginStyle}>
        
        <View style={styles.textInputContainer}>
          <Text style={styles.loginText}>
            <Entypo name="login" size={24} color="white" />
            {' '}
            LOGIN
          </Text>

          <TextInput 
            placeholder='Email'
            style={styles.emailStyle}
            value={email}
            onChangeText={(text)=>setEmail(text.toLowerCase())}
            />

          <TextInput 
            placeholder='Password'
            style={styles.passwordStyle}
            value={password}
            onChangeText={setPassword}
          />

        </View>
        
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{handleErrorMessage}</Text>
        </View>

        <Button 
          buttonName='Login'
          handleOnPress={handleLogin}
          />

      </View>

      <Pressable 
        style={styles.forgotPassword}
        onPress={()=> navigation.navigate('ForgotPassword')}>
        <Text style={styles.signUpText}>Forgot Password?</Text>
      </Pressable>

      <Pressable
        style={styles.forgotPassword}
        onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>


    </View>
  )
}



export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2A0040',
    alignItems:'center',
    justifyContent:'center'
  },
  textInputContainer:{
    width:'100%',
    alignItems:'center',
    height: 200,
    justifyContent:'space-evenly',
  },
  loginStyle:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  loginText:{
    fontWeight:'bold',
    fontSize:24,
    color:'white'
  },
  emailStyle:{
    borderWidth:0.3,
    borderRadius:5,
    width:'80%',
    paddingVertical:15,
    textAlign:'center',
    backgroundColor:'white',
  },
  passwordStyle:{
    borderWidth:0.3,
    borderRadius:5,
    width:'80%',
    paddingVertical:15,
    textAlign:'center',
    backgroundColor:'white',
  },
  forgotPassword:{
    width:'40%',
    paddingVertical:10,
    alignItems:'center',
  },
  signUpText:{
    color:'white',
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  errorMessageContainer:{
    width:'60%'
  },
  errorMessage:{
    color:'red',
  }
})