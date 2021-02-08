# Codeshares exercise #1

## General guidelines
1. After cloning start to work in your own repository. So import this repository into your own private repository in GitLab (or GitHub). Add repository access to the following user accounts: vkoivula and aepgit. Please do not fork this project.
    > Note that that at least with GitLab, guest access to a private repository is not enough! Please see https://docs.gitlab.com/ee/user/permissions.html

1. If you take code examples from Stack Overflow or other places. Please add the URL into the comments.  Otherwise, we do not appreciate. 

1. If you are unable to complete exercises fully just commit what you have done. Comment out or otherwise disable parts that are not working and are causing your code to crash. 

1. We should be able to run the exercise with just one command. This is described more closely in each individual exercise. For example, in exercise #1 npm command is already configured in package.json. 

### Exercise #1 description

Here you demonstrate your ability to solve simple calculations and align objects on the HTML canvas using Fabric.js library 

The idea is that end user can align and set spacing to selected canvas objects according to this video

https://youtu.be/CJgPY3xxxak

Please familiarize yourself with Fabric.js documentation if canvas and/or Fabric.js is new to you.

http://fabricjs.com/articles/

It will be helpful to understand when to call setCoords() 

https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords

### Please implement the following functionality
You can also see the video of the intended functionality.

#### Spacing of the selected objects
Please read the value for intended spacing from the input box with id: "spacing". The spacing will be the same for horizontal and vertical spacing.

* Space objects horizontally
* Space objects vertically 

#### Align selected objects
Please note that that the objects need to be aligned in relation to the objects selected. _Not to the edges of the canvas!_ Please see the video I have linked.
* **Align left**
  *Aligns objects to the left edge of the leftmost object edge on the x-axis*
* **Align right**
  *Aligns objects to the right edge of the rightmost object edge on the x-axis*
* **Align top**
  *Aligns objects to the top edge of the topmost object edge on the y-axis*
* **Align middle**
  *Sets the centre point of every selected object to the centre point of the topmost and bottommost edges on the y-axis*
* **Align bottom**
  *Aligns objects to the bottom edge of the bottommost object the y-axis*

### Editing exercises
After cloning and getting the server to run you can proceed to edit index.html. Please do not touch initializeObjects.js which contains the example sets of canvas objects.

Add your import(s) under the following line in the index.html. Then write your JavaScript into separate files except what is needed to handle the clicks.

```
// Add import(s) for your module(s) to here and modify event listeners
```

## To run this project do the following

```
$ git clone git@gitlab.com:vkoivula/fed-assignment1.git 
$ cd fed-assignment1  
$ npm install
$ npm run http-server
```