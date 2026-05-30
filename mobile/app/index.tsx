import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
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
      </View>
    );
  }

  return isSignedIn ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(auth)" />
  );
}