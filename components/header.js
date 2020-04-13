import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {DrawerActions} from '@react-navigation/native';

export default function Header({navigation, title}) {
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    return (
        <View style={styles.header}>
                <MaterialIcons name="menu" size={28} onPress={openMenu}
                               style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        left:1,
        position:'absolute',
    }
});
