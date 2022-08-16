import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";

import data from "../CarouselData";
import PillboxCarouselItem from "./PillboxCarouselItem";


export default function PillboxCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const horizontalScroll = useRef(new Animated.Value(0)).current;
    const pillboxRef = useRef(null);

    const viewableItemsChanged = useRef( ({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef( {viewAreaCoveragePercentThreshold: 50}).current

    return (
        <View style={styles.container}>
            <View style={styles.carouselView}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <PillboxCarouselItem item={item}/> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled={true}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset : {x : horizontalScroll}}}
                    ],
                        {useNativeDriver: false,}
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={pillboxRef}
                >
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 0.3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    carouselView:  {
        flex: 3,
    },
});
