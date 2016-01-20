# React Native Starter

Starting point for react native apps


###Setup the project in Xcode

Clone the project and ```npm install``` in the root of your folder. 

Then ```npm start``` in the root, this will start up your webpack-dev-server.

Open the project ```ReactNativeStarter.xcodeproj``` (found in the ```ios``` directory) and click on the project (top left) and select ```SHORTLIST MEDIA LTD``` as your team, then run the project (cmd + r).  

##Build and run the app on a device

Go to the ```AppDelegate.m``` file of Xcode, on line 36 where it asks for your URL change 'localhost' to the IP address of your computer. (you can get this by typing `ifconfig` into the terminal). Make sure you computer and phone are on the same WIFI network. (You may need to stop the server and npm start again). Your phone will need to be plugged into your computer.

Once it is running on your phone, shake your phone to open the development menu and select `Enable Live Reload' so that you do not need to reload the app in Xcode anytime a code change is made.

##### The following does not work yet (them not me) but I figured out how to do it so thought it was worth noting down still.
You will also want to enable Enable Chrome Debugging too so go into the ```RCTWebSocketExecutor.m``` file in Xcode (Libraries/RCTWebSocket.xcodeproj) and change the localhost in this file to your IP address too. Then save, shake the phone and select 'Debug in Chrome'.

##Additional installs 

- [React Native Device info](https://github.com/rebeccahughes/react-native-device-info) - I have done iOS, will need to do Android when I get it working on a device.

Include the following at the top of your JS component when you want to include it -  ```import DeviceInfo from 'react-native-device-info'```

- [Parse React](https://www.npmjs.com/package/parse-react)

Include the following at the top of your JS component when you want to include it

```import Parse from 'parse/react-native'```
```import ParseReact from 'parse-react/react-native'```

##Routing

Used [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) to get started with routing

**Scripts for renaming the project

[Follow instructions in this article](http://jslim.net/blog/2015/01/08/how-to-rename-xcode-project-thoroughly/)

You will also want to change the name in the ```AppDelegate.m``` file in Xcode. Scroll down and look at the ```RCTRootView``` and you will need to change line 47 ```moduleName:@"ReactNativeStarter"``` to the name of the project you want.  

After this quit the terminal that the app server opened up in earlier as this localhost:8081 will be pointing to the wrong place. Then run the app again, restarting a new localhost:8081 server.

## Useful packages

[React Native Side Menu](https://github.com/react-native-fellowship/react-native-side-menu)

[Google Ad Mob Banners](https://github.com/sbugert/react-native-admob)

[Background Geo Location](https://github.com/transistorsoft/react-native-background-geolocation)

[Google Material Design UI Kit](https://github.com/xinthink/react-native-material-kit)

[Native Blur of images and components](https://github.com/react-native-fellowship/react-native-blur)

[Animate.css for React Native](https://github.com/oblador/react-native-animatable)

[Simple wrapper around Push Notifications](https://github.com/zo0r/react-native-push-notification)

[Simple wrapper around File System access](https://github.com/johanneslumpe/react-native-fs)

[Apple iAd (deprecated)](https://github.com/Purii/react-native-adbannerview)

[Parallax Image View](https://github.com/oblador/react-native-parallax)


