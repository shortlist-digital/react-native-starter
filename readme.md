# React Native Starter

Starting point for react native apps

## Todo:

**Routing**

Used [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) to get started with routing

**Scripts for renaming the project**

[Follow instructions in this article](http://jslim.net/blog/2015/01/08/how-to-rename-xcode-project-thoroughly/)

You will also want to change the name in the ```AppDelegate.m``` file in Xcode. Scroll down and look at the ```RCTRootView``` and you will need to change line 47 ```moduleName:@"ReactNativeStarter"``` to the name of the project you want.  

After this quit the terminal that the app server opened up in earlier as this localhost:8081 will be pointing to the wrong place. Then run the app again, restarting a new localhost:8081 server.


**Setup the project in Xcode**

 Open the project ```ReactNativeStarter.xcodeproj``` in the ```ios``` directory and run the project (cmd + r). I have no idea how they do but this will automatically set up a localhost and start running on your selected Simulator.  

**Instructions on how to build and run the app on a device**

Go to the ```AppDelegate.m``` file of Xcode, on line 36 where it asks for your URL change 'localhost' to the IP address of your computer. (you can get this by typing `ifconfig` into the terminal). Make sure you computer and phone are on the same WIFI network.

Once it is running on your phone, shake your phone to open the development menu and select `Enable Live Reload' so that you do not need to reload the app in Xcode anytime a code change is made. 


