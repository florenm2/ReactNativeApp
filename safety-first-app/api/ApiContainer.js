import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import merchants from "../constants/merchants";
import { Card } from "../components";

class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataSource: [],
            queueInsightsData: null
        };
    }


    componentDidMount() {
        console.log("queueInsightsData ", this.state.queueInsightsData);
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
        } 
        ).then(response => {
            setTimeout(() => {
                this.setState({
                    loading: false,
                    queueInsightsData: response.data
                })
            }, 2000)
        })
        .catch(error => {
            console.log(error);
            setTimeout(() => {
                this.setState({
                    loading: false,
                    queueInsightsData: merchants
                })
            }, 2000)
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
            <View>
                <Card item={data.item} horizontal /> 
            </View>
        )

    }


    render() {
        const { queueInsightsData, dataSource, loading, axiosData } = this.state
        return (
            <ApiView
            merchantData={this.state.queueInsightsData}
            renderItem={this.renderItem}
            loading={loading}
            FlatListSeparator={this.FlatListSeparator}/>
        );
    }

}

export default ApiContainer;