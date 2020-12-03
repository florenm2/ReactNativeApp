import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
import { Block } from "galio-framework";
import uniqueId from 'lodash/uniqueId';

const ApiView = (props) => {
    const { goForAxios, renderItem, FlatListItemSeparator, loading, covidCountyData } = props
    return (
        <View  style={{flex: 1}}>
            <Block >
                <Text style={styles.textStyle}>Covid-19 data in the state of California for the last five days.</Text>
            </Block>
                <FlatList
                data={covidCountyData}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => uniqueId("prefix-")}
            />
            
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )
}
export default ApiView;