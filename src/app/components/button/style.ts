import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        width: '100%',
        height: 52,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.blue
    },
    title:{
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fontFamily.medium
    }
})