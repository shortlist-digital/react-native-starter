# React Native Starter

Starting point for react native apps

## Todo:

###Routing

Used [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) to get started with routing

**Scripts for renaming the project

[Follow instructions in this article](http://jslim.net/blog/2015/01/08/how-to-rename-xcode-project-thoroughly/)

You will also want to change the name in the ```AppDelegate.m``` file in Xcode. Scroll down and look at the ```RCTRootView``` and you will need to change line 47 ```moduleName:@"ReactNativeStarter"``` to the name of the project you want.  

After this quit the terminal that the app server opened up in earlier as this localhost:8081 will be pointing to the wrong place. Then run the app again, restarting a new localhost:8081 server.


###Setup the project in Xcode

Open up your project in the terminal and in the root folder type ```npm start``` this will start up your webpack-dev-server.

Then open the project ```ReactNativeStarter.xcodeproj``` (found in the ```ios``` directory) and run the project (cmd + r).  

##Build and run the app on a device

Go to the ```AppDelegate.m``` file of Xcode, on line 36 where it asks for your URL change 'localhost' to the IP address of your computer. (you can get this by typing `ifconfig` into the terminal). Make sure you computer and phone are on the same WIFI network. (You may need to stop the server and npm start again).

Once it is running on your phone, shake your phone to open the development menu and select `Enable Live Reload' so that you do not need to reload the app in Xcode anytime a code change is made.

##### Not working yet (them not me) but I figured out how to do it so thought it was worth noting down still
You will also want to enable Enable Chrome Debugging too so go into the ```RCTWebSocketExecutor.m``` file in Xcode (Libraries/RCTWebSocket.xcodeproj) and change the localhost in this file to your IP address too. Then save, shake the phone and select 'Debug in Chrome'.

##Additional installs - 

- [React Native Device info](https://github.com/rebeccahughes/react-native-device-info) - I have done iOS, will need to do Android when I get it working on a device.

Include the following at the top of your JS componenet when you want to include it -  ```import DeviceInfo from 'react-native-device-info'```

- [Parse React](https://www.npmjs.com/package/parse-react)

Include the following at the top of your JS componenet when you want to include it

```import Parse from 'parse/react-native'
import ParseReact from 'parse-react/react-native'```



