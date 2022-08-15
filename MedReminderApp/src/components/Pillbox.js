import React from "react";
import "./Pillbox.css";

export const CarouselItem = ({children, width}) => {
    return (
        <div className="carouselItem" style={{ width: width}}>
            {children}
        </div>
    );
};

const CarouselController = ({ childern }) => {
    return (
        <div className="carousel">
            <div className="moveable" style={{ transform: "translateX(-0%)" }}>
                { React.Children.map(childern, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
        </div>
    );
};

export default CarouselController;