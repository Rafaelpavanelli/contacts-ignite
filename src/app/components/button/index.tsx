import { TouchableOpacity,TouchableOpacityProps,Text } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title,...props}:Props){
    return(
        <TouchableOpacity style={style.container} activeOpacity={0.7} {...props}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}