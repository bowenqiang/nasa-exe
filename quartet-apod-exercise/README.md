#### Introduction

One of the most popular of all federal government websites is NASA's [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) (APOD). For this exercise, you will build a React component that fetches and renders data about the APOD.

#### Setup

Lucky for you, NASA maintains a public domain JSON API that provides the APOD imagery and associated metadata which you can find [here](https://api.nasa.gov/api.html#apod). To help you get started, we've created a boilerplate template containing libraries like [fetch](https://github.com/github/fetch) and [styled-components](https://styled-components.com/) that we'd like to see you use.

**To get started with the boilerplate:**

```sh
$ npm install
$ npm start
> Go to http://localhost:8080
```

#### Expectations and Requirements

- App should make a request using `fetch` to the NASA API shared above.
- App should render the title, explanation, and copyright of the image.
- App should render the image itself.
- There should be an input control where one can set the desired width the image should render in.
- If the width exceeds _1000px_ the app should use `hdurl` instead of `url` to render the image.
- App should leverage `styled-components` at a minimum to style the various views
