import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native';
import {Header, ListItem, Icon} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase';


export default class Home extends React.Component {
    
    render() {
        return(
              <View style={styles.container}>
                <Header      
                    leftComponent={<Icon name='home' type='font-awesome-5' color='#2BB9E3' style={{alignSelf:'flex-start'}} onPress={()=>{this.props.navigation.navigate('BottomTab')}}/>}
                    centerComponent={{ text: "Barter System App", style: { color: '#ffffff', fontSize:20,fontWeight:"bold" } }}    
                    rightComponent={<Icon name='account-circle'type='material-icons' color='#2BB9E3' onPress={()=>{this.props.navigation.navigate('Profile')}}/>}
                    style={{backgroundColor:'#33E5CC', flex:1, marginBottom:50}}
                />

                <Text style={styles.text}>The home page</Text>
                  
              </View>             
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        textAlign:'center',
        marginTop:200,
        fontSize:24,
        fontFamily:'sans-serif'
    }
})
