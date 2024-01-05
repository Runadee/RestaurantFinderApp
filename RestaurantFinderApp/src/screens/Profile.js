import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'

const Profile = () => {

  const dispatch = useDispatch()

  const handleLogout =()=>{
    dispatch(logout())
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <Pressable 
        style={({pressed})=>[{
          backgroundColor: pressed? "grey": 'red',
        },styles.logout]}
        onPress={handleLogout}>

        <Text style={styles.logoutButtonText}>Logout</Text>

      </Pressable>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logout:{
    borderRadius:5,
    width:'80%',
    alignItems:'center',
    paddingVertical: 10,
    marginTop:10,
  }, 
  logoutButtonText:{
    color:'white',
    fontWeight:'bold'
  }
})