const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const verifyCode = require('./verify_code');
const serviceAccount = require('./service_account.json');
const requestOneTimePass = require('./request_one_time_password');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-9a36f.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

exports.requestOneTimePass = functions.https.onRequest(requestOneTimePass);

exports.verifyCode = functions.https.onRequest(verifyCode);
