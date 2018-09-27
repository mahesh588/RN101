# React Native Set Up

## Installation

### Node

React Native is build and distributed via node.js and npm respectively.

If you don't have node and npm on your machine, download the installer for your machine from [here](https://nodejs.org/en/download/).

### Choose your Emulator

#### Genmotion [Android Emulator]

Genymotion is an easy-to-use Android emulator that has been designed to help app developers test their products within a safe, virtual environment.

Download the Genymotion installer for your machine from [here](https://www.genymotion.com/download/)

#### Physical Android Device

If you have a physical device, make the device in developer mode, instructions [here](https://developer.android.com/studio/debug/dev-options) . 

Run *adb devices* and you should your device listed in output.

If you don't have *adb* follow the instruction [here](https://9to5google.com/2014/12/02/how-to-install-adb-tools-windows-mac-linux/)

#### Android Virtual Device from AVD

You can use AVD to create your virtual emulator, instruction [here](https://developer.android.com/studio/run/managing-avds).

#### XCode [iOS]

You can install XCode for free from AppStore. XCode comes with Simulator. Once, XCode gets installed, run the Simulator and launch iPhone Simulator. 

Expo would then detect iOS, when you click *Run on iOS*

### Expo CLI

[Expo](https://docs.expo.io/versions/latest/) manages the build of the React Native App's and provides features to deploy the React Native App on Android and iOS Simulator. Expo also has mobile app for iOS and Android, which can be used to run the React Native App on actual device.


```
sudo npm install --global expo-cli
```

### Visual Studio Code

VS Code is one of the good editor for writing React Native. You can download it from [here](https://code.visualstudio.com/Download). 

## Post Installation

### Expo to recognize Genymotion Android Emulator [Only Android]

**Note:** Required only if Android SDK and *adb* is not installed on the machine.

Genymotion comes with Android SDK and *adb* command. In order for expo to recognize the Genymotion Emulator, we need to run the following commands

```
// Find adb location inside Genymotion
ls /Applications/Genymotion.app/Contents/MacOS/tools/

// Export the Path
export PATH=$PATH:/Applications/Genymotion.app/Contents/MacOS/tools/

// Run adb
adb devices

// Load the path into expo
exp path

```

## Set up 

Once the above installation is complete, follow these steps:
* Clone the repo *'git clone https://github.com/mahesh588/RN101.git'*
* Goto RN101/SignUpProject folder 
* Run *npm install*. This would install all the dependencies.
* Run *expo start*. This should open the Expo UI in browser.
* Run the iOS or Android Emulator.
* Depending upon your choise of device, Click on *Run on iOS* or *Run on Android*
* You should see the UI appeared in the simulator.


## Account Information
### Expo
```
ananmahe+rn101@amazon.com/test123
```

### Genymotion
```
ananmahe+rn101@amazon.com/test123123
```
