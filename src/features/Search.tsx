import {Text} from 'react-native';
import React from 'react';
import ViewComponent from '../components/ViewComponent';
import {globalStyle} from '../globalStyles';

const Search = () => {
  return (
    <ViewComponent>
      <Text style={[globalStyle.textWhite]}>Search</Text>
    </ViewComponent>
  );
};

export default Search;
