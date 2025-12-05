# Ecommerce MERN Stack — Deployed on AWS
A full-stack E-commerce Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and deployed end-to-end on Amazon Web Services (AWS) using S3, CloudFront, EC2, Route53, IAM and MongoDB Atlas.

This project includes full user shopping features, admin management, cart and order functionality, Cloudinary image upload, and COD checkout.
## 🌍 Live Demo 
⚠️ Live demo is currently offline (https://shop.theawsn.shop/).
All AWS services (EC2, S3, CloudFront, Route53) were deleted to stop charges.
Only screenshots are included as proof of deployment.
## Screenshots
All the screenshots are in this folder:
👉 [Click here to view screenshots](Screenshots)
## ⚙️ Tech Stack
### Frontend
- React.js
- React Router
- Axios
- Tailwind / CSS
### Backend
- Node.js
- Express.js
- JWT Authentication
- Cloudinary Image Upload
### Database
- MongoDB Atlas
### AWS Services (Previously Used, Now Deleted)
- S3 (React hosting)
- CloudFront (CDN + HTTPS)
- EC2 (Backend server)
- Route53 (Custom domain)
- IAM (Permissions)
- Security Groups
## 🎯 Features
### 👤 User Features
- Register / Login
- View products
- Product details page
- Add to Cart / Remove from Cart
- COD 
- Order history
- Profile management
### 🛠 Admin Features
- Admin login
- Add new products
- Update products
- Delete products
- Cloudinary image upload
- Manage all orders
- Update order status
## 📂 Project Structure

```
root
├── client/               → React frontend
│   ├── src/
│   └── public/
│
├── server/               → Node backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Screenshots/          → Contains all project screenshots
│
└── README.md
```
## 🚀 Local Setup
### 1️⃣ Clone repository
``` git clone https://github.com/barik-bijayalaxmi/AWS-Ecommerce-project.git ```
### 2️⃣ Frontend setup
```
cd client
npm install
npm start
```
### 3️⃣ Backend setup
```
cd server
npm install
npm start
```
### Create .env inside server folder:
```
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret
CLOUDINARY_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```
## ☁️ AWS Deployment Guide (Used Earlier, Now Removed)
### 1. Deploy React App on S3 + CloudFront
Build app
``` npm run build ```
S3
- Create bucket
- Disable block public access
- Upload build/ files
- Enable static hosting

CloudFront
- Create distribution
- Origin: S3 website endpoint
- Redirect HTTP → HTTPS

### 2. Deploy Backend on EC2
- Launch Instance
- Ubuntu 22.04
- t2.micro
- Allow ports: 22, 80, 5000
Install and run backend
```
sudo apt update
sudo apt install git nodejs npm -y
git clone your-repo-url
cd server
npm install
npm start
```
Use PM2
```
pm2 start server.js
pm2 save
pm2 startup
```
###  3. Domain Setup (Route53)**
- Create hosted zone  
- Add A record pointing to CloudFront (ex- shop.theawsn.shop)  
- Add A record for API → EC2 public IP (ex- api.theawsn.shop)
### 4.Connect Frontend to Backend
In React file:
https://localhost:5000/...

Replace it with:

https://api.theawsn.shop/...

##  🏗 Architecture Diagram
```
               Route 53 (Domain)
                       │
         shop.theawsn.shop  &  api.theawsn.shop
                       │
                CloudFront (CDN)
                       │
                S3 (React Frontend)
                       │
               EC2 (Node.js Backend)
                       │
             MongoDB Atlas (Database)
```
## 📦 Production Commands
### Frontend
```bash
npm run build
```
### Backend
```bash
pm2 restart all
```
## Name
Bijayalaxmi Barik

https://github.com/barik-bijayalaxmi/AWS-Ecommerce-project.git
