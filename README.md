# local-zoo

## Description

#### _**This site provides the ability for a zoo to track thier animals along with those animal's particular needs.**_

#### _**By Tyler Stephenson, June 09, 2017**_

### Setup/Installation Requirements
* clone <link to repo>
* cd <local repo>
* run this series of commands:
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`

## Planning

1. Specs
  * Use Bootstrap for base styling.
  * Animal model.
    * Base
      * Species - string
      * Name - string
      * Age - number
      * Diet - string
      * Location - string
      * Caretakers - number
      * Sex - string
      * Likes - string
      * Dislikes - string
    * Expansion
      * Likes - as an array of strings
      * Dislikes - as an array of strings
      * Created - timestamp
  * Animal functions.
    * Base
      * Create
      * Update
      * Delete
      * Find all animals
      * Find a given animal
      * Find only young animals
      * Find only mature animals
    * Expansion
      * Find the total number of caretakers need in a day
      * Add a timestamp to record when the animal is added
      * Add aditional search features
        * Species
        * Diet
        * Display the number of caretakers needed for the resulting search.
        * Display the average age of the resulting search.
      * Make likes and dislikes an array with crud functionality.
2. User Stories
  * I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
  * I want to view a list of animals I have logged.
  * I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age).
  * I want to click an animal to edit its name, age or caretakers.

3. Integration
  * index/homepage.
    * List Animals
      * Animal Detail
        * List Likes/Dislikes ?future
          * Edit Likes/Dislikes ?future
        * Edit Animal
    * New Animal  
  * About. ?future
  * Contact. ?future

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor
  * Make README awesome

### Known Bugs
List known bugs or issues here

## Support and Contact details
* Tyler Stephenson
* ilduchea@gmail.com

### Technologies Used

* Typescript
* AngularJS
* HTML5
* CSS
* Bootstrap
* jQuery
* node.js

### License

*This is web page is licensed under the MIT License.*

Copyright (c) 2017 **Tyler Stephenson**
