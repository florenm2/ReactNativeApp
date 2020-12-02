import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { theme } from "galio-framework";

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:18,
        textAlign:'center',
        paddingTop:32
    },
    container: {
        backgroundColor: theme.COLORS.WHITE
    },
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.COLORS.WHITE
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: theme.COLORS.WHITE
    },
    waitTimesLabelText: {
        textAlign: 'left',
        fontFamily: 'open-sans-light',
        paddingLeft: 0
      },
      waitTimesText: {
        textAlign: 'right',
        fontFamily: 'open-sans-regular'
      },
      waitTimesFirstBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingTop: theme.SIZES.INPUT_TEXT
      },
      waitTimesBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingTop: 2
      },
      waitTimesLastBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingBottom: theme.SIZES.INPUT_TEXT,
      },
      title: {
          flex: 1
      },
      list: {
        flex:2,
        position: "relative",
        marginHorizontal: theme.SIZES.BASE,
        marginTop: -theme.SIZES.BASE * 2,
        marginBottom: 0,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2
      }
};
export default styles;