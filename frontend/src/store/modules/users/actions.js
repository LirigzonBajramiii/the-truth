import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

import UserService from "@/services/users/UserService";
import db from "@/firebase/db";
import { getDoc, doc } from "firebase/firestore";

export default {
  async loginUser({ commit }, payload) {
    const { email, password } = payload;

    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);

    const user = response.user;

    // Retrieve user role from Firestore
    const roleDocRef = doc(db, "roles", user.uid);
    const roleDocSnapshot = await getDoc(roleDocRef);

    let userRole = null;

    if (roleDocSnapshot.exists()) {
      const roleData = roleDocSnapshot.data();
      userRole = roleData.role;
    }

    const userWithRole = {
      ...user,
      role: userRole,
    };

    console.log(userWithRole);

    // const { user } = response
    commit("SET_USER", userWithRole);
  },

  async registerUser(_, payload) {
    // Forma e vjeter ku useri u kriju direkt frontend-firebase
    // const { email, password, firstName } = payload;
    // // Regjistrimi i userit permes firebase/auth
    // const auth = getAuth();
    // const response = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
    // await updateProfile(response.user, {
    //   displayName: firstName,
    // });
    // await signOut(auth);

    // Forma  e re ku useri krijohet ne kete relacion frontend-api-firebase
    await UserService.register(payload);
  },

  async logOut() {
    console.log("logout call");
    const auth = getAuth();
    await signOut(auth);
  },
};
