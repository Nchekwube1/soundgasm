import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../colors';

export const {width, height} = Dimensions.get('window');

export const globalStyle = ScaledSheet.create({
  tabLabelStyle: {
    fontSize: '15@s',
    textTransform: 'capitalize',
    fontFamily: 'Rubik',
  },
  tabBarStyle: {
    backgroundColor: Colors.bottomTabBlack,
    height: '85@s',
    paddingVertical: '17@s',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
