import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export function DrawerContent({navigation}) {
    return (
        <DrawerContentScrollView >
            <View
                style={
                    styles.drawerContent
                }
            >
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        style={{backgroundColor:'white'}}
                        source={{
                            uri:
                                'https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png',
                        }}
                        size={80}
                    />
                    <Title style={styles.title}>Dawid Urbaniak</Title>
                    <Caption style={styles.caption}>@trensik</Caption>

                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        style={{
                            borderColor: '#bbb',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                        }}
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        style={{
                            borderColor: '#bbb',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                            color: '#333',

                        }}
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={size} />
                        )}
                        label="Cart"
                        onPress={() => navigation.navigate('Cart')}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
