import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();


    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <ActivityIndicator
                    color='red'
                    size={100}
                />
            </View>
        )
    }

    return (
        <ScrollView>

            <View style={{ marginTop: top + 20 }}>
                {/* Carosel principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                {/* Carosel peliculas populares*/}
                <HorizontalSlider title='Popular' movies={ popular } />
                <HorizontalSlider title='Top Rated' movies={ topRated } />
                <HorizontalSlider title='Uncoming' movies={ upcoming } />
            </View>
        </ScrollView>
    )
}
