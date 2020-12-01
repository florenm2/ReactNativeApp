import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
import merchants from "../constants/merchants";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Card item={merchants[0]} horizontal /> 
          <Card item={merchants[1]} horizontal /> 
          <Card item={merchants[2]} horizontal /> 
          <Card item={merchants[3]} horizontal />
          <Card item={merchants[4]} horizontal />
        </Block>
      </ScrollView>

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
