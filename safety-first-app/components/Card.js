import React from "react";
import { withNavigation } from '@react-navigation/compat';
import PropTypes from "prop-types";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { argonTheme } from "../constants";

class Card extends React.Component {
 
//   constructor(props) {
//       super(props);
//       this.state = {
//         safetyRating: ''
//           // covidCountyData: null
//       };
//   }

// componentDidMount() {
//     this.setState({
//       safetyRating: 19

//     })


//   }


  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight
    } = this.props;




    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

   

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Product", { product: item })}
        >
          <Block flex style={imgContainer}>
            <Image source={{ uri: item.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Product", { product: item })}
        >
          <Block flex space="between" style={styles.cardDescription}>
            <Block>
              <Text  size={18} style={{ paddingBottom: 10, fontFamily: 'open-sans-regular' }} color={argonTheme.COLORS.TEXT}>
                {item.name}
              </Text>
              <Block row space="between">
                
                <Block row>
                  <Block style={{ marginTop: 2 }}>
                  <Text style={{ fontFamily: 'open-sans-light' }} size={14} color={argonTheme.COLORS.TEXT} style={{ fontWeight: '100' }}>
                      Current Wait Time: 
                    </Text>
                     <Text style={{ fontFamily: 'open-sans-regular' }} size={14} color={argonTheme.COLORS.TEXT}>{item.waitTime.current} min</Text>
                    
                  </Block>
                </Block>
                {/* <Text style={{ fontFamily: 'open-sans-bold' }} size={18} color={argonTheme.COLORS.TEXT}>
                  {item.open ? 'Open' : 'Closed'}
                  {this.state.safetyRating}
                </Text> */}
              </Block>
            </Block>

            <Block right={ctaRight ? true : false}>
              <Text
                style={{ fontFamily: 'open-sans-bold' }}
                size={12}
                muted={!ctaColor}
                color={ctaColor || argonTheme.COLORS.ACTIVE}
                bold
              >
                {item.cta}
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
  ctaRight: PropTypes.bool
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 4,
  },
  cardTitle: {
    // flex: 1,
    // flexWrap: "wrap",
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.INPUT_BORDER_RADIUS
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: "hidden"
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: "auto"
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: "#8898AA",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2
  }
});

export default withNavigation(Card);
