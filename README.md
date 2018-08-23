# listen-up

> Super Simple Webhook Listeners - [View Live App](https://listenup.now.sh)

![Listen Up Screenshot](listen-up.png)

## About

**Listen Up** is a very rudimentary webhook listening platform that will display your `POST` requests to generated endpoints in realtime. This is meant to be useful for prototyping and developing [webhooks](https://en.wikipedia.org/wiki/Webhook).

You can run it locally and tunnel your requests (using [ngrok](https://ngrok.com/)) to port 3030 to see them come through. Or you can deploy it to a platform like hosting platform (I recommend [Zeit Now](https://zeit.co/now)).

You can preview or try the [demo here](https://listenup.now.sh) courtesy of Zeit. :)

## Tooling

This project uses:

- [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications - used on the back-end and front-end
- [Vue](https://vuejs.org) for some front-end (is currently rudimentary - see TODO section below)
- [Bulma](https://bulma.org) for a quick-n-easy css framework
- [mLab](https://mLab.com) for hosting a simple hobby instance of MongoDB

## Data Handling and Storage

MongoDB Data for the post requests is not persisted past 60 seconds. Webhook endpoints will expire after 24 hours if they are not used.

## TODO:

There are a couple things I'd like to do yet with this small project.

- UI Improvements
  - Build an "actual" SPA front-end (single-page app with router)? ;)
  - Improve Notification system

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/listen-up;

   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Pull Requests

Sure. If you want to make it better. But really this is just for helping me test and deal with webhooks with work projects.

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
