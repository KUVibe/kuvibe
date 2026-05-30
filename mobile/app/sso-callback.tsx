import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(tabs)");
    }, 300);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D0D0F",
      }}
    >
      <ActivityIndicator size="large" color="#F4A261" />

      <Text
        style={{
          color: "#fff",
          marginTop: 14,
          fontSize: 16,
        }}
      >
        Signing in...
      </Text>
    </View>
  );
}