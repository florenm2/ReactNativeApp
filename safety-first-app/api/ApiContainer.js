import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
// import fs from "fs";
// import https from "https";


const fs = require('file-system');
// const https = require('https');
const httpsAgent2 = require('https-agent');


const httpsAgent = new httpsAgent2({
    cert: fs.readFileSync('../assets/cert/cert.pem'),
     key: fs.readFileSync('../assets/cert/privateKey.pem'),
});

// const httpsAgent = new https.Agent({ ca: MY_CA_BUNDLE });

class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }
	

    goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    }

    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.post("https://sandbox.api.visa.com/visaqueueinsights/v1/queueinsights", { httpsAgent },
				  { auth: {
					  username: 'TY1M9UW7V8GJZN4GT25S21OdNNnbGjz8-zMcTWJDiS5JYS8Nk',
					  password: 'KyE4F1XMemj'
				  }})
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data
                    })
                }, 4000)
            })
            .catch(error => {
                console.log(error);
            });

            axios.get("https://localcoviddata.com/covid19/v1/cases/covidTracking?state=CA&daysInPast=4")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false
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
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.email}</Text>
                <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
        )

    }


    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }



}

export default ApiContainer;