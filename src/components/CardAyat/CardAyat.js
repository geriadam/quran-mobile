import React from 'react';
import { View, Text } from 'react-native';
import HTML from 'react-native-render-html';
import { TouchableRipple } from 'react-native-paper';
import styles from "./styles";
import { Colors } from '../../styles/Colors';

const CardAyat = props => {
    const {
        ayatNumber,
        ayatText,
        ayatTranslate,
        onPress
    } = props;
    return (
        <TouchableRipple
            rippleColor={Colors.rippleColor}
            centered
            onPress={onPress}>
            <View style={styles.CardStyle}>
                <View style={styles.cardContainer}>
                    <View style={styles.numberCircleContainer}>
                        <View style={styles.NumberCircle}>
                            <Text style={styles.textNumber}>{ayatNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.descTextRight}>{ayatText}</Text>
                        <HTML
                            html={ayatTranslate}
                            containerStyle={styles.descTextLeftContainer}
                            baseFontStyle={styles.descTextLeft}
                        />
                    </View>
                </View>
            </View>
        </TouchableRipple>
    );
};

export default CardAyat;
