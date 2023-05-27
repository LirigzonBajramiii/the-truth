const registerUserSchema = require("../validators/users/registerUserSchema");
const admin = require("../services/firebase");

const adminEmails = ["admin@gmail.com"];

module.exports = {
  register: async (req, res) => {
    // validate the user input using JOI

    const validationResult = registerUserSchema.validate(req.body);

    // checking if we have any error
    if (validationResult.error) {
      res.status(400).json({ error: validationResult.error.message });
    }

    //Get values from req.body
    const { firstName, email, password } = req.body;

    try {
      const user = await admin.auth().createUser({
        email,
        password,
      });

      // display firstName
      await admin.auth().updateUser(user.uid, { displayName: firstName });

      // If user email is on adminEmails, make that user admin
      if (adminEmails.includes(user.email)) {
        const userClaim = { admin: true };

        // Make user admin
        await admin.auth().setCustomUserClaims(user.uid, userClaim);

        // Store in database(firestore)
        await admin.firestore().collection("roles").doc(user.uid).set({
          email: user.email,
          role: userClaim,
        });
      } else {
        const userClaim = { user: true };

        // Make a user just user
        await admin.auth().setCustomUserClaims(user.uid, userClaim);

        // Store in database(firestore)
        await admin.firestore().collection("roles").doc(user.uid).set({
          email: user.email,
          role: userClaim,
        });
      }

      // Retrieve user role from Firestore
      const roleSnapshot = await admin
        .firestore()
        .collection("roles")
        .doc(user.uid)
        .get();
      const userData = roleSnapshot.data();
      // const userRole = userData ? userData.role : defaultUserRole;

      // if everything is fine, return user as admin
      return res.json({ user });
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  },
};
