import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Divider } from 'react-native-paper'
import styles from './styles';
import { CardSurahList, Loader, Header } from "../../components/index";

import { fetchingQuran } from '../../actions/QuranListAction';
import { connect } from 'react-redux';

class QuranList extends Component {

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
        await this.props.fetchingQuran();
    }

    navigateDetail = (dataSurah) => {
        this.props.navigation.navigate("QuranDetail", { dataSurah });
    }

    renderItem = ({ item, index }) => {
        return (
            <CardSurahList
                key={index}
                surahNumber={item?.id}
                surahText={item?.surat_text}
                surahName={item?.surat_name}
                surahMean={item?.surat_terjemahan}
                surahAyat={item?.count_ayat}
                onPress={() => this.navigateDetail(item)}
            />
        )
    }

    render() {
        return this.props.quranList.loading 
                ? ( <Loader loading={this.props.quranList.loading} /> )
                : (
                    <View style={styles.container}>
                        <Header title="Al Quran Mobile" />
                        <View style={styles.contentContainer}>
                            <FlatList
                                data={this.props.quranList.data}
                                renderItem={this.renderItem}
                                keyExtractor={item => `${item.id}`}
                                ItemSeparatorComponent={Divider}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                            />
                        </View>
                    </View>
                );
    }
}

function mapStateToProps(state, props) {
    return {
        quranList: state.quranList
    };
}

export default connect(mapStateToProps, { fetchingQuran })(QuranList);
