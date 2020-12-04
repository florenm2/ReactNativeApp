import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text
} from "react-native";
import { Block, theme } from "galio-framework";
import colors from '../../constants/colors';


class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            covidCountyData: null
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,

        })

        axios.get("https://localcoviddata.com/covid19/v1/cases/covidTracking?state=CA&daysInPast=5")
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        covidCountyData: response.data.historicData
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });

       
    }
    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%"
            }}
            />
        );
    }
    renderItem = (data) => {
        const cardContainer = [styles.card, styles.shadow];
        return (
    
            <View >
            <Block style={cardContainer}>
                <Block style={styles.cardContainer}>

                    <Text style={styles.dateStyle}>{data.item.date}</Text>

                    <Block card style={{ marginTop: 10}}>
                        <Block row style={styles.waitTimesFirstBlock}>
                            <Block><Text style={styles.waitTimesLabelText}>People currently in hospital: </Text></Block>
                            <Block><Text style={styles.waitTimesText}>{data.item.peopleHospCurrentlyCt}</Text></Block>
                        </Block>

                        <Block row style={styles.waitTimesBlock}>
                            <Block><Text style={styles.waitTimesLabelText}>New COVID-19 Deaths: </Text></Block>
                            <Block><Text style={styles.waitTimesText}>{data.item.peopleDeathNewCt}</Text></Block>
                        </Block>

                        <Block row style={styles.waitTimesBlock}>
                            <Block><Text style={styles.waitTimesLabelText}>Postitive tests: </Text></Block>
                            <Block><Text style={styles.waitTimesText}>{data.item.peoplePositiveNewCasesCt}</Text></Block>
                        </Block>

                        <Block row style={styles.waitTimesBlock}>
                            <Block><Text style={styles.waitTimesLabelText}>Negative tests: </Text></Block>
                            <Block><Text style={styles.waitTimesText}>{data.item.peopleNegativeNewCt}</Text></Block>
                        </Block>

                        <Block row style={styles.waitTimesLastBlock}>
                            <Block><Text style={styles.waitTimesLabelText}>People recovered: </Text></Block>
                            <Block><Text style={styles.waitTimesText}>{data.item.peopleRecoveredCt}</Text></Block>
                        </Block>

                    </Block>
                </Block>
            </Block>
            </View>
        )

    }

    render() {
        const { loading, covidCountyData } = this.state
        return (
            <ApiView
            style={{flex: 1}}
                goForAxios={this.goForAxios}
                covidCountyData={covidCountyData}
                loading={loading}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }



}

export default ApiContainer;