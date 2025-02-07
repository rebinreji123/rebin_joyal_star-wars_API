# rebin_joyal_star-wars_API
 
# Movie API Project - README

## Overview
This project is a web application that fetches and displays a list of characters from the Star Wars universe using the Star Wars API (SWAPI). The application provides detailed information about the movies associated with each character, including movie titles and opening crawls. The main goal of the project is to create an interactive and visually engaging experience for users to explore the Star Wars characters and their movies.

## Team Members
- **Rebin Reji Vazhavilayil** 
- **Joyal Gregory** 

## Project Structure
The project is divided into three main sections:
1. **Character Cards:** Displays the list of characters with images and names. Each character card is clickable and leads to a section with movie details related to that character.
2. **Movie Details:** Displays the movies related to a selected character. The movies include the movie title and its opening crawl.

## Functionality
- **Fetching Characters:** The app fetches data about Star Wars characters from the SWAPI (https://swapi.dev/api/people) and displays it as character cards. Each card shows the character's name and image (if available).
- **Fetching Movies:** When a character card is clicked, the app fetches the list of movies that the character appears in, using the movie URLs from the character data. The movie title and opening crawl are displayed in a section below the character cards.

## Technologies Used
- **HTML5** for the structure of the web pages.
- **CSS3** for styling and layout.
- **JavaScript** for interactivity and fetching data from the SWAPI.

## Instructions
1. Clone the repository or download the files to your local machine.
2. Open the `index.html` file in a web browser to view the application.
3. The character cards will load automatically, and you can click on any character to see the movies they appear in.

## Notes
- The character images are mapped to their respective names, but in case the character's image is not available, a default image is shown.
- The movie details (title and opening crawl) are fetched asynchronously, so there may be a short delay while loading the data.


This project was developed as part of a course project, with collaboration between Rebin Reji Vazhavilayil and Joyal Gregory.