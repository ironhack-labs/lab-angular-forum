![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Lab Angular 2 and Express | IronForum

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_913f63f33ab9531dc6570be29d3cb40b.png)


>An Internet forum is a discussion area on a website. Website members can post discussions and read and respond to posts by other forum members. A forum can be focused on almost any subject and a sense of an online community, or virtual community, tends to develop among forum members.

Forums are a great mode of communication that first emerged in the [late 70s](https://www.quora.com/When-did-the-first-Internet-forum-start-and-which-was-it) and gained popularity throughout the 90s with the internet revolution.

Forums are typically organized in a tree-like structure, often beginning with *categories* such as "Technology", "Art", and "Random". These subcategories contain *threads*, or top level posts created by users.

Finally, these threads contain *posts*, replies made to a thread.

Forums often contain specific privileges and authentication logic. For instance, a User may have to be signed in to create posts. Logged out users may be able to browse posts, but not create them, and administrators can edit or delete posts.

Today, we'll create a simple forum with *threads* and *replies*. We'll skip out on the *categories* for this exercise to simplify the logic.


## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Include both the client and server applications in your submission.

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Exercise

### Introduction

We've provided starter code with a an API for threads and posts. Currently, all requests are unauthenticated. Your task will be to write the front end of the forum in Angular 2, and authenticate the API.

Authentication routes can be found at the following locations, all of which are POST requests:

- `/api/login` - Log the user in
- `/api/logout` - Log the user out
- `/api/loggedin` - Returns a user object with a status of 200 if the request is authenticated, and null with a status of 403 if not
- `/api/signup` - Creates a new user. Returns the user object if successful, returns an error otherwise.

### Iteration 1 | Display All Threads

In your Angular 2 app, create a service to make a GET request to `/api/threads`.

Using this service, create a component mounted at the home route with the angular router which will display all of the threads.

The home page should display a thread's title, author, and date.

### Iteration 2 | Authentication

Add authentication to the forum app. On the home page, add a link to login or register. This should be done through Angular communicating with the Express API.

### Iteration 3 | New Thread

On the home page, create a link to `/threads/new`.  This link *should only be displayed if a user is authenticated*.

In the router, mount a `new-thread-component`, which will display a form to create a new thread.

This form should make a POST request to `/api/threads` with a `title` and `content` in the body.

Upon success, redirect the user back to the home page.

### Iteration 4 | Single Thread Page

Add a method to your threads service to retrieve one thread by its id from the API.

Create a component mounted at `/threads/:id`, which will display a single thread, with its title, content, and the creator.

Create a link on the homepage for each of the threads to link to the single thread component.

### Iteration 5 | Replies

In the single thread details component, create a form to add a reply. This form *should only be visible if a user is logged in*.

This form should make a POST request to `/apis/threads/:id/replies` with a `content` in the request body.

In the single thread details component, the user should be able to see all the replies to the thread.
