import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import {DrawerContent} from '../components/drawerContent';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator({navigation}) {
    return (
            <Drawer.Navigator
                initialRouteName="MenuTab"
                drawerStyle={{
                    backgroundColor:'#f5f5f5',
                }}
                drawerContent={() => <DrawerContent navigation={navigation} />}>
                <Drawer.Screen name="Home" component={HomeStack}/>
                <Drawer.Screen name="Cart" component={AboutStack}/>
            </Drawer.Navigator>
    );
}

