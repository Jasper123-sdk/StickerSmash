import { cssInterop } from "nativewind";
import { Image, TouchableOpacity } from "react-native";

cssInterop(Image, { className: "style" });
cssInterop(TouchableOpacity, { className: "style" });
