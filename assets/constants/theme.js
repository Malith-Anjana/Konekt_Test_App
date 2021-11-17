import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('screen');

export const SIZES ={
    base:10,
    width,
    height
}
export const COLORS = {
    blue:"#2196F3",
    white:"#FFF",
    black:"#212121",
    lightblue:"E3F2FD",
    grey:"rgba(196, 196, 196, 0.2)"
}
const theme = {SIZES,COLORS};

export default theme;