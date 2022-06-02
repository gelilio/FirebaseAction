const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorldfromGithub = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
// <<<<<<< HEAD
//   response.send("Hello from Firebase!");
// });
// =======
  response.send("Hello from Firebase from Robert!");
});
// >>>>>>> 6f14d829b31284c6fd0eae9af1f9b4809cc11a38
