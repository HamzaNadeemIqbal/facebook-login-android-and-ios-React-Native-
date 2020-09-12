import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";

export default class App extends Component<{}> {
  state = { data: "" };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());
                console.log(data.accessToken);
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
        <TouchableOpacity
          onPress={() => {
            fetch(
              "https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=" +
                "EAAMqtTGyZAcsBADmbdCgyJGSQDqnSM8HT1Kz7WlPqhuxNPFMVBLvozJ73yBZBgBUvp5AcOg40r4tqZAPBacXjuu2vrwtQhAtXlrL0bXjJCNDIvnLv4AlpmgV27RgbBjTfog8LcOs72TZBXifhJ7ZCQJXa949cHtFQm3bQc4iu7WOiR4UxnFHSdWxcywmhbGbtUa4mZCSfZBJ5UUxqIeKZCFcauaGItympuILnv7v7ehkxsVjSRkdgsqp"
            )
              .then((response) => response.json())
              .then((json) => {
                // Some user object has been set up somewhere, build that user here
                // user.name = json.name;
                // user.id = json.id;
                // user.user_friends = json.friends;
                // user.email = json.email;
                // user.username = json.name;
                // user.loading = false;
                // user.loggedIn = true;
                // user.avatar = setAvatar(json.id);
                console.log(json);
              })
              .catch((data) => {
                console.log("ERROR GETTING DATA FROM FACEBOOK", data);
              });
          }}
        >
          <Text>adat</Text>
        </TouchableOpacity> */}

        <Text
          style={{
            backgroundColor: "blue",
            width: 150,
            borderRadius: 10,
            alignSelf: "center",
            color: "white",
            padding: 10,
          }}
          onPress={() => {
            LoginManager.logInWithPermissions(["public_profile"]).then(
              function (result) {
                if (result.isCancelled) {
                  console.log("Login cancelled");
                } else {
                  AccessToken.getCurrentAccessToken().then((data) => {
                    console.log(data.accessToken.toString());
                  });
                  console.log("Login success with permissions: " + result);
                }
              },
              function (error) {
                console.log("Login fail with error: " + error);
              }
            );
          }}
        >
          custom button fbsdk login
        </Text>
      </View>
    );
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert("Error fetching data: " + error.toString());
    } else {
      console.log(result);
    }
  };
}

// https://graph.facebook.com/v2.5/me?fields=id, name, first_name, last_name, birthday, email,picture,photos&access_token=EAAMqtTGyZAcsBALiyjjGEbNpN7ZCx4OPt1ADZAels7aL3Q2dqWPDM7pGSCAANEAaeH7QZB9ejZCcOrdLybQGaIaHn0xeuoTyHnPO4ZAafyLEVNxcDFIZAuqPdUboss7RybK6VBXYPJeMeXUBSqkYHwguCsOMDGQCiKJP43WHUKcQTpuAHvmS5XhZBr1iDfUBaBJ2Osbxzpi67T9bGZALZAYFh6w9zriFL3L6cSDllTZBDSjOZCXrhCbMRxco
