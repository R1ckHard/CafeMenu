import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default function Card(props) {

    return (
        <View style={styles.card}>
                {props.children}
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        justifyContent:'center',
        alignContent:'center'
    },

});
