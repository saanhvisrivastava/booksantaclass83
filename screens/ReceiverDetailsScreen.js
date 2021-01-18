import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class ReceiverDetailsScreen extends React.Component{

    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            receiverId:this.props.navigation.getParam('details')['user_id'],
            requestId: this.props.navigation.getParam('details')['request_id'],
            bookName: this.props.navigation.getParam('details')['book_name'],
            reasonToRequest:this.props.navigation.getParam('details')['reason_to_request'],
            receiverName: '',
            receiverConatct:'',
            receiverAddress:'',
            receiverRequestDocId:''
        }
    }
   render(){
       return(
          <View>
              <Text> ReceiverDetailsScreen </Text>

               </View>
       )
       
   }
}