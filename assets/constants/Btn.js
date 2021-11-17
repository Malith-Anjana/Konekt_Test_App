import { StyleSheet } from "react-native";

const Btn = StyleSheet.create({
    btnLarge:{
        height:48,
        borderRadius:24,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    textLarge:{
        fontSize:16,
        fontStyle:"normal",
        fontFamily:"Poppins-Regular",
        lineHeight:24,   
    },


    btnMedium:{
        height:40,
        borderRadius:24,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    textMedium:{
        fontSize:14,
        fontStyle:"normal",
        fontWeight:"800",
        lineHeight:24,
        fontFamily:"Poppins-Regular",
        color: "#FFFFFF",        
    },


    btnSm:{
        height:32,
        borderRadius:24,
        paddingHorizontal:6,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    textSmall:{
        fontSize:12,
        fontStyle:"normal",
        fontWeight:"600",
        fontFamily:"Poppins-Regular",
        lineHeight:24,
        
    }
})

 export default Btn;