# Exam Blog API - README.md

````md
# 📝 Exam Blog API

A RESTful Blog API built with Node.js, Express.js, MongoDB, JWT Authentication, and Cloudinary image upload support.

---

# 🚀 Features

- User Authentication (Register/Login/Logout)
- JWT Token Authorization
- Create Blog with Image Upload
- Update Blog
- Delete Blog
- Get All Blogs
- Get My Blogs
- User Management
- Logout from All Devices

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary
- Multer
- Postman

---

# 📁 Base URL

```bash
http://localhost:PORT
````

Example:

```bash
http://localhost:5000
```

---

# 🔐 Authentication

Protected routes require Bearer Token.

Add token in headers:

```bash
Authorization: Bearer YOUR_TOKEN
```

---

# 👤 USER ROUTES

---

## 1️⃣ Register User

### URL

```http
POST /user/register
<img width="1570" height="932" alt="Screenshot 2026-05-07 122949" src="https://github.com/user-attachments/assets/812e1ff1-0149-4c7d-9039-a4cc6243b0d2" />

```

### Request Body

```json
{
  "name": "amit01",
  "email": "amit01@gmail.com",
  "phone": "6353451818",
  "password": "sanjay@55",
  "role": "admin"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## 2️⃣ Login User

### URL

```http
POST /user/login
<img width="1572" height="929" alt="Screenshot 2026-05-07 122901" src="https://github.com/user-attachments/assets/e5906102-5b71-48ba-99fd-d8f1b1ad61d3" />

```

### Request Body

```json
{
  "email": "sanjay01@gmail.com",
  "password": "sanjay@55"
}
```

### Response

```json
{
  "success": true,
  "message": "login successful",
  "token": "JWT_TOKEN"
}
```

---

## 3️⃣ Logout User

### URL

```http
POST /user/logOut

<img width="1571" height="903" alt="Screenshot 2026-05-07 122854" src="https://github.com/user-attachments/assets/28403fca-a369-4f6d-9904-7bf6cea17680" />

```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
{
  "success": true,
  "message": "user logOut successful"
}
```

---

## 4️⃣ Logout All Devices

### URL

```http
POST /user/logOutAll

<img width="1567" height="924" alt="Screenshot 2026-05-07 123543" src="https://github.com/user-attachments/assets/24870512-b629-42ff-a02f-5ba29cde4344" />

```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
{
  "success": true,
  "message": "user logOut form all device"
}
```

---

## 5️⃣ Get All Users

### URL

```http
GET /user/getAll

<img width="1568" height="948" alt="Screenshot 2026-05-07 124515" src="https://github.com/user-attachments/assets/808a2946-bcb0-41b7-a1fc-76523eb9e913" />

```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
{
  "success": true,
  "users": []
}
```

---

## 6️⃣ Update User

### URL

```http
PATCH /user/update

<img width="1567" height="912" alt="Screenshot 2026-05-07 124935" src="https://github.com/user-attachments/assets/87399878-cbb3-4c59-bb46-ab123ec51aac" />

```

### Request Body

```json
{
  "name": "krushnalBhatti",
  "phone": "7878787879"
}
```

### Response

```json
{
  "success": true,
  "message": "user data updated successfully"
}
```

---

## 7️⃣ Delete User

### URL

```http
DELETE /user/delete

<img width="1569" height="971" alt="Screenshot 2026-05-07 125708" src="https://github.com/user-attachments/assets/61f69748-db68-4bc0-a68d-d560fd75b5de" />

```

### Request Body

```json
{
  "email": "jay01@gmail.com"
}
```

### Response

```json
{
  "success": true,
  "message": "user deleted successfully"
}
```

---

# 📰 BLOG ROUTES

---

## 1️⃣ Add Blog

### URL

```http
POST /blog/add

<img width="1558" height="970" alt="Screenshot 2026-05-07 134119" src="https://github.com/user-attachments/assets/103ba38c-19d0-4f32-af91-094dadb9e8e4" />

```

### Body (form-data)

| Key       | Type | Value                                |
| --------- | ---- | ------------------------------------ |
| title     | Text | the oddesy                           |
| content   | Text | historical,adventure,thriller,action |
| blogImage | File | image file                           |

### Response

```json
{
  "success": true,
  "message": "Blog created successfully"
}
```

---

## 2️⃣ Get All Blogs

### URL

```http
GET /blog/getAllBlog

<img width="1555" height="913" alt="Screenshot 2026-05-07 134656" src="https://github.com/user-attachments/assets/7dc1f4c9-be7f-4f33-b530-1dbb8c76a0b2" />

```

### Response

```json
{
  "success": true,
  "blogs": []
}
```

---

## 3️⃣ Get My Blogs

### URL

```http
GET /blog/getMyBlogs

<img width="1564" height="987" alt="Screenshot 2026-05-07 140535" src="https://github.com/user-attachments/assets/243121e2-155c-486e-a6be-1d7f2f123ec9" />

```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
{
  "success": true,
  "blogs": []
}
```

---

## 4️⃣ Update Blog

### URL

```http
PATCH /blog/update/:id

<img width="1575" height="956" alt="Screenshot 2026-05-07 143020" src="https://github.com/user-attachments/assets/efbb6420-402b-45fc-8a94-223e7b55d3ea" />

```

### Example

```http
PATCH /blog/update/69fc49914edaa5c307945e58
```

### Request Body

```json
{
  "title": "The oddesy",
  "content": "horrer,thriller,adventure,action",
  "isPublished": true
}
```

### Response

```json
{
  "success": true,
  "message": "Blog updated successfully"
}
```

---

## 5️⃣ Delete Blog

### URL

```http
DELETE /blog/deleteBlog/:id

<img width="1568" height="977" alt="Screenshot 2026-05-07 142819" src="https://github.com/user-attachments/assets/12054dd4-af05-4847-baf2-5fed504b9e36" />

```

### Example

```http
DELETE /blog/deleteBlog/69fc490b0d8b74229384cd90
```

### Response

```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

---

# 📦 Installation

```bash
git clone YOUR_GITHUB_REPO_LINK
```

```bash
cd project-folder
```

```bash
npm install
```

---

# ⚙️ Environment Variables

Create `.env` file:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URL

JWT_SECRET=YOUR_SECRET_KEY

CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

---

# ▶️ Run Project

```bash
npm run dev
```

or

```bash
npm start
```

---

# 🧪 API Testing

Use Postman for testing all APIs.



```
```
