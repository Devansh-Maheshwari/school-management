# School Management API

## Overview
This project is a **Node.js API** for managing school data using **Express.js** and **MySQL**. It allows users to **add new schools** and **retrieve a list of schools sorted by proximity** to a given location.

## Features
- **Add a School**: Store school details in the database.
- **List Schools by Proximity**: Retrieve and sort schools based on user location.
- **Database Integration**: Uses MySQL with Sequelize ORM.
- **Environment Variables**: Uses dotenv for configuration.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL (with Sequelize ORM)
- **Tools**: Postman, GitHub, dotenv

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/Devansh-Maheshwari/school-management.git
cd school-management
```
### 1. install dependancies
```sh
npm install
```
### 3. Configure Environment Variables
Create a .env file in the root directory 

### 5. Run the Application
```sh
npm start 
```

## API Reference

#### **Add a School**

```http
  POST /api/addSchool
```
 **Description**: Adds a new school to the database.

- **Request Body:**
```
{
  "name": "ABC School",
  "address": "123 Main St",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```
- **Response:***
```
{
  "message": "School added successfully",
  "schoolId": 1
}
```
---
####  **List Schools**

```http
  GET /api/listSchools?latitude=37.7749&longitude=-122.4194
```
**Description:** Returns a list of schools sorted by distance.
- **Response:**
```
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance": 2.5
  }
]
```


