# Chat server
![GitHub](https://img.shields.io/github/license/I-Atlas/chat-server?style=flat-square)
[![Iliya Bolotov](https://img.shields.io/badge/iliya-bolotov-%23ff6f61?style=flat-square&logo=appveyor)](https://github.com/I-Atlas)

Api for my [chat application](https://github.com/I-Atlas/chat-client).
## 👨‍💻 Technologies used
- TypeScript
- Node.js
- Express
- MongoDB
- Nodemailer
- Cloudinary
- JWT
- Socket.io

## 🚀 Getting started
### 🧰 Setup
```
npm install && npm start
```
```
yarn && yarn start
```
### 📧 Nodemailer
1. Register at mailtrap.io
2. Log into the account of this service.
3. In the "Inboxes" list, open "Demo inbox".
4. After that, you will see information about your test SMTP and POP3 server.
5. Open the .env file (if not, copy .env.example and rename to .env)
Specify in NODEMAILER_HOST, etc. the data that mailtrap.io gave you
restart the server.
1. After each registration of an account in the chat, in the section "Demo inbox" (Mailtrap) you will receive letters with the account confirmation.
2. You can also verify your account without the Mailtrap service. Just find your user in the database and tell him confirmed: true or follow the link `http://localhost:{FRONTEND_PORT}/signup/verify?Hash={HASH}.`
### ☁️ Cloudinary
1. Register at cloudinary.com
2. Log into the account of this service.
3. In the dashboard page, open "Account Details".
4. Open the .env file (if not, copy .env.example and rename to .env)
and paste your data.

## ⚙️ .env
```
- NODE_ENV=development
- PORT=3003

- JWT_SECRET=secret
- JWT_MAX_AGE=7d

- NODEMAILER_HOST=smtp.mailtrap.io
- NODEMAILER_PORT=2525
- NODEMAILER_USER=user
- NODEMAILER_PASS=pass

- CLOUDINARY_NAME=name
- CLOUDINARY_API_KEY=key
- CLOUDINARY_API_SECRET=secret
```
## 📄 License
The project is licensed under the [Apache license 2.0](https://github.com/I-Atlas/chat-server/blob/main/LICENSE).