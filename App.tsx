import { Home } from "@/app/home";
import {GestureHandlerRootView} from 'react-native-gesture-handler' 
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";

import { Loading } from "@/app/components/loading";

import { StatusBar } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular,
  });
  if (!fontLoaded) {
    return <Loading />;
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Home />
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
    </GestureHandlerRootView>
  );
}
