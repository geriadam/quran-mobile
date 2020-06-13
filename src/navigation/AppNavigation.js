import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AboutPage from '../pages/About/AboutPage';
import QuranList from '../pages/Home/QuranList';
import QuranDetail from '../pages/Detail/QuranDetail';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import { Colors } from '../styles/Colors';
import { FontType } from '../styles/Fonts';

const AppStack = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
        }),
    },
    AboutPage: {
        screen: AboutPage,
    },
    QuranList: {
        screen: QuranList,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
        }),
    },
    QuranDetail: {
        screen: QuranDetail,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
        }),
    },
}, {
    defaultNavigationOptions: {
        headerPressColorAndroid: Colors.rippleColor,
        headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.iron,
            elevation: 0,
        },
        headerTitleStyle: {
            fontFamily: FontType.semiBold,
            fontSize: 18,
            marginLeft: 0,
        },
        headerTintColor: Colors.black,
    }
}, );

const AppNavigation = createAppContainer(AppStack);

export default AppNavigation;
