const admin = require("firebase-admin");

const serviceAccount = require("../credentials/the-truth-1c906-firebase-adminsdk-w1odq-dfb5e430ad.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
