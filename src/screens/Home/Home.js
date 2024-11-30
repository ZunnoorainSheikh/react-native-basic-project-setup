import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useToast } from 'react-native-toast-notifications'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  loginContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  button:{
    paddingHorizontal:40,
    paddingVertical:20,
    backgroundColor:"orange",
    borderRadius:20
  }
})