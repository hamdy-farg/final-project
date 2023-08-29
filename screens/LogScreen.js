import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { COLORS ,images,SIZES, icons} from "../constants";
import { useNavigation } from '@react-navigation/native'
import { TailwindProvider } from 'tailwindcss-react-native';
import tw from "twrnc";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    if (email && password){
      try{
        await signInWithEmailAndPassword (auth, email, password)
      }catch(err){
        console.log('got error:',err.message)
      }
    }
  }


  return (
    <TailwindProvider>
    <View className="flex-1 bg-white" style={{backgroundColor: COLORS.black}}>
      <SafeAreaView  className="flex ">
       

        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/Login.jpg')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="email"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-red-300 rounded-xl"
              onPress={handleSubmit}
              >
                <Text 
                    className="text-xl font-bold text-center text-white"
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/search.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/apple-logo.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUpage')}>
                  <Text className="font-semibold text-red-400"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
    </TailwindProvider>
  )
}