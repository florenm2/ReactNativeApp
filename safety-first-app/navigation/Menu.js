import React from "react";
import { ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from "react-native";
import { Block, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components/index'

function CustomDrawerContent({ drawerPosition, navigation, focused, state, ...rest }) {
  const insets = useSafeArea();
  const screens = [
    "Home", 
    "Covid-19 Info",
    "Settings"
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      {/* <Block flex={0.06} style={styles.header}>  */}
      <Block flex={0.06} style={{paddingLeft:4, paddingTop: 50, paddingBottom:50}}>
        <Image styles={styles.logo} source={Images.Logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  focused={state.index === index ? true : false}
                />
              );
            })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center"
  }
});

export default CustomDrawerContent;
