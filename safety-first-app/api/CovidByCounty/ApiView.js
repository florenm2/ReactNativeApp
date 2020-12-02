import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
import { Block } from "galio-framework";
import uniqueId from 'lodash/uniqueId';

const ApiView = (props) => {
    const { goForAxios, renderItem, FlatListItemSeparator, loading, covidCountyData } = props
    return (
        <Block style={styles.container}>
            <Block >
            <Block >
                <Text style={styles.textStyle}>Covid Data in your county for the last four days.</Text>
            </Block>
            <Block >
                <FlatList
                data={covidCountyData}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => uniqueId("prefix-")}
            />
            </Block>
            </Block>
            
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </Block>
    )
}
export default ApiView;