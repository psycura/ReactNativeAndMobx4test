import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {  computed } from 'mobx'
import { observer } from 'mobx-react'



class App extends Component {
    
    @computed get testComputed () {
        return 'Test Message'
    }
    
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.testComputed}
                </Text>
            </View>
        );
    }
}

export default observer ( App )

const styles = StyleSheet.create ( {
    container:    {
        flex:            1,
        justifyContent:  'center',
        alignItems:      'center',
        backgroundColor: '#F5FCFF',
    },
    welcome:      {
        fontSize:  20,
        textAlign: 'center',
        margin:    10,
    },
    instructions: {
        textAlign:    'center',
        color:        '#333333',
        marginBottom: 5,
    },
} );
