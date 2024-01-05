import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Pressable,
    Image
 } from 'react-native'
 import { AntDesign } from '@expo/vector-icons'; 
 import { useNavigation } from '@react-navigation/native';

const HorizontalRestaurants = (props) => {
    const cityName = props.item.location.city
    const restaurantName = props.item.name
    const rating = props.item.rating
    const review = props.item.review_count

    const navigation = useNavigation()

    const handleOnPress = () => {
        navigation.navigate('Detail', {data: props.item})
    }

  return (
    <Pressable 
        style={
            ({pressed})=>[{
                            transform:[{translateY: pressed ? 5 : 0}]
                        }]}
        onPress={handleOnPress}>

        <View style={styles.subContainer}>
            <Image 
                style={styles.imageStyle}
                source={{uri:props.image}}/>

            <Text style={styles.cityName}>{cityName}</Text>
        </View>

        <View style={styles.restaurantDetailContainer}>

            <Text style={styles.restaurantName}>{restaurantName}</Text>
            
            <View style={styles.rateReviewContainer}>
                <Text style={styles.rating}>
                    <AntDesign name="star" size={15} color="#FCCE05" />
                    {" "}
                    {rating}
                </Text>
                <Text style={styles.reviews}>({review} Reviews)</Text>
            </View>

        </View>
    </Pressable>
  )
}

export default HorizontalRestaurants

const styles = StyleSheet.create({
    subContainer:{
        width:'100%',
        alignItems:'center'
    },
    imageStyle:{
        width:150,
        height:200,
        margin: 10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'white'
    },
    cityName:{
        position:'absolute',
        backgroundColor:'white',
        fontSize:16,
        fontWeight:'bold',
        padding:2,
        bottom: 10
    },
    restaurantDetailContainer:{
        alignItems:'center'
    },
    restaurantName:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    },
    rateReviewContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
    },
    rating:{
        fontWeight:'bold',
        fontSize:14,
        color:'white'
    },
    reviews:{
        fontSize:10,
        color:'white'
    }
})