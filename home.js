import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>Face Filters</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Main")}> 
                    <Text style={styles.textcontainer}> Try</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#6278e4",
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4",
      
    },
    titleText: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1,
        alignSelf: 'center',
   
    },
    buttonContainer:{
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center"

    },
    textcontainer: {
        fontSize: RFValue(25),
        fontWeight: "bold"
    }
})