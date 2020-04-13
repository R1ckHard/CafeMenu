import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Info  from '../screens/info';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header';


const Stack = createStackNavigator();

function HomeStack({navigation}) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#7aaeff',
            },
        }

        }>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerTitle: () => <Header navigation={navigation} title='Menu'/>,
                }}/>
            <Stack.Screen
                name='ReviewDetails'
                component={ReviewDetails}
                options={{
                    title: 'Details',
                }}/>
            <Stack.Screen
                name='Info'
                component={Info}
                options={{
                    title: 'Info',

                }}/>

        </Stack.Navigator>
    );
};
export default HomeStack;
