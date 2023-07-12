import React from "react";
import { View, StyleSheet } from "react-native";
import firebase from "./firebaseConfig";
import GoogleSignIn from "./GoogleSignIn";

const App = () => {
	const signOut = async () => {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<View style={styles.container}>
			<GoogleSignIn />
			<FacebookSignIn />
			<Button title="Sign Out" onPress={signOut} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
});

export default App;
