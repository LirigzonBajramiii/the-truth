import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  async loginUser({ commit }, payload) {
    const { email, password } = payload;

    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);

    const user = response.user;
    // const { user } = response
    commit("SET_USER", user);
  },

  async registerUser(_, payload) {
    const { email, password, firstName } = payload;
    // Regjistrimi i userit permes firebase/auth
    const auth = getAuth();

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(response.user, {
      displayName: firstName,
    });

    await signOut(auth);
  },

  async logOut() {
    console.log("logout call");
    const auth = getAuth();
    await signOut(auth);
  },
};
