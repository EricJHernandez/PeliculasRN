import React, { useRef } from 'react';
import { Animated, View, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1C1C1C',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View style={{
                backgroundColor: '#B31557',
                width: 150,
                height: 150,
                borderColor: '#0e6187',
                borderWidth: 10,
                opacity: opacity
            }} />
            <Button
                title="Fade In"
                onPress={fadeIn}
            />
            <Button
                title="Fade Out"
                onPress={fadeOut}
            />
        </View>
    )
}
