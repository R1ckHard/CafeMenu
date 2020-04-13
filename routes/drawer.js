import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

    const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
    return (
            <Drawer.Navigator screenOptions={{
                backgroundColor: '#7aaeff',

            }}>
                <Drawer.Screen name="Home" component={HomeStack}/>
                <Drawer.Screen name="Cart" component={AboutStack}/>
            </Drawer.Navigator>
    );
}

