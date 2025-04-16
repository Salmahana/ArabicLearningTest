import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Skia, Canvas, Path, TouchType, Circle } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');

export default function SkiaTest() {
  const [paths, setPaths] = useState([]);
  const currentPath = useRef(null);

  const handleTouch = (touches) => {
    alert('TOUCHED CANVAS'); // 👈 TEMPORARY CHECK
  
    if (!touches || touches.length === 0) return;
    const { x, y, type } = touches[0];
  
    if (type === TouchType.Start) {
      const path = Skia.Path.Make();
      path.moveTo(x, y);
      currentPathRef.current = path;
    } else if (type === TouchType.Active) {
      currentPathRef.current?.lineTo(x, y);
    } else if (type === TouchType.End) {
      if (currentPathRef.current) {
        setPaths((prev) => [...prev, currentPathRef.current]);
        currentPathRef.current = null;
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas} onTouch={handleTouch}>
        <Circle cx={50} cy={50} r={25} color="red" />
        {paths.map((p, i) => (
          <Path key={i} path={p} color="blue" style="stroke" strokeWidth={4} />
        ))}
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    flex: 1,
  },
});
