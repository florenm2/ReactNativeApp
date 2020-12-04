import React, { Component } from 'react'
import { View, Text, Button, Linking, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
import { Block, theme } from "galio-framework";
import uniqueId from 'lodash/uniqueId';
import { Icon } from "../../components";

const ApiView = (props) => {
    const { goForAxios, renderItem, FlatListItemSeparator, loading, covidCountyData } = props
    return (
        <View  style={styles.container}>
            <Block style={styles.titleContainer}>
                <Text style={styles.textStyle}>Covid-19 data for California.</Text>
                
                <Block row style={styles.linkStyle}>
                <Icon
                    size={16}
                    color={theme.COLORS.MUTED}
                    name="magnifying-glass"
                    family="entypo"
                    />
                    <Text style={styles.linkTextStyle}
                    onPress={() => Linking.openURL('https://usa.visa.com/visa-everywhere/blog/bdp/2020/05/05/covid-19-response-update-1588713283813.html')}>
                    Visa's Covid-19 Response
                 </Text>
                 </Block>
            </Block>
                <FlatList
                data={covidCountyData}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => uniqueId("prefix-")}
            />
            
            {loading &&
            <View  style={{flex: 2}}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
                </View>
            }
        </View>
    )
}
export default ApiView;