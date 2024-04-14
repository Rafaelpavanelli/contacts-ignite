import { theme } from "../../../theme";
import { styled } from "./style";
import { ActivityIndicator } from "react-native";

export function Loading() {
  return <ActivityIndicator style={styled.loading} color={theme.colors.blue} />;
}
