import React from "react";
import { ScrollView, Alert } from "react-native";
import { Block } from "galio-framework";
import { Notification } from "../components";
import { argonTheme } from "../constants";

export default class PersonalNotifications extends React.Component {
  render() {
    return (
      <Block middle flex>
        <Block flex style={{ width: "90%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Notification
              time="15:30"
              body="Panera Bread is less busy than usual right now."
              iconName="bell"
              iconFamily="font-awesome"
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('The Panera Bread located at 660 Stanford Shopping Center, Palo Alto, CA 94304, is not busy. Now is a good time to go.')}
            />
            <Notification
              time="12:10"
              body="Walgreens is unusually busy. It's a good idea to go later."
              iconName="bell"
              iconFamily="font-awesome"
              color={argonTheme.COLORS.INFO}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('The Walgreens located at 4170 El Camino Real, Palo Alto, CA 94306, is unusually busy.')}
            />
            <Notification
              time="11:30"
              body="Great News! Panera Bread has had low wait times all day."
              iconName="bell"
              iconFamily="font-awesome"
              color={argonTheme.COLORS.WARNING}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('The Panera Bread located at 660 Stanford Shopping Center, Palo Alto, CA 94304, is not busy today. Now is a good time to go.')}
            />
            <Notification
              time="04:23"
              body="Walgreens is unusually busy. It's a good idea to go later."
              iconName="bell"
              iconFamily="font-awesome"
              color={argonTheme.COLORS.SUCCESS}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('The Walgreens located at 4170 El Camino Real, Palo Alto, CA 94306, is unusually busy.')}
            />
            <Block style={{ marginBottom: 20 }} />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}
