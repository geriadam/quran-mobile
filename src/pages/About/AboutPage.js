import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ActionSheetIOS, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class AboutPage extends Component {
    static navigationOptions = {
        headerTitle: 'About page',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>About page</Text>
            </View>
        );
    }
}

export default AboutPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 5
    },
});
