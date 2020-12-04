import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { Buffer } from 'buffer';
import merchLocatorAPI from './merchant_locator_api';

// var api = require('./merchant_locator_api').merchant_locator_api;
var authCredentials = require('../credentials.json');

var merchant_locator_api = new merchLocatorAPI(authCredentials);


// import fs from "fs";
// import https from "https";


// const fs = require('file-system');
// const https = require('https');

// const httpsAgent2 = require('https-agent');


//const httpsAgent = new httpsAgent2({
//     cert: fs.readFileSync('../assets/cert/cert.pem'),
//     key: fs.readFileSync('../assets/cert/privateKey.pem'),
//});

// const httpsAgent = new httpsAgent2({
//     pfx: fs.readFileSync('../assets/cert/myCert.p12'),
//     passphrase: 'mvwar'
// });

// const httpsAgent = new https.Agent({ ca: MY_CA_BUNDLE });

// const httpsAgent = new https.Agent(
//     { 
//         cert: "MIIEFDCCAvygAwIBAgIIIeol6vRGexIwDQYJKoZIhvcNAQELBQAwMTEOMAwGA1UEAwwFVkRQQ0ExEjAQBgNVBAoMCVZEUFZJU0FDQTELMAkGA1UEBhMCVVMwHhcNMjAxMjAyMTcxNzM5WhcNMjIxMjAyMTcxNzM5WjCB4TEiMCAGCSqGSIb3DQEJARYTYmluaWFtNTU0QGdtYWlsLmNvbTE0MDIGCgmSJomT8ixkAQEMJGE5MDUwM2EyLTVlOGQtNDYyNi04MDhkLWIwMzUzYmZiZWU5YzEtMCsGA1UEAwwkYTkwNTAzYTItNWU4ZC00NjI2LTgwOGQtYjAzNTNiZmJlZTljMRMwEQYDVQQLDApEZXBhcnRtZW50MRUwEwYDVQQKDAxPcmdhbml6YXRpb24xDTALBgNVBAcMBENpdHkxDjAMBgNVBAgMBVN0YXRlMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJAxS/0OMP3ijB8DQBMQl+3Y40OMEEY+zOdQXYNz3fIMajowxAi+gvp47PWa9G2bf54h/kvvAL1y3IFkV/Iv3C1jVC1Pnmg6RelQaJAFA4GgYvTsl0jpmV99kd3U9IYLPoGJG4+Y2gSKUTgw2LO5KjMmObcJCcFpIU+KtW09xEuR8KeGYpW3COjuXewfd1zkjHZq5eGc76aag3hMBM0/uKpM3DTPMPwWiAvQ1N0cw1iMckzPtFEjJ6qnEmp2twCcThL4UohkNSJyuIEK6+yLzQmHjHWdE/8FQ8s7OJ6nqHT/xiektG33sg9vv1x/l/bTCFV3IH+4gmb4sZf3wRl2uo8CAwEAAaN/MH0wHQYDVR0OBBYEFAHBStezzIc7ENarXUJ66SDcwXf9MAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUr91utqBLnHm5Fghi5iMxEKeC66EwDgYDVR0PAQH/BAQDAgXgMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDBDANBgkqhkiG9w0BAQsFAAOCAQEAepSs9fADhcQpgnrXdatE44HQ5qQA5CKYiTJkyLQOCOglQDY3eWUuLp7Ep5+Hc8rJpVFxrY++O/24qALyxBuDnVx69UQgeP5cdwNhbc2n0HtzFNZDhtTmhp+cHiEx/mvqbdM/ZJ2n/ULVlpwrxMRu0Y6lmztxkgUZlTqC4dUhqSerGNI+yBFJcCiE9N+/+ZrWAVBk8p1TXGjntYqxMhXAluXp2XMVP7fFQhckC6fGCY67E7Mqj2yGXbYXUYxhAYehDk0CFFJDVPb3cz6259tcI2w1ZeFVElYzkdyOuLoCCrC20/1KewqCW/fUEdnYZ3U1DGBSgi7LEZ4n8pVJFg6Wbw==",
//         key: "MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQI/ASzwOQZmzcCAggAMBQGCCqGSIb3DQMHBAhS0HSuEMfO/gSCBMjFi8LBy4YVSzCXC4aX5X401bOepz/yhOLgt2MyYWIXIk9wKnNiLTgj7vi+aCC8ErwlvIC6FjpM/UKUYR2AlM2k3rM6JVIOdtdcOmz9qzVPiuZxKUW5lC9zpdJN0O79pqNACbwNRIcseEyyY7NlbvgGiZ3mr50oX9+/vcDRY+kqnkKmlt1srd5WkFTZEsTAFQ8NW25WbtO8uU3M5a/lT1CXzNZ6aB5xWHpvDVaIxpvk2NrUwGVXVnIIIjRJE1cJKhWQBcbsr9te0Tp3ZLdFL8IaV+wlBbNF0GtJJp0NEzkZGD0xz4tKRG7HHt8iQ1AGvaLN2EyT0PqHCwguwv29LQLcKSXp3n/TQvKmQzNxPr4YY4kA6k8A16rTUFDdT1KDo3+2YXaArH0s6gy9JmC+x3ZjiCwcclFg3ZZSDO6gT2oLvALxAyiJ6ky4svsBeNeChEsIvgdyCdBSNe2G/Ihz7PMnJedqLACWIYhHUlsEJpiuwNHr9izgIo0IGDhdOii0TmxIljUAjPXjpwr8058C75Azo3WleTIx7gw7FCNRJ3rGVSVY4xrP3KyMiVDjyfaCJF2JHLbiux0w0ph6uKLcLDQwnR2HHPrYVkROyGruI4rHtYLei+OwQ4U+8TM6jIlByU7WGBNNKCgzyJkOxjQovB2Tt5XjD5/Mhix6X7tX55LOJ27DjiaCfltHS4UkBnHfsT8J9z1oPFD+o9EPNTWj5qUeHBHwB2Q8+HUst0CwLEWQkxujKNXmmZ01BpeG1HOB+kjVPvxfuok8oxzWj3LPVVvSQbtyRIIYSsCJ0g5jY32GRdQocMTMYaK8Ye/YoPsL8u4hrqCB9qchd97MaG+ekWQztI3f9J2JIMGTrXNZ7hReF6SDXf2P3ONgoFwAv/tiFB4fNPt+zY0OYWUH+NT/rI9baTRk+vc4/7BEe7SGtu7AvnC7iJYfmR38OEn9VpMLk2ZvYjLKCLkLBEU4KMrxWTlCPMq4zx7FBEpAEd7rz8kg1bCznyMSnSC94zwH3l0dvvnY2hhWu0u0iuiF/oxacchxHztAZQXkjpNWMgg0DQgrhn7ixAV4025s65GZx4n4C2J4bGuKNl8zmP48JzCcrDKm44r/X59eh/RjRGblgOq0WL/8f1mEU8DwAUwGddKJbsw/H9gfnymVIIMRr3SgJfeaT30oygzRQ1LJRrpArpD8/mgXLmWwXjgMT4z6DmdPX1fJ2UeWblQzyVSrhAK9HNdJwMF0NvAgol+Dgpm7+qOUkB+A74pfQV6A/d4Wcza2Rfpdgy/GVDzMqAgOZoeQN/TfmiNCDfb6JK3opnwJXf+GYyFu/hhw8h/QGEAW31OyMLgbBC2hQNXi4W7A/eClnUpy3yqkJoHx8P0HHzsiZnvvp/7VuW4TF+jCiOUV0M7HOysRdDc+639wBusSUFZ4x9DQGuayXTFwlf4PJ4omZ65ZUA/OTRK3NULM2Hv3sytW0FG0Om+FYO/cmJBK7vEcgQxDvHn+DtjVV/qQjA+c41sagCk9nj1mrx8qGaqa7li8p42G44WKJX7X6jJjsAzHKNmY4UigcttmhhkbkDeShhTX4lafJN+wLsD2Dl68+CyyyyYZDG4MqZw4Z2ux24DCDJDTXr0dpg0BO1U="
//      }
// );

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


            // fetch("https://publicobject.com", {
            //     method: "GET" ,
            //     timeoutInterval: 10000, // milliseconds
            //     // your certificates array (needed only in android) ios will pick it automatically
            //     pkPinning: true,
            //     sslPinning: {
            //         certs: ["sha256//r8udi/Mxd6pLO7y7hZyUMWq8YnFnIWXCqeHsTDRqy8=",
            //         "sha256/YLh1dUR9y6Kja30RrAn7JKnbQG/uEtLMkBgFF2Fuihg=",
            //         "sha256/Vjs8r4z+80wjNcr1YKepWQboSIRi63WsWXhIMN+eWys="
            //     ]
            //     }
            //     ,
            //     headers: {
            //         Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
            //     }
            //     })


    }

    goForAxios = () => {
    //     this.setState({
    //         fromFetch: false,
    //         loading: true,

    //     })

    // { httpsAgent },
        // axios.post("https://sandbox.api.visa.com/visaqueueinsights/v1/queueinsights",
            

        //     {
        //         body: {
        //             "requestHeader": {
        //                 "requestMessageId": "6da60e1b8b024532a2e0eacb1af58581",
        //                 "messageDateTime": "2020-12-02T18:33:17.327"
        //             },
        //             "requestData": {
        //                 "kind": "predict"
        //             }
        //         }
        //     },
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept' : 'application/json',
        //             'Authorization' : 'Basic ' + new Buffer('TY1M9UW7V8GJZN4GT25S21OdNNnbGjz8-zMcTWJDiS5JYS8Nk' + ':' + 'KyE4F1XMemj').toString('base64')
        //         }
        //     })
        //     .then(response => {
        //         console.log('getting data from axios', response.data);
        //         setTimeout(() => {
        //             this.setState({
        //                 loading: false,
        //                 axiosData: response.data
        //             })
        //         }, 4000)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

            

        axios.post(
            "https://sandbox.api.visa.com/visaqueueinsights/v1/queueinsights", {
            cert: "MIIEFDCCAvygAwIBAgIIIeol6vRGexIwDQYJKoZIhvcNAQELBQAwMTEOMAwGA1UEAwwFVkRQQ0ExEjAQBgNVBAoMCVZEUFZJU0FDQTELMAkGA1UEBhMCVVMwHhcNMjAxMjAyMTcxNzM5WhcNMjIxMjAyMTcxNzM5WjCB4TEiMCAGCSqGSIb3DQEJARYTYmluaWFtNTU0QGdtYWlsLmNvbTE0MDIGCgmSJomT8ixkAQEMJGE5MDUwM2EyLTVlOGQtNDYyNi04MDhkLWIwMzUzYmZiZWU5YzEtMCsGA1UEAwwkYTkwNTAzYTItNWU4ZC00NjI2LTgwOGQtYjAzNTNiZmJlZTljMRMwEQYDVQQLDApEZXBhcnRtZW50MRUwEwYDVQQKDAxPcmdhbml6YXRpb24xDTALBgNVBAcMBENpdHkxDjAMBgNVBAgMBVN0YXRlMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJAxS/0OMP3ijB8DQBMQl+3Y40OMEEY+zOdQXYNz3fIMajowxAi+gvp47PWa9G2bf54h/kvvAL1y3IFkV/Iv3C1jVC1Pnmg6RelQaJAFA4GgYvTsl0jpmV99kd3U9IYLPoGJG4+Y2gSKUTgw2LO5KjMmObcJCcFpIU+KtW09xEuR8KeGYpW3COjuXewfd1zkjHZq5eGc76aag3hMBM0/uKpM3DTPMPwWiAvQ1N0cw1iMckzPtFEjJ6qnEmp2twCcThL4UohkNSJyuIEK6+yLzQmHjHWdE/8FQ8s7OJ6nqHT/xiektG33sg9vv1x/l/bTCFV3IH+4gmb4sZf3wRl2uo8CAwEAAaN/MH0wHQYDVR0OBBYEFAHBStezzIc7ENarXUJ66SDcwXf9MAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUr91utqBLnHm5Fghi5iMxEKeC66EwDgYDVR0PAQH/BAQDAgXgMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDBDANBgkqhkiG9w0BAQsFAAOCAQEAepSs9fADhcQpgnrXdatE44HQ5qQA5CKYiTJkyLQOCOglQDY3eWUuLp7Ep5+Hc8rJpVFxrY++O/24qALyxBuDnVx69UQgeP5cdwNhbc2n0HtzFNZDhtTmhp+cHiEx/mvqbdM/ZJ2n/ULVlpwrxMRu0Y6lmztxkgUZlTqC4dUhqSerGNI+yBFJcCiE9N+/+ZrWAVBk8p1TXGjntYqxMhXAluXp2XMVP7fFQhckC6fGCY67E7Mqj2yGXbYXUYxhAYehDk0CFFJDVPb3cz6259tcI2w1ZeFVElYzkdyOuLoCCrC20/1KewqCW/fUEdnYZ3U1DGBSgi7LEZ4n8pVJFg6Wbw==",
            key: "MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQI/ASzwOQZmzcCAggAMBQGCCqGSIb3DQMHBAhS0HSuEMfO/gSCBMjFi8LBy4YVSzCXC4aX5X401bOepz/yhOLgt2MyYWIXIk9wKnNiLTgj7vi+aCC8ErwlvIC6FjpM/UKUYR2AlM2k3rM6JVIOdtdcOmz9qzVPiuZxKUW5lC9zpdJN0O79pqNACbwNRIcseEyyY7NlbvgGiZ3mr50oX9+/vcDRY+kqnkKmlt1srd5WkFTZEsTAFQ8NW25WbtO8uU3M5a/lT1CXzNZ6aB5xWHpvDVaIxpvk2NrUwGVXVnIIIjRJE1cJKhWQBcbsr9te0Tp3ZLdFL8IaV+wlBbNF0GtJJp0NEzkZGD0xz4tKRG7HHt8iQ1AGvaLN2EyT0PqHCwguwv29LQLcKSXp3n/TQvKmQzNxPr4YY4kA6k8A16rTUFDdT1KDo3+2YXaArH0s6gy9JmC+x3ZjiCwcclFg3ZZSDO6gT2oLvALxAyiJ6ky4svsBeNeChEsIvgdyCdBSNe2G/Ihz7PMnJedqLACWIYhHUlsEJpiuwNHr9izgIo0IGDhdOii0TmxIljUAjPXjpwr8058C75Azo3WleTIx7gw7FCNRJ3rGVSVY4xrP3KyMiVDjyfaCJF2JHLbiux0w0ph6uKLcLDQwnR2HHPrYVkROyGruI4rHtYLei+OwQ4U+8TM6jIlByU7WGBNNKCgzyJkOxjQovB2Tt5XjD5/Mhix6X7tX55LOJ27DjiaCfltHS4UkBnHfsT8J9z1oPFD+o9EPNTWj5qUeHBHwB2Q8+HUst0CwLEWQkxujKNXmmZ01BpeG1HOB+kjVPvxfuok8oxzWj3LPVVvSQbtyRIIYSsCJ0g5jY32GRdQocMTMYaK8Ye/YoPsL8u4hrqCB9qchd97MaG+ekWQztI3f9J2JIMGTrXNZ7hReF6SDXf2P3ONgoFwAv/tiFB4fNPt+zY0OYWUH+NT/rI9baTRk+vc4/7BEe7SGtu7AvnC7iJYfmR38OEn9VpMLk2ZvYjLKCLkLBEU4KMrxWTlCPMq4zx7FBEpAEd7rz8kg1bCznyMSnSC94zwH3l0dvvnY2hhWu0u0iuiF/oxacchxHztAZQXkjpNWMgg0DQgrhn7ixAV4025s65GZx4n4C2J4bGuKNl8zmP48JzCcrDKm44r/X59eh/RjRGblgOq0WL/8f1mEU8DwAUwGddKJbsw/H9gfnymVIIMRr3SgJfeaT30oygzRQ1LJRrpArpD8/mgXLmWwXjgMT4z6DmdPX1fJ2UeWblQzyVSrhAK9HNdJwMF0NvAgol+Dgpm7+qOUkB+A74pfQV6A/d4Wcza2Rfpdgy/GVDzMqAgOZoeQN/TfmiNCDfb6JK3opnwJXf+GYyFu/hhw8h/QGEAW31OyMLgbBC2hQNXi4W7A/eClnUpy3yqkJoHx8P0HHzsiZnvvp/7VuW4TF+jCiOUV0M7HOysRdDc+639wBusSUFZ4x9DQGuayXTFwlf4PJ4omZ65ZUA/OTRK3NULM2Hv3sytW0FG0Om+FYO/cmJBK7vEcgQxDvHn+DtjVV/qQjA+c41sagCk9nj1mrx8qGaqa7li8p42G44WKJX7X6jJjsAzHKNmY4UigcttmhhkbkDeShhTX4lafJN+wLsD2Dl68+CyyyyYZDG4MqZw4Z2ux24DCDJDTXr0dpg0BO1U=",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }, auth: {
                username: 'TY1M9UW7V8GJZN4GT25S21OdNNnbGjz8-zMcTWJDiS5JYS8Nk',
                password: 'KyE4F1XMemj'
            }, body: {
                requestHeader: {
                    requestMessageId: "6da60e1b8b024532a2e0eacb1af58581",
                    messageDateTime: "2020-12-02T18:33:17.327"
                },
                requestData: {
                    kind: "predict"
                }
            }
        }, Config )
        

    //         axios.get("https://localcoviddata.com/covid19/v1/cases/covidTracking?state=CA&daysInPast=4")
    //         .then(response => {
    //             console.log('getting data from axios', response.data);
    //             setTimeout(() => {
    //                 this.setState({
    //                     loading: false
    //                 })
    //             }, 2000)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
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