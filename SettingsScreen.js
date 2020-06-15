import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import MyHeader from "../components/MyHeader";
import { RFValue } from "react-native-responsive-fontsize";


export default class SettingsScreen extends Component{
  /* 
  constructor() {
    super();
    this.state = {
      emailId: "",
      name: "",
      school: "",
      class: "",
      section: "",
      rollNo: "",
      password : ""
    };
  }
  */
    render() {
        return (
          <ScrollView style = {styles.scrollview}>
          <View style={styles.container}>
            
           <MyHeader
           title = 'Settings'
           backgroundColor = "#003060"
         
           />
            <Text style = {styles.label}>Name</Text>
            <Input
              placeholder = {'name.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                 // name='user-circle'
                  size={24}
                  color='white'
                />
              }
              
              />
            <Text style = {styles.label}>School</Text>
            <Input
              placeholder = {'school.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='school'
                  size={24}
                  color= 'white'
                />
              }
             
              />
            <Text style = {styles.label}>Class</Text>
            <Input
              placeholder = {'class.'}
              style={styles.formTextInput}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='class'
                  size={24}
                  color='white'
                />
              }
              
              />
            <Text style = {styles.label}>Section</Text>
            <Input
              placeholder = {'section.'}
              style={styles.formTextInput}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                 
                  size={24}
                  color='white'
                />
              }
             
              />
            <Text style = {styles.label}>Roll No.</Text>
            <Input
              placeholder = {'password.'}
              keyboardType = {'numeric'}
              leftIcon={
                <Icon
                  name='user-circle'
                  size={24}
                  color='white'
                />
              }
           
              />
            <Text style = {styles.label}>Email address</Text>
            <Input
              placeholder = {'email'}
              style={styles.formTextInput}
              inputStyle = {{width : 200}}
              keyboardType = {'email-address'}
              leftIcon={
                <Icon
                  name='email'
                  size={24}
                  color='white'
                />
              }
          
              />
            <Text style = {styles.label}>Password</Text>
            <Input
              placeholder = {'password.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='white'
                />
              }
            
              />
              <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Save changes</Text></TouchableOpacity>
                    </View>
                    </ScrollView>
        )
}
}
const styles = StyleSheet.create({
      container : {
        width : 330,
        backgroundColor : '#10564F',
        //paddingLeft : 20,
        height : 1000
      },
      label : {
        fontSize :18,
        fontFamily : 'Roboto',
        fontWeight : '300',
        color :'#D6AD60',
        paddingLeft : 20,
        paddingTop : 10,
        
      },
      button : {
        backgroundColor : '#F4EBD0',
        width : 150,
        height : 57,
        marginLeft : 90,
        borderRadius : 18,
        alignItems : 'center',
        marginTop : 30
      },
      buttonText : {
        color : '#D6AD60',
        fontSize : 20,
        //paddingLeft : 30,
        paddingTop : 15,
        fontWeight : 'bold',
       
      },
      scrollview : {
        flex: 1,
        backgroundColor: "#fff"
      }
})
