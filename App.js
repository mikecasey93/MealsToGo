import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication-context";

const firebaseConfig = {
  apiKey: "AIzaSyAiFtfybVYoNx1ub5oial7DPNVG2CZrCy4",
  authDomain: "mealstogo-295a2.firebaseapp.com",
  projectId: "mealstogo-295a2",
  storageBucket: "mealstogo-295a2.appspot.com",
  messagingSenderId: "1029073765400",
  appId: "1:1029073765400:web:605e356dbe99a53b7def6d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
