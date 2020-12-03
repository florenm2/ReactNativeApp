import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import argonTheme from "../constants/Theme";

export default class About extends React.Component {
  render() {
    return (
      <Block flex>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.about}
          overScrollMode="always"
        >
          <Text style={{ fontFamily: 'open-sans-regular' }} size={16} color={argonTheme.COLORS.TEXT}>
            Visa cares about you and your safety, as well as the safety of the world around us.
            This app is intended to provide you with vital information that will keep you safe during this 
            unprecedented time. 
          </Text>
          <Text
            style={{ fontFamily: 'open-sans-regular' }}
            muted
            size={16}
            style={{ paddingTop: 9 }}
            color={argonTheme.COLORS.TEXT}
          >
            We use information from the CDC, top scientists, and our own research to decide a 
            risk rating for each merchant near you. This risk rating is based on the general current traffic 
            inside the store or restaurant, the predicted and historic traffic, and the precautions that we have 
            seen the merchant display. This includes access to touchless communication and payments and a cleanliness trust score.
          </Text>
          <Text
            style={{ fontFamily: 'open-sans-regular' }}
            muted
            size={16}
            style={{ paddingTop: 9 }}
            color={argonTheme.COLORS.TEXT}
          >
            How do we know the traffic at the store? We can see how many Visa transactions are currently taking place 
            at a given store or restaurant. We track this data to see how long a predicted line or wait time will be for 
            customers to be served. We also can determine predictions for future traffic at each store or restaurant based 
            on the historic traffic behaviors. We want to use our resources, such as the ability to determind traffic in a store, 
            to help you make the most informed decisions when you leave your home.
          </Text>
          <Text
            style={{ fontFamily: 'open-sans-regular' }}
            muted
            size={16}
            style={{ paddingTop: 9 }}
            color={argonTheme.COLORS.TEXT}
          >
            We believe that we can get through this together. 
          </Text>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    padding: theme.SIZES.BASE
  }
});
