import {Text} from 'react-native';
import React from 'react';
import ViewComponent from '../components/ViewComponent';
import {globalStyle} from '../globalStyles';

const Home = () => {
  return (
    <ViewComponent>
      <Text style={[globalStyle.textWhite]}>Home</Text>
    </ViewComponent>
  );
};

export default Home;
