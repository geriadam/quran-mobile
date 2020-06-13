import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Styles } from './styles';
import { connect } from 'react-redux';
const SECONDS = 2000;
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_Main_App: true,
            time_passed: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ time_passed: true });
        }, SECONDS);
    }

    _loadingView = () => {
        return (
            <View style={Styles.container}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: 200, height: 200}}/>
            </View>
        )
    }   

    render() {
        if(!this.state.time_passed) {
            return this._loadingView();
        } else {
            return this.props.navigation.navigate('QuranList');
        }
    }
}

export default SplashScreen;
