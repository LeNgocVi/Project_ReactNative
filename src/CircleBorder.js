import React from 'react';
import { View } from 'react-native';

const CircleBorder = ({
  size,
  borderWidth,
  backgroundColor,
  marginTop,
  children,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 0.5 * size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth,
        backgroundColor,
        marginTop,
      }}
      key={children}
    >
      {children}
    </View>
  );
};

export default CircleBorder;