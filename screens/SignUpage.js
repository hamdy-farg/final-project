import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { COLORS ,images,SIZES, icons} from "../constants";
import { useNavigation } from '@react-navigation/native'
import { TailwindProvider } from 'tailwindcss-react-native';
import tw from "twrnc";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
// subscribe for more videos like this :)
const SignUpScreen = () => {



    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async () => {
      if (email && password){
        try{
          await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
          console.log('got error:',err.message)
        }
      }
    }
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: COLORS.black}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className=" p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="30" color="white" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/SignUp.jpg')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
      
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={password}
                onChangeText={value => setPassword(value)}
                placeholder='Enter Password'
            />
            <TouchableOpacity
                className="py-3  bg-red-300  rounded-xl"
                onPress={handleSubmit}
            >
                <Text className="font-xl font-bold text-center text-white">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/search.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple-logo.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('LogScreen')}>
                <Text className="font-semibold text-red-400"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default SignUpScreen;