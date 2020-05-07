<h1 align="center">Applied Project And Minor Dissertation </h1>

## Project Details
| Details         |               |
| :------------- |:-------------|
| **Course**          | BSc (Hons) in Software Development          |
| **Module**          | Applied Project and Minor Dissertation      |
| **Institute**       | [Galway-Mayo Institute of Technology](https://www.gmit.ie/)         | 
| **Students**          | [Arkadiusz Mamala](https://github.com/ArekMamala), [Sammar Tahir](https://github.com/sammartahir) & [Usman Sattar](https://github.com/Uzzy97)  |
| **Project Supervisors**          | Gerard Harrison, Kevin OBrien & Martin Kenirons|
| **Module Supervisor** | Dr. John Healy |
| **Project Title** | ASU Boxing |

## Dissertation
A PDF format of our Dissertation for this project is available below. This piece of document contains an in-depth view of all facets of research production, from concept to implementation and final assessment.
***LINK***

## Video Demonstrations
The video demonstrations show how each of us have contributed our parts in the development of this project. We give a run through of the coding, front-end and back-end aspect of the application.
| Links         | 
| :------------- |
| [Arkadiusz Mamala](https://github.com/ArekMamala) |
| [Sammar Tahir](https://github.com/ArekMamala) |
| [Usman Sattar](https://github.com/ArekMamala) |
___
<h2 align="center">ASU Boxing </h2>
<p align="center">
  <img width="460" height="300" src="https://github.com/ArekMamala/FinalYearProject/blob/master/src/assets/logo.png?raw=true">
</p>

## Overview 
This repository contains the code and documentation developed in Galway Mayo Institute of Technology for our fourth year module, Applied Project and Minor Dissertation. ASU Boxing is an application designed specifically aimed for boxers but anyone who wish to begin boxing as a career or exercise are welcome to try it out. This application is developed using the ionic/angular framework and contains a backend server written in SQL, hosted by Amazon Web Services. This application has given each user the ability to create their own account, which is enabled with the implementation of firebase.
<br><br>
<b>The main features of this application:</b>

 - Ability to detect and count various different punches in the space of time decided by the user
 - Displaying the session evalution report at the end of each workout session.
 - Users can schedule events in their calender through the application and load in their events.

## Implementations of Technologies
### Ionic
![Ionic Logo](https://github.com/ArekMamala/FinalYearProject/blob/master/src/assets/ionic.png)

Ionic is built to perform and run fast on the all of the latest mobile devices. Build out-of-the-box blazing fast apps with a small footprint and built-in best practices like hardware accelerated transitions, touch-optimized gestures, pre-rendering, and AOT compiling.
Ionic’s components are written in HTML, CSS, and JavaScript, making it easily build beautiful, high quality UI’s that perform great everywhere.

### Angular
_Angular Logo_

Angular is a web application framework it’s typescript based developed by an Angular
team at Google. It has been completely rewritten from the same team that built AngularJS. Some languages such as JavaScript, HTML and CSS are used in the framework.The development environment must include both Node JS and npm package manager. The latest **Node JS** version is `14.0.0` and the recommended version is `12.16.2`. To determine the version of Node JS installed on your devices we simply type in `node -v` in the terminal. The npm package manager is required for the downloading and installing of the npm packages.
To investigate if you have package manager installed you simply run the `npm -v` command in the terminal.


### Firebase
![Firebase Logo](https://github.com/ArekMamala/FinalYearProject/blob/master/src/assets/firebase.png)

This cloud application is designed by Google to help build. Firebase is a tool-set to “build,improve, and grow your app”, and the tools it gives you cover a large portion of the services that developers would normally have to build themselves, but don’t really want to build, because they’d rather be focusing on the app experience itself. This includes things like analytics, authentication, databases, configuration, file storage, push messaging, and the list goes on. The services are hosted in the cloud, and scale with little to no effort on the part of the developer.

### Cordova
_Cordova Logo_


## Reason for Choosing Project
The reasons that we decided to develop this application is because we find this idea very interesting. Sports is a topic that we are all involved in inside of college and out. We came up with this idea when we were at a boxing class when we  couldn't decide who had more power. It’s a project that we feel will challenge us in developing it and get it working the way we have designed it. 


## Architecture
The application on the phone is going to work with user control. The application is going to count punches, update datasheet, calculate the BPM of user while punching. This app is going to be an alternative to the research of the wearable device. User will have three options within the application.
1. Calculate the number of punches against time.
2. Calculate the number of punches and beats per minute against time.
3. Open data log sheet to view their history. To view their progression.

## Install Guide 
To run this app you'll need to download and install Cordova, Angular and Ionic using the following links:

  - Cordova: https://cordova.apache.org
  - Angular: https://angular.io/guide/setup-local
  - Ionic: https://ionicframework.com/getting-started

Once this all done you need to get the actual project files. This can be done easily if you open the termial and enter the following command:
<br>
`git clone https://github.com/ArekMamala/FinalYearProject`

When the project is set up correctly plugins and platform’s in the application will have to be added into the project and installed using the commands stated below.
#### Server/MYSQL
`npm install mysql`

`npm install cors`

#### Enable Cordova
`ionic integrations enable cordova --add`

#### Enable Cordova
`npm install firebase --save`

`npm install -g firebase-toolsso`

#### Glocation add and intall
`ionic cordova plugin add cordova-plugin-geolocation`

`npm install @ionic-native/geolocation`


#### Enable angular with firebase
`npm install firebase @angular/fire --save`

#### Gyroscope add and install
`ionic cordova plugin add cordova-plugin-gyroscope`

`npm install @ionic-native/gyroscope`

#### capacitor
`npm install --save @capacitor/core @capacitor/cli`

#### Vibration 
`ionic cordova plugin add cordova-plugin-vibration`

`npm install @ionic-native/vibration`

#### Calendar
`ionic cordova plugin add cordova-plugin-calendar`

`npm install @ionic-native/calendar`

### Running application
**Android** 
<br>
When running on android the device used for testing must be connected to the
computer and that device must be selected when running the below command:
<br>
`ionic cordova run android`

**Browser**
<br>
When running on browser a link to test the application will be displayed after
the following command is entered:
<br>
`ionic cordova run browser`

