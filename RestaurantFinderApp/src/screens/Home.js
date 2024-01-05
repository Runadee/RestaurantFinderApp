import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAsync } from '../redux/dataSlice'
import  { 
  Loading, 
  HorizontalRestaurants,
  VerticalRestaurant
 } from '../components/'
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Pressable,
 } from 'react-native'

const Home = () => {

  const dispatch = useDispatch();
  const { data, isDataFetched, error, loading } = useSelector( (state) => state.data );

  const [filteredData, setFilteredData] = useState([])


  useEffect(() => {
    // Eğer kullanıcı login yaptıktan sonra Yelp API den veri çekilmediyse istek gönder.
    if(!isDataFetched){
      dispatch(fetchDataAsync());
    }

  }, [dispatch, isDataFetched])


  const filterByCategory = (categoryName)=>{

     return data.filter(item => {

      const categories = item.categories.map(value => value.title)
      const filtered = categories.includes(categoryName)

      return filtered

     })

  }

  
  const handleCategoryFilter =(value)=>{
    
     const result = filterByCategory(value)
      setFilteredData(result)
      
  }





  if(loading){
    return <Loading/>
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Sayfa Basligi */}
      <Text style={styles.pageTitle}>Restaurants Near By</Text>



      {/* Horizontal Flatlist */}
      
      <View style={styles.horizontalContainer}>

        <Text style={styles.subTitle}>Popular</Text>

        <View >
            <FlatList
              horizontal
              data={data}
              contentContainerStyle={{
                justifyContent:'center',
                flexDirection:'row',
              }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ (item) => item.id.toString()}
              renderItem={({item}) =>{
                const image = item?.image_url
                return(
                  <HorizontalRestaurants item={item} image={image}/>
                )
              }

              }
            />
        </View>

      </View>

      {/* Line  */}
      <View style={styles.line}/>


      {/* Vertical Flatlist */}
      <View style={styles.reviewContainer}>

        <Text style={styles.subTitle}>Best Reviewed</Text>
        
        <View style={styles.categoryContainer}>
          <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item}) => {
              return(
                <Pressable 
                  onPress={()=> handleCategoryFilter(item.categories[0].title)}
                  style={({pressed})=>[{
                    transform:[{translateY: pressed ? 3 : 0}]
                  },styles.categoryButton
                  ]}>
                    <Text style={styles.categoryButtonText}>{item.categories[0].title}</Text>
                </Pressable>
              )
            }}
          />
        </View>
        
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ filteredData.length > 0 ? filteredData : data}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>{
              const image = item?.image_url
              return(
                <VerticalRestaurant item={item} image={image}/>
              )
            }}
          />
        </View>

      </View>



    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2A0040',
  }, 
  pageTitle:{
    fontSize:30,
    fontWeight:"bold",
    color:'white',
  },
  subTitle:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },
  horizontalContainer:{
    width:'90%',
    marginBottom:8,
    flex:5,
  },
  line:{
    borderBottomWidth:1,
    borderColor:'white',
    width:'90%',
    marginVertical:20,
  },
  reviewContainer:{
    width:'90%',
    flex:7,
  },
  categoryContainer:{
    width:'100%',
   marginVertical:10,
   paddingVertical:5,
  },
  categoryButtonText:{
    color:'white'
  },
  categoryButton:{
    width: 150,
    borderWidth:2,
    marginRight:10,
    borderColor:'white',
    alignItems:'center',
    borderRadius:10,
    paddingVertical:5,
    marginVertical:10,
  },

})