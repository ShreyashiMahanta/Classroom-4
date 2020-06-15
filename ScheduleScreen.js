import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class ScheduleScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            class : "",
            section : "",
            roll_number : "" ,
            current_subject : "",
            current_teacher : "",
            text : "",
            schedule : "",
        }
    }
   //  scheduleForToday=()=>{
    //    db.collection("student")
    //}
    render(){
        return(
            <View style = {styles.container}>
                <MyHeader
                title = "Schedule for today..."
                />
                <ScrollView style={styles.scrollview}>
                 <View style = {styles.view3}>
                    <Text style = {styles.viewText2}>Biology</Text>
                    </View>
                <View style = {styles.view4}><Text style = {styles.viewText2}>History</Text></View>
                <View style = {styles.view5}><Text style = {styles.viewText}>Assamese</Text></View>
                <View style = {styles.view6}><Text style = {styles.viewText2}>Mathematics</Text></View>               
                
                </ScrollView>

               </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#B4F8C8',
        padding : 90
    },
    header : {
        fontSize : RFValue(30),
        fontWeight : 'bold',
        color : '#FFAEBC',
        padding : 5
    },
    view : {
        width: 290,
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        marginTop : 300
    }
})