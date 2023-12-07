import { Animated, Easing } from "react-native";

// Custom transition for fade effect
const fadeTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 300, easing: Easing.out(Easing.poly(4)) },
    },
    close: {
      animation: 'timing',
      config: { duration: 300, easing: Easing.in(Easing.poly(4)) },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return { cardStyle: { opacity } };
  },
};


export default fadeTransition;