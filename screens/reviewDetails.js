import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import {menu} from '../mocha/mochaData';

export default function ReviewDetails({navigation,route}) {
    const restaurant = route.params;
    const menuItem = menu.filter(item => item.title === restaurant)[0].menuList;
    return (
        <View style={globalStyles.container}>
            <FlatList keyExtractor={item => item.id.toString()} data={menuItem} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Info', item)}>
                    <View style={globalStyles.item}>
                            <Image style={globalStyles.dishImg} source={{uri: item.img}}/>
                        <View style={globalStyles.menuListItem}>
                            <Text  numberOfLines={1} style={globalStyles.titleText}>{item.name}</Text>
                            <Text numberOfLines={1} style={globalStyles.menuListDescription}>{item.description}</Text>
                        </View>
                            <Text style={globalStyles.price}>${item.price}</Text>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>

    );
}
