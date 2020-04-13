import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../components/card';
import {services} from '../mocha/mochaData';

export default function Home({navigation}) {

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={services}
                keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item.title)}>
                    <Card>
                    <Image style={globalStyles.logo} source={{uri: item.logo}}/>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                    </TouchableOpacity>
                    )}
                />
        </View>
    );
}
