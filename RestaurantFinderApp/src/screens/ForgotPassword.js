import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { resetPassword } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { 
  NavigateToLogin, 
  Button,
  Loading
 } from '../components'


const ForgotPassword = ({navigation}) => {
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [email, setEmail] = useState('')
  const [handleErrorMessage, setHandleErrorMessage] = useState(errorMessage)

  const dispatch = useDispatch()
  const { isLoading, errorMessage } = useSelector((state)=>state.user)

  const handleOnPress =()=>{
    navigation.navigate('LoginScreen')
  }

  const handleResetPassword =()=>{
    dispatch(resetPassword(email))
  }


  useEffect(() => {

    if(email.length !== 0){
      setIsButtonDisable(false)
    }else{
      setIsButtonDisable(true)
    }

  }, [email])
  

  if(isLoading){
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        <FontAwesome5 name="key" size={24} color="white" />
          {'  '}
          Forgot Password
      </Text>

      <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{handleErrorMessage}</Text>
      </View>


      <TextInput
        style={styles.textInput}
        placeholder='Enter Your Email'
        value={email}
        onChangeText={(text)=> setEmail(text.toLowerCase())}
      />
      
      <NavigateToLogin
        handleOnPress={handleOnPress}
      />
      <Button
        handleOnPress={handleResetPassword}
        buttonName='Reset Password'
        isDisable={isButtonDisable}
      />

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2A0040'
  },
  titleStyle:{
    fontWeight:'bold',
    fontSize:24,
    color:'white',
    marginBottom:10,
  },
  textInput:{
    borderWidth:0.3,
    borderRadius:5,
    width:'80%',
    paddingVertical:15,
    textAlign:'center',
    backgroundColor:'white',
  },
  errorMessageContainer:{
    width:'60%'
  },
  errorMessage:{
    color:'red'
  }
})