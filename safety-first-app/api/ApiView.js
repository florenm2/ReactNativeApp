import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
import uniqueId from 'lodash/uniqueId';

const ApiView = (props) => {
    const { merchantData, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        <View style={styles.parentContainer}>
            <View>
                <Text style={styles.textStyle}>In this tutorial, we will implement all the provided methods for API calls into React Native application.</Text>
            </View>

           
            <FlatList
                data={merchantData}
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