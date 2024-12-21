// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {fonts} from './fonts';

export const theme = {
    colors: {
      primary: '#FF6600',
      secondary: '#492209',
      light: '#FFFFFF',
      dark: '#000000',
    },
    spacing: {
      extraSmall: 4,
      small: 8,
      medium: 16,
      large: 24,
      extraLarge: 32,
    },
    borderRadius: {
      small: 4,
      medium: 8,
      large: 16,
      extraLarge: 24,
      full: 9999,
    },
    fonts: {...fonts},
  };

// Fore responsiveness
// spacing: {
//   extraSmall: wp('1%'),
//   small: wp('2%'),
//   medium: wp('4%'),
//   large: wp('6%'),
//   extraLarge: wp('8%'),
// },
// borderRadius: {
//   small: wp('1%'),
//   medium: wp('2%'),
//   large: wp('3%'),
//   extraLarge: wp('4%'),
//   full: 9999,
// },
  