# Odin Project - Library

Demo: [Odin Library](https://kristijanturic.github.io/odin-library/)

Progress Tracker:

- [X] New Book Dialog
- [X] Return the dialog form values and save them in the array
- [X] Notifiy the user if he doesn't enter a value (red outline if empty, lime green outline if entered book)
  - [X] Gotta check if book already in library
- [X] Display the book objects
  - [X] Make a custom element that will display the book information
    - [X] Should be able to remove the element
    - [X] Should be able to toggle from Not Read to Read and vice versa
      - [X] Should also change that parameter in the book array
  - [X] Display one element for each book in the library (array)
  - [X] Display the whole library (dynamic rows and columns based on screen size)
  - [X] Re-work UI position and design
    - [X] When the library is empty (change position of Add Button and starting book displays)
    - [X] When it has many books (change position of Add Button)
  - [X] Automatically save the library locally using a JSON
    - [X] Able to clear all data
      - [X] Give the user feedback when pressing the button
    - [X] Able to remove the book from local storage
  - [X] Read from the locally saved data upon website opening
  - [ ] UI Rework
