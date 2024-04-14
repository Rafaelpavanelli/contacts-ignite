import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        borderRadius: 7,
        gap: 12,
        alignItems: 'center'
    },
    name:{
        color: theme.colors.black,
        fontFamily: theme.fontFamily.medium,
        fontSize: 18
    }
})