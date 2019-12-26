# Trending-repos
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


# United Remote Front-end Coding Challenge

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
The sorted JSON data is directly fetched from the Github API.

A User should be able to list the most starred Github repos that were created in the last 30 days and see the results as a list of repositories, one repository per row.
Each row has the following details :
  - Repository name
  - Repository description
  - Number of stars for the repo.
  - Number of issues for the repo.
  - Username and avatar of the owner.
  - How many days since the creation of the repo.
  - Redirection to the repo on github.
The app should have Infinite Scroll (pagination).

Implemented the dark mode on a side note ... ^^

## Installing

after downloading/cloning the project folder run *npm install* to instale all node_modules necessary for the app

### Demo

The app grabs data from the github Api, each page returns a max of 100 repositories. 
for our case, we chode to recieve 20 items per page (max items = 1000)

The app implements Infinite Scrolling, it means more data is loaded the more the user scrolls down instead of the old fashioned pagination buttons.

The app is responsive with all sorts of display resolutions. 

![demo](https://user-images.githubusercontent.com/46220740/71452607-d02e0800-2786-11ea-9e7a-c5cfeb3b11a4.gif)

## Author

**Youssef NACIRI** - [LinkedIn](https://www.linkedin.com/in/naciriyosf/) 
