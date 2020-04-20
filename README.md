# Galway Mayo Institute of Technology <br> BSc in Computing in Software Development <br> Applied Project and Minor Dissertation
###### Authors: <br> Sammar Tahir <br> Usman Sattar <br> Arkadiusz Mamala

**Student Number(s):**
- G00347526
- G00349088
- G00345816

**Student Name(s):**
- Arkadiusz Mamala
- Sammar Tahir
- Usman Sattar

**Supervisor(s):**
- Gerard Harrison
- Martin Kenirons
- Kevin O’Brien

**GitHub Link:**
-  https://github.com/ArekMamala/FinalYearProject

## Introduction
For our project we wanted to make a wearable wristband that allows a user to keep track of how many punches hit an object, tracking the speed of movement and calculating the beats per minute whilst continuously punching . We also want to connect the wristband to a laptop/phone so the user is able to get all his information tracked and displayed in an elegant and sleek app. 

## Reason for Choosing Project
The reasons that we decided to develop this application is because we find this idea very interesting. Sports is a topic that we are all involved in inside of college and out. We came up with this idea when we were at a boxing class when we  couldn't decide who had more power. It’s a project that we feel will challenge us in developing it and get it working the way we have designed it. 

## Technologies you plan to use
The technologies we plan on using are:
1. Web servers to store our data (AWS)
2. Wearable tracker
3. Angular
4. Javascript/C+
5. Google Drive

## Architecture
The application on the phone is going to work with user control. The application is going to count punches, update datasheet, calculate the BPM of user while punching. This app is going to be an alternative to the research of the wearable device. User will have three options within the application.
1. Calculate the number of punches against time.
2. Calculate the number of punches and beats per minute against time.
3. Open data log sheet to view their history. To view their progression.

## Work Allocation
#### First Step
We are allocating this project into three sections. Firstly we are going to start our research. We are going to deeply research in how this wearable device is going to work and what it takes to develop this new piece of technology. We need to understand what language is going to be used in constructing this. We need to know what sensors are required and how all data is going to be recorded.
#### Second Step
During the term our research is going to be a piece of document in how this wearable device can be achieved and possible drawing and animations of how it may work. But to back up our research, we need a physical piece that we can show and present. So we as a group decided to construct an application that is downloadable on mobile phone.
This phone application is an alternative to the wearable device. The application is going to record the number of punches. The application is going to record and store data. For example is it going to store the number of punches under a certain amount of time.
#### Third Step
While two members of the team are constructing the application, one person is going to specifically manage the database. They will have the responsibility to create the AWS account and link it up to the database. Overall, they are responsible for the whole database section of this project and to link it up to the application, that is works efficiently. 

## Imports 

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
usefull link for the capacitor explaining it and steps: https://capacitor.ionicframework.com/docs/getting-started/


#### Vibration 
`ionic cordova plugin add cordova-plugin-vibration`
`npm install @ionic-native/vibration`

#### Calendar
`ionic cordova plugin add cordova-plugin-calendar`
`npm install @ionic-native/calendar`


##### Run this if you have any errors with .json file types
**NB**

found 2 high severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
  
##### Workout routine to implement

On home tab ( Use cards )
* 5 workouts that genereate randomly each use
* in each workout 3 types ;Beginner Intermediate Pro
* Explination for each workout in relation to boxing 
* After workout test puch per minute

##### Overleaf
https://www.overleaf.com/8379312238yysgybdjsctf
We should now do work under the following heading:
* Introduction
* Methodolgy
* Technology Review 
* System Design
* System Evaluation
* Conclusion
<br>
Please add what you written for to the wiki and add what you are writing about the project section. This is to ensure that we all keep track of what work we do. Please also update the laTeX files when adding information to overleaf.

##### To run on adroid phone 

1. Setup Envirement variables
  * ANDROID_HOME
  * JAVA_HOME
2. Run on phone
  * Connect Device via USB
  * Run command 
    * ionic cordova  run android --device

#### Lazy Loading Design Pattern 
* consists of 2 components 
  * indexComponent for login/signup & welcome 
  page
  * Home Component
    * for the other pages such as 
      * application-page, profile & workout
* for more information visit this link below 
  * https://www.9lessons.info/2019/05/angular-routing-with-lazy-loading.html
