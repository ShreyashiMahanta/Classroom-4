import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Icon,Input } from 'react-native-elements';
import firebase from 'firebase';

export default class LoginScreen extends Component{
    constructor(){
        super();
    this.state = {
      emailId: "",
      password: "",
      student_name: "",
      class : "",
      section : "",
      roll_no: "",
      school_name : ""
      
    };
    }
    userLogin = (emailId, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailId, password)
        .then(() => {
          this.props.navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    };
    render(){
        return(
          <ScrollView style = {styles.scrollview}>

            <View style = {styles.view}>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('WelcomeScreen')}
               >
               <Image
               source = {
                require("../assets/backArrowPurple.png")
            }
            style = {{
                width : 100,
                height : 150,
                alignSelf : 'center',
               marginTop : -40,
               marginBottom : -30,
               marginLeft : 200,
            }}
                />
        
               </TouchableOpacity>
            <Image
               source = {
                require("../assets/login.png")
            }
            style = {{
                width : 350,
                height : 350,
               marginTop : -180,
                marginLeft :-70,
                marginRight : 80
            }}
                />
                <Text style = {styles.header}>login.</Text>  
                <Text style = {styles.text}>welcome back, great to see you again.</Text>
                <Text style = {styles.label}>name.</Text>
          
                <Input
              placeholder = {'name.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
      
                  size={24}
                  color='white'
                />
              }
              />
                <Text style = {styles.label}>school.</Text>
                <Input
              placeholder = {'school.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='school'
                  size={24}
                  color='white'
                />
              }
              />
                <Text style = {styles.label}>class.</Text>
               
                 <Input
              placeholder = {'class.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
              keyboardType={"numeric"}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='class'
                  size={24}
                  color='white'
                />
              }
              />
                 
                <Text style = {styles.label}>password.</Text>
               
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
                <TouchableOpacity style = {styles.button}
                onPress={() => {
                  this.userLogin('shreyashimahanta@gmail.com','123456');
                }             
              }>
                <Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : '#543855',
        padding : 10
    },
    formTextInput : {
        width: RFValue(300),
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        borderBottomColor:'#ffffff',
        paddingBottom:RFValue(10),
        marginLeft:RFValue(10),
        marginBottom:RFValue(14),
        borderLeftColor : '#543855',
        borderRightColor : '#543855',
        borderTopColor : '#543855',

    },
    label : {
        fontSize:RFValue(20),
        color:"#FFA0A3",
        fontWeight:'bold',
        margin:RFValue(10) 
    },
    button : {
      borderRadius : 20,
      width : RFValue(250),
      height : RFValue(50),
      backgroundColor : '#FF8882',
      marginTop :30,
      paddingTop : 5,
      alignSelf : 'center',
      marginRight : 60,
      
  },
  buttonText : {
      fontSize : 20,
      //fontFamily  : 'sans-serif',
      color : '#ffffff',
      alignSelf : 'center',
      padding : 8,
      fontWeight : 'bold'
  },
  header : {
    fontSize : 50,
     // fontFamily  : 'sans-serif',
      color : '#c6535d',
      alignSelf : 'center',
      padding : 4,
      fontWeight : 'bold',
      marginTop : -70,
      marginRight : 60
  },
  scrollview : {
    flex: 1,
    backgroundColor: "#fff"
},
text : {
     fontSize : 20,
    // fontFamily  : 'sans-serif',
     color : '#c6535d',
     //padding : 8,
     marginLeft : 20
}

})