import React, {useState, useRef, useCallback} from "react";
import {View, StyleSheet, FlatList, Animated, Dimensions, Text} from "react-native";
import {data} from "../model/PillList";
import { useRoute } from "@react-navigation/native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const BOX_WIDTH = WINDOW_WIDTH * 0.5;
const SPACING = WINDOW_WIDTH * 0.02;
const SNAP_TO_WIDTH = BOX_WIDTH + SPACING;

// Individual Pillbox Item
function PillboxCarouselItem({item, selectedIndex}) {
    if (selectedIndex === item.id) {
        return (
            <View style={
                [styles.boxSelected, {
                    marginLeft: item.id === 0 ? (WINDOW_WIDTH-BOX_WIDTH) / 2: SPACING,
                    marginRight: item.id === 6 ? (WINDOW_WIDTH-BOX_WIDTH) / 2 - SPACING : 0,
                }]}
            >
                <Text style={styles.titleSelected}>{item.day}</Text>
            </View>
        )
    }

    return (
        <View style={
            [styles.box, {
                marginLeft: item.id === 0 ? (WINDOW_WIDTH-BOX_WIDTH) / 2: SPACING,
                marginRight: item.id === 6 ? (WINDOW_WIDTH-BOX_WIDTH) / 2 - SPACING : 0,
            }]
        }>
            <Text style={styles.title}>{item.day}</Text>
        </View>
    );
}


// Renders the Carousel of Individual Pillbox Items
export default function PillboxCarousel( {setIndex} ) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const pillboxRef = useRef(null);
    let [currentIndex, setCurrentIndex] = useState(0);

    const route = useRoute(); 

    const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
        if (changed && viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
            if (route.name == "Home"){
                setIndex(viewableItems[0].index);
            }
        }
    }, []);
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 95});

    // Returns FlatList containing all pillbox items and their contents
    return (
        <View style={styles.container}>
            <View style={styles.carouselView}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <PillboxCarouselItem item={item} isHighlighted={true} selectedIndex={currentIndex}/> }
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
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={viewConfig.current}
                    scrollEventThrottle={32}
                    ref={pillboxRef}
                    extraData={data}
                >
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselView:  {
        flex: 1,
    },
    box : {
        width: BOX_WIDTH,
        height : BOX_WIDTH * 4/5,
        backgroundColor: '#E7ECEF',
        overflow: "hidden",
        borderColor: '#274C77',
        borderRadius: 30,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    boxSelected : {
        width: BOX_WIDTH,
        height : BOX_WIDTH * 4/5,
        backgroundColor: '#274C77',
        overflow: "hidden",
        borderColor: '#274C77',
        borderRadius: 30,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: '400',
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center",
        color: 'black',
        paddingTop: 6,
    },
    titleSelected: {
        fontWeight: '400',
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center",
        color: 'white',
        paddingTop: 6,
    },
});
