import React from "react";
import { StyleSheet, Dimensions, ScrollView, View, TouchableWithoutFeedback } from "react-native";
import { Block, theme, Input } from "galio-framework";

import { Card, Icon } from "../components";
import merchants from "../constants/merchants";
import { FlatList } from "react-native-gesture-handler";
import uniqueId from 'lodash/uniqueId';

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  
  state = {
    results: [],
    search: "",
    active: false
  };

  handleFilterChange = search => {
    const results = merchants.filter(
      item => search && item.category.toLowerCase().includes(search)
    );
    this.setState({ results });
  };
  
  renderItem = (data) => {
    const cardContainer = [styles.card, styles.shadow];
    return (

        <View>
          <Card item={data.item} horizontal /> 
        </View>
    )
  }

  handleSearchChange = search => {
    const results = merchants.filter(
      item => search && item.name.toLowerCase().includes(search)
    );

    this.setState({ results, search });
  };


  renderArticles = () => {

    const { search } = this.state.search;
    const iconSearch = search ? (
      <TouchableWithoutFeedback onPress={() => this.setState({ search: "" })}>
        <Icon
          size={16}
          color={theme.COLORS.MUTED}
          name="magnifying-glass"
          family="entypo"
        />
      </TouchableWithoutFeedback>
    ) : (
      <Icon
        size={16}
        color={theme.COLORS.MUTED}
        name="magnifying-glass"
        family="entypo"
      />
    );

    const { route } = this.props;
    const tabId = route.params?.tabId;

    this.state.results = tabId == 'all' ? merchants : merchants.filter(
      item => item.category.toLowerCase().includes(tabId)
    );
    this.state.results = this.state.search.length < 1 ? this.state.results : this.state.results.filter(
      item => item.name.toLowerCase().includes(this.state.search)
    );

    return (
      <View>
        <Block style={styles.shadow}>
        <Input
          right
          color="black"
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize="none"
          iconContent={iconSearch}
          defaultValue={search}
          style={[styles.search, this.state.active ? styles.shadow : null]}
          placeholder="What are you looking for?"
          onFocus={() => this.setState({ active: true })}
          onBlur={() => this.setState({ active: false })}
          onChangeText={this.handleSearchChange}
        />
        </Block>
        <ScrollView style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
        >
            <FlatList 
                data={this.state.results}
                renderItem={item => this.renderItem(item)}
                extraData={this.state.results}
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
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: 2
  },
  search: {
    height: 48,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 1,
    borderRadius: 3
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  },
});

export default Home;
