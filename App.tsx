import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvide } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';


const AppState = ({ children }: any) => {
	return (
		<GradientProvide>
			{children}
		</GradientProvide>
	)
}

export const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<Navigation />
				{/* <FadeScreen/> */}
			</AppState>
		</NavigationContainer>
	)
}
