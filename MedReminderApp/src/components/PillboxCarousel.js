import React, {useState, useRef} from "react";
import {View, StyleSheet, FlatList, Animated, Dimensions, Text} from "react-native";

import data from "./CarouselData";

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
                marginRight: item.id === 7 ? (WINDOW_WIDTH-BOX_WIDTH) / 2 - SPACING : 0,
            }]
        }>
            {/* TODO Unused code to use images if needed!*/}
            {/*<Image source={item.image} style={{width: '100%' , height:'100%', resizeMode:'contain'}}/>*/}
            <View style={styles.pillsWrapper}>
                <Text style={styles.title}>{item.day}</Text>
                <View style={styles.pillView}>
                    {/*TODO need way to store unique pill Components (separate JS file) data for each pillbox */}
                    <View style={styles.pillItem}>
                        <View style={styles.singlePill}></View>
                        <Text style={styles.pillCount}>2x</Text>
                    </View>
                    <View style={styles.singlePill}></View>
                    <View style={styles.pillItem}>
                        <View style={styles.singlePill}></View>
                        <Text style={styles.pillCount}>3x</Text>
                    </View>
                    <View style={styles.singlePill}></View>
                    <View style={styles.singlePill}></View>
                    <View style={styles.singlePill}></View>
                </View>
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
        flex: 0.35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselView:  {
        flex: 1,
    },
    box : {
        width: BOX_WIDTH,
        backgroundColor: '#8DB2CE',
        overflow: "hidden",
        borderColor: '#6295BC',
        borderRadius: 10,
        borderWidth: 3,
        elevation: 5, //needs Android 5.0+
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
        color: '#43769D',
        paddingTop: 6,
    },
    pillsWrapper: {
        flexDirection: "column",
        alignItems: "center",
    },
    pillView: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    pillItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    singlePill: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 5,
        width: 30,
        height: 60,
        backgroundColor: "white"
    },
    pillCount: {
        fontWeight: "600",
        fontSize: 16,
        textAlign: "left",
        color: '#343432',
    }
});
