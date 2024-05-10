The Assignment:

The instructions were to create a single page application (SPA), specifically a portfolio page. Further instructions included a use of multiple pages to navigate between.

Other task-specific instructions:

* The use of a useState-hook to manage local state.

* The use of an external library such as Redux for global state management.

* The use of an external API


The App:

My Portfolio-App is structured with four pages:

A Home page, where you get a brief introduction about me, and some information of what you'll find looking around the app.

An About page where I go into more detail about my education and and previous experience with Frontend development.

A Contact page where you can click on my E-mail address and navigate to your E-mail of choise with ease. You can also find me on LinkedIn and have a look at my Github profile by clicking those links on my contact page.

A Projects page where I, with the github API listed all my public repositorys, which you can click on and have a look at.

Routing:

Creating routes is what makes it possible for you to navigate through the SPA with such ease and speed. That is the thing with SPA yoy don't have to wait for a new page to load when navigating around, you're always on one single page!
How that works is the URL to your page will change depending on what page you're on (/contact, /about,
/projects).

Redux for global state management:

I chose to use this so that you can change between dark and light mode by clicking the switch in the navbar on the top of every page.

The useState-hook:

In my application, I use the useState hook to manage the open status of the overlay menu. I have a state variable called isOpen which I initialize to false. When the user clicks on the hamburger icon, I change isOpen to true, which makes the menu appear.

The useEffect-hook:

In my project I use the useEffect hook to fetch the data from my external Github API.