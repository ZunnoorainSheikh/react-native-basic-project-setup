import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useToast } from 'react-native-toast-notifications'

const Login = () => {
  const navigation = useNavigation()
  const toast = useToast()
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("DrawerNavigation")}>
        <Text>Go to Main Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
         toast.show('calling', {
          type: 'success',
          placement: 'bottom',
          offset: 300,
        });
      }}>
        <Text>Show Toast</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

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