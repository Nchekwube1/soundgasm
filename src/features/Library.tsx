import {Text} from 'react-native';
import React from 'react';
import ViewComponent from '../components/ViewComponent';
import {globalStyle} from '../globalStyles';

const Library = () => {
  return (
    <ViewComponent>
      <Text style={[globalStyle.textWhite]}>Library</Text>
    </ViewComponent>
  );
};

export default Library;
