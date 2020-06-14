import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Divider } from 'react-native-paper'
import styles from './styles';
import { CardAyat, Loader, HeaderDetail } from "../../components/index";
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
        const { dataSurah: { id, count_ayat } } = this.props.navigation.state.params;
        await this.props.fetchingQuranDetail(id, count_ayat);
    }

    navigateQuran = () => {
        this.props.navigation.navigate("QuranList");
    }

    renderItem = ({ item, index }) => {
        return (
            <CardAyat
                ayatNumber={item?.aya_number}
                ayatText={item?.aya_text}
                ayatTranslate={item?.translation_aya_text}
            />
        )
    }

    render() {

        const { dataSurah } = this.props.navigation.state.params;
        const suratName = dataSurah.surat_name;
        const suratArabic = dataSurah.surat_text;
        const suratTranslate = dataSurah.surat_terjemahan;
        const countAyat = dataSurah.count_ayat;
        const title = `${suratName} (${suratArabic})`;
        const subtitle = `${suratTranslate} - ${countAyat} Ayat`;

        return this.props.quranDetail.loading 
                ? ( <Loader loading={this.props.quranDetail.loading} /> )
                : (
                    <View style={styles.container}>
                        <HeaderDetail title={title} subtitle={subtitle} link={this.navigateQuran}/>
                        <FlatList
                            data={this.props.quranDetail.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => `${item.aya_id}`}
                            ItemSeparatorComponent={Divider}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />
                            }
                        />
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
