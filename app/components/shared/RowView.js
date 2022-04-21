import React from 'react';
import {View} from 'react-native';

const RowView = ({children, style}) => {
  return <View style={[{flexDirection: 'row'}, style]}>{children}</View>;
};

export default RowView;
