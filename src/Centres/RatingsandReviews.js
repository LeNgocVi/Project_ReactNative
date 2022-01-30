import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function RatingsandReviews() {
  const [KindiCareRating, setKindiCareRating] = useState(true);
  const [UserReview, setUserReview] = useState(true);
  const [NQSRating, setNQSRating] = useState(true);

  const expandKindiCareRating = () => {
    if (KindiCareRating) {
      setKindiCareRating(false);
    } else {
      setKindiCareRating(true);
    }
  };

  const expandUserReview = () => {
    if (UserReview) {
      setUserReview(false);
    } else {
      setUserReview(true);
    }
  };

  const expandNQSRating = () => {
    if (NQSRating) {
      setNQSRating(false);
    } else {
      setNQSRating(true);
    }
  };
  return (
    <ScrollView>
      {KindiCareRating ? (
        <TouchableOpacity onPress={() => expandKindiCareRating()}>
          <View style={styled.container}>
            <Image
              style={{ width: 40, height: 50 }}
              source={require("../../assets/KindiCareLogo.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 30,
                width: 150,
              }}
            >
              KindiCare Rating
            </Text>
            <View style={{ position: "absolute" }}>
              <Text
                style={{
                  position: "absolute",
                  fontSize: 12,
                  marginLeft: 0,
                  paddingTop: 40,
                  paddingLeft: 103,
                }}
              >
                Very Good
              </Text>
              <Image
                style={{ width: 11, height: 6, marginTop: 24, marginLeft: 310 }}
                source={require("../../assets/Arrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={expandKindiCareRating}>
          <View style={styled.container2}>
            <Image
              style={{ width: 40, height: 50 }}
              source={require("../../assets/KindiCareLogo.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 30,
                width: 150,
              }}
            >
              KindiCare Rating
            </Text>
            <View style={{ position: "absolute" }}>
              <Image
                style={{
                  width: 11,
                  height: 6,
                  marginTop: 30,
                  marginLeft: 310,
                  transform: [{ rotate: "180deg" }],
                }}
                source={require("../../assets/Arrow.png")}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  marginTop: 80,
                  position: "absolute",
                  width: 303,
                  borderBottomColor: "#F2F2F2",
                  borderBottomWidth: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 303,
                  marginTop: 100,
                  marginLeft: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    postion: "absolute",
                    backgroundColor: "#DB147F",
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                  >
                    10.00
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 15,
                      marginBottom: 24,
                    }}
                  >
                    Very Good
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    The KindiCare Rating for this service of 8.4 is lower than
                    the average KindiCare Rating for the area of 8.6, and
                    represents the good quality of service provided
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {UserReview ? (
        <TouchableOpacity onPress={() => expandUserReview()}>
          <View style={styled.container}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/Star.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 40,
                width: 150,
              }}
            >
              User Review
            </Text>
            <View style={{ position: "absolute" }}>
              <Text
                style={{
                  position: "absolute",
                  fontSize: 12,
                  marginLeft: 0,
                  paddingTop: 40,
                  paddingLeft: 103,
                }}
              >
                Very Good
              </Text>
              <Image
                style={{ width: 11, height: 6, marginTop: 24, marginLeft: 310 }}
                source={require("../../assets/Arrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={expandUserReview}>
          <View style={styled.userReviewContainer}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 16,
                width: 150,
              }}
            >
              User Review
            </Text>
            <View style={{ position: "absolute" }}>
              <Image
                style={{
                  width: 11,
                  height: 6,
                  marginTop: 24,
                  marginLeft: 310,
                  transform: [{ rotate: "180deg" }],
                }}
                source={require("../../assets/Arrow.png")}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  marginTop: 50,
                  position: "absolute",
                  width: 303,
                  borderBottomColor: "#F2F2F2",
                  borderBottomWidth: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 303,
                  marginTop: 50,
                  marginLeft: 25,
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 400 / 2,
                    borderWidth: 1,
                    borderColor: "black",
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 15,
                      marginBottom: 24,
                    }}
                  >
                    Very Good
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    The KindiCare Rating for this service of 8.4 is lower than
                    the average KindiCare Rating for the area of 8.6, and
                    represents the good quality of service provided
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {NQSRating ? (
        <TouchableOpacity onPress={() => expandNQSRating()}>
          <View style={styled.container}>
            <Image
              style={{ width: 40, height: 50 }}
              source={require("../../assets/KindiCareLogo.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 30,
                width: 150,
              }}
            >
              KindiCare Rating
            </Text>
            <View style={{ position: "absolute" }}>
              <Text
                style={{
                  position: "absolute",
                  fontSize: 12,
                  marginLeft: 0,
                  paddingTop: 40,
                  paddingLeft: 103,
                }}
              >
                Very Good
              </Text>
              <Image
                style={{ width: 11, height: 6, marginTop: 24, marginLeft: 310 }}
                source={require("../../assets/Arrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={expandNQSRating}>
          <View style={styled.container2}>
            <Image
              style={{ width: 40, height: 50 }}
              source={require("../../assets/KindiCareLogo.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 30,
                width: 150,
              }}
            >
              KindiCare Rating
            </Text>
            <View style={{ position: "absolute" }}>
              <Image
                style={{
                  width: 11,
                  height: 6,
                  marginTop: 24,
                  marginLeft: 310,
                  transform: [{ rotate: "180deg" }],
                }}
                source={require("../../assets/Arrow.png")}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  marginTop: 80,
                  position: "absolute",
                  width: 303,
                  borderBottomColor: "#F2F2F2",
                  borderBottomWidth: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 303,
                  marginTop: 100,
                  marginLeft: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    postion: "absolute",
                    backgroundColor: "#DB147F",
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                  >
                    10.00
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 15,
                      marginBottom: 24,
                    }}
                  >
                    Very Good
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    The KindiCare Rating for this service of 8.4 is lower than
                    the average KindiCare Rating for the area of 8.6, and
                    represents the good quality of service provided
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styled = StyleSheet.create({
  container: {
    height: 70,
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 12,
    paddingLeft: 33,
    paddingRight: 33,
    flexDirection: "row",
  },
  userReviewContainer: {
    height: 250,
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 12,
    paddingRight: 33,
    flexDirection: "row",
  },
  container2: {
    height: 320,
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 12,
    paddingLeft: 33,
    paddingRight: 33,
    flexDirection: "row",
  },
});
