import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	// Replace with your Firebase configuration
	apiKey: "AIzaSyAneSzAr5LFEmBougdWRFIlIBs5jjntdeo",
	authDomain: "lester-rn.firebaseapp.com",
	projectId: "lester-rn",
	storageBucket: "lester-rn.appspot.com",
	messagingSenderId: "389710401571",
	appId: "1:389710401571:web:63d3f63f06ae0e83582196",
	measurementId: "G-CFG11JV70V",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
