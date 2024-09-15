import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS } from "./theme";
import TouchableButton from "./components/TouchableButton";
import { useState } from "react";

export default function App() {
  // Manage individual mute states using an object with item IDs as keys
  const [muteStates, setMuteStates] = useState({});

  const dummyData = [
    {
      id: 1,
      userName: "Alex Cooper",
      message: "Hello! My name is Alex, what's your name?",
      imageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 2,
      userName: "John Doe",
      message: "Hey there, how's it going?",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 3,
      userName: "Jane Smith",
      message: "Hello! My name is Jane, what's your name?",
      imageUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      id: 4,
      userName: "Jane Smith",
      message: "Nice to meet you!",
      imageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      id: 5,
      userName: "Jane Smith",
      message: "Hello! My name is Jane, what's your name?",
      imageUrl: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      id: 6,
      userName: "Jane Smith",
      message: "Nice to meet you!",
      imageUrl: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: 7,
      userName: "Jane Smith",
      message: "Nice to meet you!",
      imageUrl: "https://randomuser.me/api/portraits/women/27.jpg",
    },
  ];

  const toggleMute = (id) => {
    setMuteStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <StatusBar hidden={true} />
      <LinearGradient colors={["#29579b", "#29579b"]} style={styles.container}>
        <View style={styles.itemContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={[
                styles.iconContainer,
                {
                  height: 30,
                  width: 30,
                },
              ]}
            >
              <AntDesign size={10} name="left" color={COLORS?.white} />
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  height: 30,
                  width: 30,
                  padding: 3,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text
                style={{
                  color: COLORS?.darkBlue,
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
              >
                A
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={dummyData}
            style={{ padding: 10, flex: 1 }}
            renderItem={({ item }) => {
              const isMuted = muteStates[item.id]; // Get mute state for this item
              return (
                <View style={{ marginVertical: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: item.imageUrl }}
                    />
                    <Text style={styles.userNameText}>{item.userName}</Text>
                  </View>
                  <View style={styles.messageContainer}>
                    <View style={{ width: "80%" }}>
                      <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleMute(item.id)}>
                      <Ionicons
                        size={20}
                        name={isMuted ? "volume-mute" : "volume-high"}
                        color={COLORS?.white}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
          <LinearGradient
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.2)"]}
            style={styles.bottomGradient}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.bottomTextBold}>...Joe</Text>
            <Text style={styles.bottomText}>is Speaking</Text>
          </View>
          <View style={styles.controlButtons}>
            <TouchableButton
              BtnIcon={
                <FontAwesome
                  size={25}
                  name="microphone-slash"
                  color={COLORS?.darkBlue}
                />
              }
            />
            <TouchableButton
              extraStyle={{ backgroundColor: COLORS?.red }}
              BtnIcon={
                <MaterialIcons
                  size={25}
                  name="call-end"
                  color={COLORS?.white}
                />
              }
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: { flex: 0.1, padding: 10 },
  iconContainer: {
    padding: 10,
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: COLORS?.white,
    height: 30,
    width: 30,
  },
  iconText: {
    color: COLORS?.darkBlue,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: { height: 30, width: 30, borderRadius: 30 },
  userNameText: {
    color: COLORS?.white,
    fontWeight: "400",
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: 10,
    // width: "80%",
  },
  messageText: {
    color: COLORS?.white,
    fontWeight: "700",
    fontSize: 24,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  bottomContainer: {
    flex: 0.4,
    backgroundColor: "#29579b",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTextBold: {
    color: COLORS?.white,
    fontWeight: "700",
    fontSize: 13,
  },
  bottomText: {
    color: COLORS?.white,
    fontWeight: "300",
    fontSize: 13,
  },
  controlButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 15,
  },
});
