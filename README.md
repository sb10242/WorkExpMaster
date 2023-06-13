# Small Group Work Experience - Seed Project

## Introduction

This project is the seed project for Small Group Work Experience.  
It contains all of the information required to setup the student's laptop, the starting code (which is intentionally buggy!) and the bugs and user stories that they will work through during their week.

The purpose of the exercise is to give the student a supported experience of what it would be like to work on one of our development teams.  They must implement bugs and stories, with unit tests and them demo to an engineer.  

During their week students are supported by experienced engineers, who help them to learn the coding skills required.  We do no expect all students to complete all user stories, but as some may come with existing experience we include more work than they need.

## Initial setup

The following software needs to be installed on your laptop:

- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor/Compiler
- [Node](https://nodejs.org/en)
- [Git](https://git-scm.com/)

You will also need an internet browser such as Chrome.

### Step 1 - Fork the Master Repo and create a working copy on your laptop.

1) First on your local machine, create a directory where you are going to work (e.g. c:\code).
2) Go to [GitHub](https://github.com/) and create yourself an account (don't forget to verify your email address).
3) Go to our seed repository and create a copy in your own account by clicking the 'fork' button.
4) In your new repo  click the green 'Code' button, and copy the url on the https tab.
5) In windows open a command prompt and type 'git clone <url>' where the url is the one you copied in 4.

### Step 2 - Open in VS Code and run up the code.

1) Open VS Code.
2) Goto File -> Open Folder and select the top level folder that was exported from Git.
3) This opens up the source code in VS Code.
4) Next go to Terminal -> New Terminal.
5) In the terminal window type 'cd <path>' where path is the path to the top level folder you just opened (you can copy it from Windows Explorer)
6) Type 'npm start' and press return.  The code compiles and runs up a browser with the application running in it.  Feel free to play.
   The url in the browser is [http://localhost:3000](http://localhost:3000)
### Step 3 - Run the automated tests.

1) Open a new terminal by going to Terminal -> New Terminal.
2) In the terminal window type 'cd <path>' where path is the path to the top level folder you just opened (you can copy it from Windows Explorer)
3) Type 'npm test' to run the tests.  Hopefully they all pass!

## Node commands
### `npm start`  
Runs the app in the development mode.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Right click and select 'inspect' to open the debugging windows.  
You can print to the debug console using 'console.log(<"Message")>) in your javascript code.
The page will reload when you make changes.  You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.  The tests will automatically run whenever code changes are saved
### `npm run test_cov` 
Launches the test runner and runs the tests once, showing the coverage of the unit tests.
In widnows exporer navigate to your tep level folder and then coverage\lcov-report and open index.html in a browser to view the pretty version of the report.
### `npm run build`
Builds the app for production to the `build` folder.  It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## Get Started

Switch to the [Wiki](https://github.com/KfWorkExp/WorkExpMaster/wiki) for the rest of the documentation and all the tasks in the project.

## Acknowledgements

This project was bootstrapped with the [Create React App](https://github.com/facebook/create-react-app) seed project.
