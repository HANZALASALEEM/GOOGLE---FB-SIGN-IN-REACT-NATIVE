import React from "react";
import { Button } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "./firebaseConfig";

const GoogleSignIn = () => {
	const signInWithGoogle = async () => {
		try {
			const result = await Google.logInAsync({
				androidClientId:
					"714691076071-7tuk3pn74c7qcs7mgu6c7njmume0uo1g.apps.googleusercontent.com",

				scopes: ["profile", "email"],
			});

			if (result.type === "success") {
				const { idToken, accessToken } = result;
				const credential = firebase.auth.GoogleAuthProvider.credential(
					idToken,
					accessToken
				);
				await firebase.auth().signInWithCredential(credential);
			} else {
				console.log("Google sign-in canceled.");
			}
		} catch (error) {
			console.error("Error signing in with Google:", error);
		}
	};

	return <Button title="Sign In with Google" onPress={signInWithGoogle} />;
};

export default GoogleSignIn;
