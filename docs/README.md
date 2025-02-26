# Venue Reservation System

## Setup Instructions

Follow the steps below to set up and run the Venue Reservation system on your local machine.

---

### Database Setup

Navigate to the `database` directory and run the following commands:

```sh
cd Venue-Reservation/database
```

1. Start the database using Docker:

   ```sh
   docker compose up --build
   ```

2. Install Prisma:

   ```sh
   npm install prisma --save-dev
   ```

3. Install TypeScript Node:

   ```sh
   npm install ts-node --save-dev
   ```

4. Generate Prisma client:

   ```sh
   npx prisma generate
   ```

5. Run database migrations:

   ```sh
   npx prisma migrate dev --name <migration-name>
   ```

6. Seed the database:

   ```sh
   # For Windows
   npx prisma db seed
   
   # For Linux
   npx --no-install prisma db seed
   ```

#### Prisma Course Reference:
For a better understanding of Prisma, refer to this course: [Prisma Course](https://youtu.be/RebA5J-rlwg?si=ux-b0e6nJlb7pVgl)

---

### Application Setup

Navigate to the `venue-reservation` directory and run the following commands:

```sh
cd venue-Reservation
```

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

---

### Environment Variables

Create a `.env` file in the root directory and configure the necessary environment variables:

```ini
DATABASE_URL=<your-database-url>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-random-secret>
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=<your-email>
EMAIL_SERVER_PASSWORD=<your-email-password>
EMAIL_FROM=<your-email>
AUTH_SECRET=<your-random-secret>
BASE_URL=http://localhost:3000
JWT_SECRET=<your-random-jwt-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CLOUD_PROJECT_ID=<your-google-cloud-project-id>
GOOGLE_CLOUD_BUCKET_NAME=<your-google-cloud-bucket>
GOOGLE_CLIENT_EMAIL=<your-google-service-account-email>
GOOGLE_CLOUD_CREDENTIALS=<your-google-cloud-credentials>
```

> **Note:** Never share your `.env` file publicly or commit it to version control. Always use `.env.example` for sharing environment variable structures.

---

### Additional Notes
- Ensure Docker is installed and running before starting the database.
- Use environment variables to secure sensitive credentials.
- If you encounter issues, verify that your `.env` file is correctly configured.

---

### License


---

### Contributors
Feel free to contribute to the project by submitting pull requests or reporting issues.

Happy Coding! 🚀

