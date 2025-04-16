// write/TraceLetterScreen.js
import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Skia, Canvas, Path, useTouchHandler } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');

const TraceLetterScreen = ({ letter }) => {
  const [paths, setPaths] = useState([]);
  const currentPathRef = useRef(null);

  const touchHandler = useTouchHandler({
    onStart: ({ x, y }) => {
      const newPath = Skia.Path.Make();
      newPath.moveTo(x, y);
      currentPathRef.current = newPath;
    },
    onActive: ({ x, y }) => {
      currentPathRef.current?.lineTo(x, y);
    },
    onEnd: () => {
      if (currentPathRef.current) {
        setPaths((prev) => [...prev, currentPathRef.current]);
        currentPathRef.current = null;
      }
    },
  });

  const imageMap = {
    alif: require('../../assets/tracing/alif_outline.png'),
    ba: require('../../assets/tracing/ba_outline.png'),
    // ... add more letters here
  };

  const imageSource = imageMap[letter];

  return (
    <View style={styles.container}>
      {imageSource && (
        <Image
          source={imageSource}
          style={styles.background}
          resizeMode="contain"
        />
      )}
      <Canvas style={styles.canvas} onTouch={touchHandler}>
        {paths.map((p, i) => (
          <Path key={i} path={p} color="blue" style="stroke" strokeWidth={6} />
        ))}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    position: 'absolute',
    width: width,
    height: height,
    opacity: 0.2,
  },
  canvas: {
    flex: 1,
  },
});

export default TraceLetterScreen;
