import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { theme } from "galio-framework";
import colors from '../../constants/colors';

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:20,
        textAlign:'center',
        paddingTop:32,
        color: colors.visaTheme.blue
    },
    container: {
        backgroundColor: theme.COLORS.WHITE
    },
    loader: {
        justifyContent: "center",
        alignItems: "center"
    },
    // list: {
    //     paddingVertical: 4,
    //     margin: 5,
    //     backgroundColor: theme.COLORS.WHITE
    // },
    waitTimesLabelText: {
        textAlign: 'left',
        fontFamily: 'open-sans-light',
        paddingLeft: 0,
        color: colors.visaTheme.blue
      },
      waitTimesText: {
        textAlign: 'right',
        fontFamily: 'open-sans-regular',
        color: colors.visaTheme.blue
      },
      waitTimesFirstBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingTop: theme.SIZES.INPUT_TEXT,
        color: colors.visaTheme.blue
      },
      waitTimesBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingTop: 2,
        color: colors.visaTheme.blue
      },
      waitTimesLastBlock: {
        paddingLeft: theme.SIZES.INPUT_LABEL_TEXT,
        paddingBottom: theme.SIZES.INPUT_TEXT,
        color: colors.visaTheme.blue
      },
      list: {
        position: "relative",
        marginHorizontal: theme.SIZES.BASE,
        marginTop: -theme.SIZES.BASE * 2,
        marginBottom: 0,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        backgroundColor: theme.COLORS.WHITE,

      },
      shadow: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2
      },
      card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 114,
        marginBottom: 4,
        paddingBottom: 25,
        fontFamily: 'open-sans-regular'
      },
};
export default styles;