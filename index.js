var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-cloud-messaging-a81ca.firebaseio.com"
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'eBHdSLRfjkA:APA91bGpxji1ogbDeWfodlBuj47pwrlGWH2FKSR5ezthv9bMbFjRg8AhfoNiAfO5hreVw-6h7Qqgfv8KA9mRfsUseM7dGE1w5JjVR3c1b5ZbQhYb9DfjAT1irmRO5bNj6AQQ6so6z_lw';

// See documentation on defining a message payload.
var message = {
    notification: {
        title: "example title again",
        body: "example body again"
    },
    data: {
        score: '850',
        time: '2:45'
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });