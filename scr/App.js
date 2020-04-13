import React from 'react';
import Navigator from './routes/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {compose,createStore} from 'redux';
import {rootReducer} from './redux/rootReducer'

const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator/>
            </NavigationContainer>
        </Provider>

    );
}
