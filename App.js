import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import ReportScreen from './src/screens/ReportScreen';

export default function App() {
  const [currentScreen, setScreen] = useState('home');

  return (
    <>
      <StatusBar style="light" />
      {currentScreen === 'home' ? (
        <HomeScreen setScreen={setScreen} />
      ) : (
        <ReportScreen setScreen={setScreen} />
      )}
    </>
  );
}
