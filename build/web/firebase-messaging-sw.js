importScripts("https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: 'AIzaSyBDle9ByYJOM5zoHzMB3-E1LRrOr8VOIg8',
    appId: '1:587642018827:web:358b45665a9e25e09dfb0e',
    messagingSenderId: '587642018827',
    projectId: 'flutter-myfirst',
    authDomain: 'flutter-myfirst.firebaseapp.com',
    databaseURL: 'https://flutter-myfirst-default-rtdb.firebaseio.com',
    storageBucket: 'flutter-myfirst.firebasestorage.app',
    measurementId: 'G-L3NMWWWD0B',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/firebase-logo.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
