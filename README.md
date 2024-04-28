Video Calling App with Zego Cloud and Firebase
This is a video calling application built using React, integrated with Zego Cloud for real-time video communication, and Firebase for user authentication.

Features
Real-Time Video Calling: Users can make video calls in real-time using Zego Cloud's video communication platform.
User Authentication: Secure user authentication is provided by Firebase Authentication.
End-to-End Encryption: Video calls are secured with end-to-end encryption to protect user privacy.
User Presence: Users can see the online status of other users.
Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.

Requirements
Node.js
React
Zego Cloud SDK
Firebase account

Installation
Clone the repository:
git clone https://github.com/Moni282003/VideoCall.git

Navigate to the project directory:
cd VideoCall

Install dependencies:
npm install

Set up Firebase:
Create a Firebase project on the Firebase Console.
Enable Email/Password authentication in Firebase Authentication.
Copy your Firebase configuration details.
Paste the Firebase configuration details in firebaseconfig.js.

Set up Zego Cloud:
Sign up for a Zego Cloud account and obtain your SDK key and secret.
Paste your Zego Cloud SDK key and secret in ZegoConfig.js.

Run the app:
npm start
