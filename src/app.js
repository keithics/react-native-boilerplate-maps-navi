import React from 'react';
import {
    StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

export default StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    MapScreen: {
        screen: MapScreen
    }
},{
    cardStyle: {
        opacity: 1,
    }
});
