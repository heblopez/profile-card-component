# Make It Real - Profile Card Component

This is a solution to the Profile Card Component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for your device's screen size
- View hover and focus for interactive elements

### Screenshot

![Desktop version](/src/assets/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

This project helped me to reinforce the use of Tailwind CSS, as it is a utility-first CSS framework that allows for rapid development and styling of components.

```tsx
  function App() {
    return (
      <>
        <div
          className="
            absolute top-[-75vh] left-[-200vw]
            desktop:left-[-25vw]
            desktop:top-[-90vh]
            xl-desktop:left-[-15vw]
            xl-desktop:top-[-50vh]
            w-[978px] h-[978px]
            bg-[url('./assets/bg-pattern-top.svg')]
            bg-no-repeat z-0
          "
        ></div>
        <ProfileCard />
        <div
          className="
            absolute bottom-[-75vh] right-[-200vw]
            desktop:right-[-25vw]
            desktop:bottom-[-90vh]
            xl-desktop:right-[-15vw]
            xl-desktop:bottom-[-50vh]
            w-[978px] h-[978px]
            bg-[url('./assets/bg-pattern-bottom.svg')]
            bg-no-repeat z-0
          "
        ></div>
      </>
    )
  }
```

### Continued development

Working on this project made me notice that Tailwind is very versatile allowing us to create new classes from the configuration file, according to the customization we are looking for our project.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This is the official Tailwind CSS website, where you will find all the Tailwind classes we have available to use, examples of use and how to create classes with custom settings.

## Author

- Website - [Heberth López](https://www.heblopez.web.app)

## Acknowledgments

A special thanks to the MakeItReal team for the knowledge and support provided in each class and the feedback received on each project.