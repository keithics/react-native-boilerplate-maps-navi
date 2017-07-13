/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';

export default class prototype extends Component {
    gotoMap(){
        this.props.navigation.navigate('MapScreen');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native Template!
                </Text>
                <Button
                    onPress={() => this.gotoMap()}
                >GO TO MAP</Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
        paddingTop:20
    },
    welcome: {
        fontFamily:'Roboto-Bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('prototype', () => prototype);
