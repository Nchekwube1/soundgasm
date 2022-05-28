import {View} from 'react-native';
import React from 'react';
import {ViewComponentProps} from '../constants/types';
import {globalStyle} from '../globalStyles';

const ViewComponent = (props: ViewComponentProps) => {
  const {children} = props;
  return <View style={globalStyle.mainContainer}>{children}</View>;
};

export default ViewComponent;
