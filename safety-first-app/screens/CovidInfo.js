import React from "react";
import {
  View,
  Dimensions,
  Text
} from "react-native";
import ApiContainer from "../api/CovidByCounty/ApiContainer";

class CovidInfo extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        
        <ApiContainer/>

      </View>
    )
  };

  /*
  Consider adding link to Visa's Covid response.
  https://usa.visa.com/visa-everywhere/blog/bdp/2020/05/05/covid-19-response-update-1588713283813.html

  Example code for a link:

  <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => title == 'Getting Started' ? Linking.openURL('https://demos.creative-tim.com/argon-pro-react-native/docs/').catch((err) => console.error('An error occurred', err)) : navigation.navigate(title)}
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{ fontFamily: "open-sans-regular" }}
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
  */

}

export default CovidInfo;
