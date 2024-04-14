import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    letter: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 6,
    },
    text:{
        fontFamily: theme.fontFamily.medium,

    }
})