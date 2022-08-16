import React from "react";
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";

export default function PillboxCarouselItem({item}) {
    const {width} = useWindowDimensions();
    return (
        <View style = {[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            <View style={styles.imageInfo}>
                <Text style={styles.title}>{item.day}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    imageInfo: {
        flex: 0.3,
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center"
    }
});