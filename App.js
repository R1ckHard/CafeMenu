import React from 'react';
import Navigator from './routes/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import { compose, createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {createStackNavigator} from '@react-navigation/stack';

const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const Stack = createStackNavigator();

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false,}}>
                    <Stack.Screen name="App" component={Navigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}
