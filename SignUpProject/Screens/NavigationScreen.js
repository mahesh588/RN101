import React from 'react';

import { createStackNavigator, TabNavigator } from 'react-navigation';
import SignUpScreen_Solved from './SignUpScreen_Solved';
import CalculatorScreen from './CalculatorScreen';


export default NavigationScreen = createStackNavigator({
    SignUpScreen_Solved: {
        screen: SignUpScreen_Solved
    },
    CalculatorScreen: {
        screen: CalculatorScreen
    }
}, {
    headerMode:'none'
});


/** 
export default NavigationScreen = TabNavigator({
    SignUpScreen_Solved: {
        screen: SignUpScreen_Solved
    },
    CalculatorScreen: {
        screen: CalculatorScreen
    }
}, {
    headerMode:'none'
});
**/
