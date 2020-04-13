import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';
import MoreAbout from '../screens/more';
import Header from '../components/header';

const Stack = createStackNavigator();

function AboutStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Cart'
                component={About}
                options={{
                    headerTitle: () => <Header navigation={navigation} title='Cart' />,
                    headerStyle: {
                        backgroundColor: '#7aaeff',
                    },
                }}/>
            <Stack.Screen
                name='MoreAbout'
                component={MoreAbout}
                options={{
                    title: 'More',
                    headerStyle: {
                        backgroundColor: '#7aaeff',
                    },
                }}/>
        </Stack.Navigator>
    );
};
export default AboutStack;
