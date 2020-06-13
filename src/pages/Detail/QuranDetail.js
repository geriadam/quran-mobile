import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Colors } from '../../styles/Colors';
import styles from './styles';
import { CardSurahList, Header } from "../../components/index";

import { fetchingQuranDetail } from '../../actions/QuranDetailAction';
import { connect } from 'react-redux';

class QuranDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true
        }
        this._onRefresh = this._onRefresh.bind(this);
    }

    componentDidMount() {
        this._fetchData();
        this.setState({ refreshing: false });
    }

    _onRefresh(){
        this._fetchData();
        this.setState({ refreshing: false });
    }

    _fetchData = async () => {
        //const { dataSurah } = this.props.navigation.state.params;
        //await this.props.fetchingQuranDetail();
    }

    navigateQuran = () => {
        this.props.navigation.navigate("QuranList");
    }

    render() {
        const { dataSurah } = this.props.navigation.state.params;
        const suratName = dataSurah.surat_name;
        const suratArabic = dataSurah.surat_text;
        const suratTranslate = dataSurah.surat_terjemahan;
        const countAyat = dataSurah.count_ayat;
        const title = `${suratName} (${suratArabic})`;
        const subtitle = `${suratTranslate} - ${countAyat} Ayat`;

        return (
            <View style={styles.container}>
                <Appbar.Header style={{backgroundColor: Colors.primary}}>
                    <Appbar.BackAction onPress={() => {this.navigateQuran()}} color={Colors.white}/>
                    <Appbar.Content 
                        color={Colors.white}
                        title={title}
                        subtitle={subtitle}
                    />
                </Appbar.Header>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        quranDetail: state.quranDetail
    };
}

export default connect(mapStateToProps, { fetchingQuranDetail })(QuranDetail);
