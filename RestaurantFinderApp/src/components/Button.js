import React from 'react'
import { 
    StyleSheet, 
    Text, 
    Pressable
 } from 'react-native'

const Button = (props) => {

  // Button tıklanabilirse tomato rengi, tıkalanamazsa gray olsun
  // Button tıklandıysa gray rengi ama tıklanmadıysa tomato rengi olsun


  return (
    <Pressable 
        style={({pressed})=>[{
                          backgroundColor: props.isDisable 
                                                ? "gray"
                                                : (pressed  
                                                        ? "gray"
                                                        : "tomato")

                        }, styles.buttonStyles]}
        onPress={props.handleOnPress}
        disabled={props?.isDisable}>

        <Text style={styles.buttonText}>{props.buttonName}</Text>
  </Pressable>

  )
}

export default Button

const styles = StyleSheet.create({
    buttonStyles:{
        borderRadius:5,
        width:'80%',
        alignItems:'center',
        paddingVertical: 10,
        marginTop:10,
      },
      buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
      },
})