import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Line } from 'react-native-svg';

const LinedComp  = ({text}) => {
  return (
    <View style={{ position: 'relative', height: 200 }}>
    <Svg height="100%" width="100%" style={{ position: 'absolute', zIndex: -1 }}>
      {Array(3).fill('').map((_, index) => (
        <Line
          key={index}
          x1="0"
          y1={`${(index + 1) * 50}`}
          x2="100%"
          y2={`${(index + 1) * 50}`}
          stroke="gray"
          strokeWidth="1"
        />
      ))}
    </Svg>
    {Array.isArray(text) && text.map((line, index) => (
        <Text key={index} style={{ fontSize: 50, lineHeight: 50 }}>
          {line}
        </Text>
    ))}
  </View>
  )
}

export default LinedComp