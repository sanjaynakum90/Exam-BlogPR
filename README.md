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
