import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert} from 'react-native';
import {collection, doc,setDoc,addDoc,updateDoc, deleteDoc, getDoc, getDocs} from 'firebase/firestore';

import db from './components/firebase';
export default function App() {
  const [username,setusername]=useState('');
  const[email,setemail]=useState('');
 
  function create(){
    try {
      setDoc(doc(db,'Users','newdoc'),{
        email:email,
        username:username
      }).then(()=>console.log('Data Submitted'))
      
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  function Delete(){
    try {
      deleteDoc(doc(db,'Users','newdoc')).then(()=>console.log('record Deleted Successfully'))
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  function Reader(){
   try {
    getDoc(doc(db,'Users','44rjnJ4unOWdjC6kmtMS')).then((docData)=>{
       if(docData.exists()){
       setusername(docData.data().username);
       setemail(docData.data().email);
       
      }
      else{
        console.log('No such Data');
      }
    })
   } catch (error) {
    Alert.alert(error.message);
    console.log(error.message)
   }
  }
  function GetAll(){
    try {
      getDocs(collection(db,'Users')).then((docSnap)=>{
        let users =[];
        console.log("Document Data: \n ");
        docSnap.forEach((doc)=>{
          //users.push({...doc.data(),id:doc.id})
              console.log(doc.data());
        });
       
      })
    } catch (error) {
      
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Crud firebase Trial...
      </Text>
     <TextInput value={username} onChangeText={(username)=>setusername(username)}  placeholder='Username'style={styles.textboxes}/>
     <TextInput value={email}  onChangeText={(email)=>setemail(email)} placeholder='Email' style={styles.textboxes}/>
      <TouchableOpacity style={styles.submitbtn}>
        <Button title='submit' onPress={create}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitbtn}>
      <Button title='Delete last record' style={styles.delete}  onPress={Delete}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitbtn}>
      <Button title='Get some Record' style={styles.delete}  onPress={Reader}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitbtn}>
      <Button title='Get Records in console' style={styles.delete}  onPress={GetAll}/>
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:12,
  },
  textboxes:{
    borderRadius:8,
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#333',
    borderWidth:1,
    marginBottom:4,
    padding:2,

  },
  submitbtn:{
    width:'100%',
    marginBottom:3,
  },
  delete:{
    backgroundColor:'red',
    fontSize:12,
  }
});
