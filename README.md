
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


