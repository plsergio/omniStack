import React from 'react'
import {View, StyleSheet, Image,Text} from 'react-native'

import logo from '../assets/logo.png'

export default function Login(){
    return (
    < View style={styles.container} >
        <Text>teste</Text>
        <Image source={logo}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },  
})