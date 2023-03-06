import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
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
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>
                {/* Carosel peliculas populares*/}
                <View style={{ height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }} >En cine</Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => (
                            <MoviePoster
                                movie={item}
                                width={140}
                                height={200}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/* Carosel peliculas populares*/}
                <View style={{ height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }} >En cine</Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => (
                            <MoviePoster
                                movie={item}
                                width={140}
                                height={200}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
