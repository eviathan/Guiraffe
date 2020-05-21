
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Neck from '../Components/Neck';

export default class Guitar extends Component {

    render() {
        return (
            <>
                <Neck notes={[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]} />
                <View>
                <Text>TODO: OPTIONS GO HERE</Text>
                </View>
            </>
        );
    }
} 