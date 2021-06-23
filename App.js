import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>

      <Image
       source={require('./src/assets/logo.png')}
       style={styles.logo}
     />

<TextInput
     placeholder="Celular, username ou email"
     style={styles.input}
     />
     <TextInput
     placeholder="Sua senha"
     style={styles.input}
     />

<View style={styles.forgotContainer}>
       <TouchableOpacity>
         <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
       </TouchableOpacity>
     </View>

     <TouchableOpacity style={styles.loginButton}>
       <Text style={styles.loginText}>Acessar</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.facebookContainer}>
       <FontAwesome5 name="facebook" size={25} color="#399fff"/>
       <Text style={styles.facebookText}>Continue como Denilson</Text>
     </TouchableOpacity>

     <View style={styles.divisor}>
       <View style={styles.divisorline}></View>
       <Text styles={{marginHorizontal: '3%'}}>OU</Text>
       <View style={styles.divisorline}></View>
     </View>

     <View style={styles.signUpContainer}>
       <Text style={styles.signUpText}>Não possui uma conta?</Text>
       <TouchableOpacity>
         <Text style={styles.signUpButton}>Cadastre-se</Text>
       </TouchableOpacity>
     </View>