import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { register } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, NavigateToLogin, Loading } from '../components'


const Register = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [handleErrorMessage, setHandleErrorMessage] = useState(errorMessage)
  const [isButtonDisable, setIsButtonDisable] = useState(false)

  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state)=>state.user)

  useEffect(() => {
    const handleConfirmPassword =()=>{
      if( email.length === 0 
                  || password.length === 0 
                  || password !== confirmPassword ){
        setIsButtonDisable(true)
      }else{
        setIsButtonDisable(false)
      }
      setHandleErrorMessage('Password dismatch!')
    }

    handleConfirmPassword()
  }, [password, confirmPassword])
 

  const handleRegister = ()=>{
    dispatch(register({email, password}))
  }

  const handleOnPress =()=>{
    navigation.navigate('LoginScreen')
  }



  if(isLoading){
    return <Loading/>
  }


  return (
    <View style={styles.container}>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
         <AntDesign name="adduser" size={24} color="white" />
          {' '}
          REGISTER
        </Text>

        <TextInput
          style={styles.email}
          placeholder='Enter Your Email'
          value={email}
          onChangeText={ (text)=>  setEmail(text.toLowerCase())}
        />
        <TextInput
          style={styles.email}
          placeholder='Enter Your Password'
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.email}
          placeholder=' Re-Enter Your Password'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{handleErrorMessage}</Text>
      </View>



      <Button
        buttonName='Sign Up'
        handleOnPress={handleRegister}
        isDisable={isButtonDisable}
      />

     <NavigateToLogin
        handleOnPress={handleOnPress}
     />

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2A0040'
  },
  registerContainer:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  registerText:{
    color:'white',
    fontWeight:'bold',
    fontSize:24,
  },
  email:{
    borderWidth:0.3,
    borderRadius:5,
    width:'80%',
    paddingVertical:15,
    textAlign:'center',
    backgroundColor:'white',
    marginVertical:5,
  },
  errorMessageContainer:{
    width:'60%',
    alignItems:'center'
  },
  errorMessage:{
    color:'red'
  }

})