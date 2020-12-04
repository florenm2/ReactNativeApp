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
        fontSize:18,
        fontWeight: '700',
        textAlign:'center',
        paddingTop:32,
        color: '#214484',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkStyle:{
      fontSize:14,
      fontWeight: '700',
      textAlign:'center',
      paddingTop:2,
      color: '#214484',
      justifyContent: 'center',
      alignItems: 'center',
      textDecorationLine: 'underline',
    },
    linkTextStyle:{
      paddingLeft:3,
      fontSize:14,
      fontWeight: '700',
      textAlign:'center',
      paddingTop:10,
      color: '#214484',
      justifyContent: 'center',
      alignItems: 'center',
      textDecorationLine: 'underline',
      marginBottom: 15,
    },
    titleContainer: {
      width: '80%',
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    container: {
        // backgroundColor: '#97AECC'
        flex: 1,
        backgroundColor: '#cbe3ff', 
        justifyContent: 'center',
        alignItems: 'center'
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
        fontFamily: 'open-sans-regular',
        paddingLeft: 0,
        color: colors.visaTheme.blue
      },
      waitTimesText: {
        textAlign: 'right',
        fontFamily: 'open-sans-bold',
        color: colors.visaTheme.blue
      },
      waitTimesFirstBlock: {
        paddingHorizontal: theme.SIZES.INPUT_LABEL_TEXT,
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
        // backgroundColor: '#DDE4EE',
        marginVertical: theme.SIZES.BASE * 2,
        borderWidth: 0,
        // minHeight: 114,
        marginBottom: 4,
        paddingBottom: 25,
        fontFamily: 'open-sans-regular',
        borderRadius: 8,
        overflow: 'hidden',
        opacity:'0.80'
      },
      cardContainer: {
        paddingHorizontal: theme.SIZES.BASE * 2, 
        paddingBottom: 0,
        paddingTop: theme.SIZES.BASE
      },
      dateStyle:{
        fontSize:14,
        fontWeight: '700',
        paddingTop:5,
        color: '#214484'
    },
};
export default styles;