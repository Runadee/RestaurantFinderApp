import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    StyleSheet, 
    Text, 
    Pressable,
    View,
    Image
 } from 'react-native'
 import { AntDesign } from '@expo/vector-icons'; 


const VerticalRestaurant = (props) => {
    const navigation = useNavigation()

    const { name, rating, review_count, price} = props.item
    const category = props.item?.categories[0].title
    const city = props.item?.location.city

    const handleOnPress =()=>{
        navigation.navigate('Detail', { data: props.item})
    }

  return (
    <Pressable
        onPress={handleOnPress}
        style={({pressed})=>[{
            transform:[{translateY: pressed ? 3 : 0}]
        }, styles.container]}>

      <View>
        <Image 
            style={styles.image}
            source={{uri:props.image}}/>
        <View style={styles.cityContainer}>
            <Text style={styles.cityName}>{city}</Text>
        </View>
      </View>


      <View style={styles.infoStyle}>

        <View>
            <Text style={styles.restaurantName}>{name}</Text>
            <View style={styles.ratingReviewContainer}>
                <Text style={styles.rating}>
                    <AntDesign name="star" size={15} color="#FCCE05" />
                    {" "}
                    {rating}
                </Text>
                <Text style={styles.reviewText}> ({review_count} Reviews)</Text>
            </View>
            <Text style={{color:'white'}}>{category}</Text>
        </View>


        <Text style={styles.price}>{price}</Text>


      </View>



    </Pressable>
  )
}

export default VerticalRestaurant

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:140,
        marginVertical:10,
        borderRadius:10,
    },
    cityContainer:{
        backgroundColor:'white',
        position:'absolute',
        padding:3,
        right:0,
        bottom:10,
    },
    cityName:{
        fontSize:12,
        fontWeight:'bold'
    },
    rating:{
        color:'white',
        fontWeight:'bold',
        fontSize:14,
    },
    reviewText:{
        color:'white',
        fontSize:10,
    },
    ratingReviewContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    restaurantName:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    },
    price:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    infoStyle:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    }
})