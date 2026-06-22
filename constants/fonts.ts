import type { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  type TextStyle,
} from "react-native";

export const ROBOTO = {
  regular: "Roboto_400Regular",
  medium: "Roboto_500Medium",
  bold: "Roboto_700Bold",
} as const;

const FONT_WEIGHT_MAP: Record<string, string> = {
  "100": ROBOTO.regular,
  "200": ROBOTO.regular,
  "300": ROBOTO.regular,
  "400": ROBOTO.regular,
  normal: ROBOTO.regular,
  "500": ROBOTO.medium,
  "600": ROBOTO.medium,
  "700": ROBOTO.bold,
  bold: ROBOTO.bold,
  "800": ROBOTO.bold,
  "900": ROBOTO.bold,
};

export function getRobotoFamily(fontWeight?: TextStyle["fontWeight"]): string {
  if (fontWeight == null) return ROBOTO.regular;
  return FONT_WEIGHT_MAP[String(fontWeight)] ?? ROBOTO.regular;
}

export function resolveRobotoStyle(
  style: TextStyle | TextStyle[] | undefined,
): TextStyle {
  const flat = StyleSheet.flatten(style) ?? {};

  if (flat.fontFamily) {
    return {};
  }

  return {
    fontFamily: getRobotoFamily(flat.fontWeight),
    fontWeight: "normal",
  };
}

type PatchedComponent = {
  render?: (props: Record<string, unknown>, ref: unknown) => ReactNode;
};

export function setupDefaultFonts() {
  const defaultFontStyle: TextStyle = { fontFamily: ROBOTO.regular };

  const patchComponent = (Component: PatchedComponent) => {
    const originalRender = Component.render;
    if (!originalRender) return;

    Component.render = function render(props, ref) {
      const { style, ...rest } = props;
      return originalRender.call(this, {
        ...rest,
        style: [defaultFontStyle, resolveRobotoStyle(style as TextStyle), style],
      }, ref);
    };
  };

  patchComponent(Text as PatchedComponent);
  patchComponent(TextInput as PatchedComponent);
}
