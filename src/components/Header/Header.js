import React from 'react';
import { Appbar } from 'react-native-paper';

import styles from "./styles";
import { Colors } from '../../styles/Colors';

const Header = props => {
    const { title, subtitle, link } = props;
    return (
        <Appbar.Header style={styles.headerContainer}>
            <Appbar.Content 
                color={Colors.white}
                title={title}
                subtitle={subtitle}
            />
        </Appbar.Header>
    );
};

export default Header;
