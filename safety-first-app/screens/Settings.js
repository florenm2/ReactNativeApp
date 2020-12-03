import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { Switch } from "../components";

import argonTheme from "../constants/Theme";

export default class Settings extends React.Component {
  state = {};

  toggleSwitch = switchNumber =>
    this.setState({ [switchNumber]: !this.state[switchNumber] });

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    switch (item.type) {
      case "switch":
        return (
          <Block row middle space="between" style={styles.rows}>
            <Text style={{ fontFamily: 'open-sans-regular' }} size={14} color="#525F7F">{item.title}</Text>
            <Switch
              onValueChange={() => this.toggleSwitch(item.id)}
              value={this.state[item.id]}
            />
          </Block>
        );
      case "button":
        return (
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => (item.id !== 'Payment' && item.id !== 'gift') && navigate(item.id)}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text style={{ fontFamily: 'open-sans-regular' }} size={14} color="#525F7F">{item.title}</Text>
                <Icon
                  name="angle-right"
                  family="font-awesome"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        );
      default:
        break;
    }
  };

  render() {
    const recommended = [
      // { title: "Use FaceID to sign in", id: "face", type: "switch" },
      { title: "Notifications", id: "autolock", type: "switch" },
      { title: "Notifications", id: "NotificationsSettings", type: "button" }
    ];

    const payment = [
      { title: "My Location Settings", id: "Payment", type: "button" },
      { title: "Manual Location Input", id: "gift", type: "button" }
    ];

    const privacy = [
      { title: "Privacy", id: "Privacy", type: "button" },
      { title: "About", id: "About", type: "button" }
    ];

    return (
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.settings}
      >
        <FlatList
          data={recommended}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <Block center style={styles.title}>
              <Text style={{ fontFamily: 'open-sans-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={argonTheme.COLORS.TEXT}>
                Notification Settings
              </Text>
              <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.CAPTION} color={argonTheme.COLORS.TEXT}>
                Settings about the notifications you receive
              </Text>
            </Block>
          }
        />
        <Block center style={styles.title}>
          <Text style={{ fontFamily: 'open-sans-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={argonTheme.COLORS.TEXT}>
            Location Settings
          </Text>
          <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.CAPTION} color={argonTheme.COLORS.TEXT}>
            Let us know how to determine your location
          </Text>
        </Block>

        <FlatList
          data={payment}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />

        <Block center style={styles.title}>
          <Text style={{ fontFamily: 'open-sans-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={argonTheme.COLORS.TEXT}>
            Privacy Settings
          </Text>
          <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.CAPTION} color={argonTheme.COLORS.TEXT}>
            Your privacy and safety is important to Visa. 
          </Text>
        </Block>
        <FlatList
          data={privacy}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    paddingVertical: theme.SIZES.BASE / 3
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2
  }
});
