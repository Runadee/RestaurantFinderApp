import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  SafeAreaView
 } from 'react-native'

const Detail = ({navigation, route}) => {

  console.log(route.params.data)

  const data = route.params.data

  const imageURI = data.image_url
  const resturantName = data.name

  const address1 = data.location.display_address[0]
  const address2 = data.location.display_address[1]
  const isClosed = data.is_closed ? "Open" : "Closed"
  const phone = data.phone

  const info =[address1, address2, isClosed, phone]

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>{resturantName}</Text>

      <Image 
        style={styles.image} 
        source={{uri:imageURI}}/>

      
      <View style={styles.infoContainer}>

        {
          info.map((value, index)=>{
            return(
              <View
                style={styles.infoSubContainer}
                key={index}>
                <Text style={styles.text}>{value}</Text>

              </View>
            )
          })
        }
        
      </View>


    </SafeAreaView>
  )
}

export default Detail;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:"95%",
    height:200,
    marginVertical:20,
  },
  title:{
    fontSize:26,
    fontWeight:'bold',
    fontStyle:'italic',
    marginVertical:20
  },
  infoContainer:{
    width:'95%'
  },
  text:{
    fontWeight:'bold'
  },
  isClosedStyle:{
    flexDirection:'row'
  },
  infoSubContainer:{
    width:'95%',
    borderBottomWidth:0.2,
    alignItems:'center',
    paddingVertical:10,
  }
})