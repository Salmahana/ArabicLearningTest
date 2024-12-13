// app/[letter]/index.js
import { Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import Alif from '../letterScreens/Alif';
import Ba from '../letterScreens/Ba';
import Ta from '../letterScreens/Ta';
import Tha from '../letterScreens/Tha';
import Jim from '../letterScreens/Jim';
import Ha from '../letterScreens/Ha';
import Kha from '../letterScreens/Kha';
import Dal from '../letterScreens/Dal';
import Thdal from '../letterScreens/Thdal';
import Ra from '../letterScreens/Ra';
import Zay from '../letterScreens/Zay';
import Sin from '../letterScreens/Sin';
import Shin from '../letterScreens/Shin';
import Sad from '../letterScreens/Sad';
import Dad from '../letterScreens/Dad';
import Tta from '../letterScreens/Tta';
import Thdae from '../letterScreens/thdae';
import Ain from '../letterScreens/Ain';
import Ghain from '../letterScreens/Ghain';
import Fa from '../letterScreens/Fa';
import Qaf from '../letterScreens/Qaf';
import Kaf from '../letterScreens/Kaf';
import Lam from '../letterScreens/Lam';
import Mim from '../letterScreens/Mim';
import Nun from '../letterScreens/Nun';
import Hha from '../letterScreens/Hha';
import Waw from '../letterScreens/Waw';
import Ya from '../letterScreens/Ya';
// Import other letter screens...

const LetterRoute = () => {
  const { letter } =  useLocalSearchParams();
  console.log(letter); // Check the exact letter being passed

  const screens = {
    "أ" : <Alif />,
    'ب': <Ba />,
    'ت': <Ta/>,
    'ث': <Tha/>,
    'ج': <Jim />,
    'ح': <Ha/>,
    'خ':<Kha/>,
    'د': <Dal/>,
    'ذ': <Thdal/>,
    'ر': <Ra/>,
    "ز": <Zay/>,
    'س': <Sin/>,
    'ش':<Shin/>,
    'ص':<Sad/>,
    'ض':<Dad/>,
    'ط': <Tta/>,
    'ظ' : <Thdae/>,
    'ع': <Ain/>,
    'غ': <Ghain/>,
    'ف': <Fa/>,
    'ق': <Qaf/>,
    'كـ':<Kaf/>,
    'ل':<Lam/>,
    'م':<Mim/>,
    'ن':<Nun/>,
    'هـ':<Hha/>,
    'و':<Waw/>,
    'ي':<Ya/>,
  };

  // Default fallback if the letter is not recognized
  if (!screens[letter]) {
    return <Text>Invalid letter</Text>;
  }

  return screens[letter];

};

export default LetterRoute;
