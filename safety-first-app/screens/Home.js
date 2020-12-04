import React from "react";
import { StyleSheet, Dimensions, ScrollView, View } from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import merchants from "../constants/merchants";
import { FlatList } from "react-native-gesture-handler";
import uniqueId from 'lodash/uniqueId';
const { width } = Dimensions.get("screen");

class Home extends React.Component {

  
  state = {
    results: [],
    active: false
  };

  handleFilterChange = search => {
    console.log("handle filter change");
    console.log("search: " + search);
    const results = merchants.filter(
      item => search && item.category.toLowerCase().includes(search)
    );
    this.setState({ results });
    this.animate();
  };
  
  renderItem = (data) => {
    const cardContainer = [styles.card, styles.shadow];
    return (

        <View>
          <Card item={data.item} horizontal /> 
        </View>
    )
  }


  renderArticles = () => {

    const { route } = this.props;
    const tabId = route.params?.tabId;

    const results = tabId == 'all' ? merchants : merchants.filter(
      item => item.category.toLowerCase().includes(tabId)
    );


    return (
      <View>
        <ScrollView style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
        >
            <FlatList 
                data={results}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => uniqueId("prefix-")}
            />

        </ScrollView>
      </View>

    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2
  }
});

export default Home;
