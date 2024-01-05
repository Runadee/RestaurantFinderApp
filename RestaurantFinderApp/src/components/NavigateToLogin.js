import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavigateToLogin = (props) => {
  return (
    <Pressable
        style={styles.loginButtonStyle}
        onPress={props.handleOnPress}>
      <Text style={styles.loginText}>Login</Text>
    </Pressable>
  )
}

export default NavigateToLogin;

const styles = StyleSheet.create({
    loginText:{
        color:'white',
        fontWeight:'bold',
        textDecorationLine:'underline',
    },
    loginButtonStyle:{
        position:'absolute',
        width:'40%',
        paddingVertical:10,
        alignItems:'center',
        bottom: 100,
    }
})