# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents
- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview
A simple dashboard the utilizes data from an external JSON file

### Screenshot

![Project preview](/images/project%20preview.jpg)

## My process
Started with the HTML markup using semantic HTML then started styling with SASS and using the BEM architecture. Then went on to write the javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Using JSON files

### What I learned
How to access an external JSON file in a javascript file

```js
fetch('/data.json')
.then(response => response.json())
.then(
     (json) => {
     jsonData = json}
)
.catch(error => console.error('Loading error'));
```

## Author
- Frontend Mentor - [@royal334](https://www.frontendmentor.io/profile/royal334)
- Twitter - [@SamOtuonye](https://www.twitter.com/SamOtuonye)

