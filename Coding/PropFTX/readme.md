# Movie Listing App

A minimal full-stack Movie Listing application built with **React**, **Node.js**, **Express**, and **MongoDB**, designed as part of an assignment to demonstrate core skills in the **MERN** stack. Deployed on **Netlify** and **Render**.

🔗 **Frontend Live Demo**: [https://propftx-ft37-469.netlify.app/](https://propftx-ft37-469.netlify.app/)

🔗 **Backend API**: [https://propftx-f3ti.onrender.com](https://propftx-f3ti.onrender.com)

🔗 **Presentation Video**: [https://youtu.be/cyF5QS5eHlg?si=kkGXxJr5tfHZXiVy](https://youtu.be/cyF5QS5eHlg?si=kkGXxJr5tfHZXiVy)

🔗 **Video download link**: [https://drive.google.com/file/d/1UG8k2zWhyfF0szc0paz2BFavc3kRymPx/view?usp=sharing](https://drive.google.com/file/d/1UG8k2zWhyfF0szc0paz2BFavc3kRymPx/view?usp=sharing)

---

## Overview

This project is a simple movie listing platform that allows users to:

* Register and log in
* View a list of movies (from static data via backend)
* Add movies to their watchlist
* Remove movies from the watchlist

The goal was to create a clean, functional interface with basic authentication and dynamic movie data handling through a custom-built backend.

---

## Folder Structure

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┗ 📜Navbar.jsx
 ┣ 📂pages
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Movies.jsx
 ┃ ┣ 📜Register.jsx
 ┃ ┗ 📜Watchlist.jsx
 ┣ 📜api.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜authContext.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

---

## Tech Stack

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT-based login & registration

---

## Features Implemented

* User Registration & Login
* Display Movies (from static dataset via backend)
* Add to Watchlist
* Remove from Watchlist
* State management via Context API
* Responsive design with Tailwind CSS

---

## How to Run Locally

### Backend

1. Clone the backend repository (if separate).
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file for MongoDB URI and JWT secret.
4. Start the server:

   ```bash
   npm start
   ```

### Frontend

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Update API URLs if needed in `api.jsx`.
4. Run the React app:

   ```bash
   npm run dev
   ```

---

## Future Improvements

* User Reviews and Ratings
* Movie Recommendation System
* Movie Posters from TMDB or OMDB APIs
* Search & Filter Functionality
* Better Error Handling and Edge Case Management

---

## Assignment Objectives Recap

* Node.js backend with Express
* MongoDB used for storage
* Basic CRUD via backend (handled internally for static data)
* React frontend with simple UI
* Authentication (Register/Login)
* Watchlist functionality

---

