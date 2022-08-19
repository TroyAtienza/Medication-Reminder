import React, {useState, useRef} from "react";
import {View, StyleSheet, FlatList, Animated, Dimensions, Text} from "react-native";

import data from "../CarouselData";

const WINDOW_WIDTH = Dimensions.get("window").width;
const BOX_WIDTH = WINDOW_WIDTH * 0.6;
const SPACING = WINDOW_WIDTH * 0.02;
const SNAP_TO_WIDTH = BOX_WIDTH + SPACING;


// Individual Pillbox Item
function PillboxCarouselItem({item}) {
    return (
        <View style={
            [styles.box, {
                marginLeft: item.id === 1 ? (WINDOW_WIDTH-BOX_WIDTH) / 2: SPACING,
                marginRight: item.id === 7 ? (WINDOW_WIDTH-BOX_WIDTH) / 2-SPACING : 0,
            }]
        }>
            {/*Unused code to use images if needed!*/}
            {/*<Image source={item.image} style={{width: '100%' , height:'100%', resizeMode:'contain'}}/>*/}
            <View style={styles.imageInfo}>
                <Text style={styles.title}>{item.day}</Text>
            </View>
        </View>
    );
}


// Renders the Carousel of Individual Pillbox Items
export default function PillboxCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const pillboxRef = useRef(null);

    // TODO currently throwing errors
    // const viewableItemsChanged = useRef(({viewableItems}) => {
    //     setCurrentIndex(viewableItems[0].index);
    // }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 95}).current;

    return (
        <View style={styles.container}>
            <View style={styles.carouselView}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <PillboxCarouselItem item={item}/> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    snapToInterval={SNAP_TO_WIDTH}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset : {x : scrollX}}}
                    ],
                        {useNativeDriver: false}
                    )}
                    // onViewableItemsChanged={viewableItemsChanged}
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
        justifyContent: 'center',
    },
    carouselView:  {
        flex: 1,
    },
    box : {
        backgroundColor: 'gray',
        width: BOX_WIDTH,
        overflow: "hidden",
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 4,
    },
    imageInfo: {
        flex: 0.3,
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center"
    },
});
