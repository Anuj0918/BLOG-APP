# Blog Website

## Description

This project serves as a comprehensive guide and record of the steps and challenges faced while creating a blog website. 
It details the installation of necessary packages, setting up environment variables, and configuring Appwrite for database operations. 
The project also involves frontend development with a component-based UI and state management using Redux-Toolkit.

## Prerequisites

To get started, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Appwrite

 ## Setup Guide
# 1.  Install Required Packages

Begin by installing all the necessary packages. This includes dependencies for both frontend and backend operations.

npm install

## 2. Setup Environment Variables
- Create a .env file in the root of your project.
- Add the environment variables to the .env file in Root of project from the .env.sample replacing the placeholders with your actual Appwrite project details:

 ##  3. Configure Appwrite
To get Appwrite up and running, follow these steps:

 1. Appwrite URL: Locate and set the appwriteUrl environment variable
 2.  2. Database ID: Create a database ID in Appwrite.
 3. Collection ID: Create a collection ID within the database. Configure the collection to specify who can perform CRUD operations.
 4. Bucket ID: Create a bucket ID for storage needs.

## 4. Authentication Settings
Set up authentication services on Appwrite to manage user logins, signups, and other related operations. This can also be adapted for other databases like Firebase .

## 5. Frontend Structure
The frontend is structured using separate components for each UI element, ensuring a modular and maintainable codebase.

## Problems Faced

Throughout the project, several challenges were encountered:

 - Redux Toolkit and React Component-Based UI: Learning Redux Toolkit for state management and creating a component-based UI in React were challenging but essential parts of the frontend development process.
 - Learning Appwrite: Initially, understanding the Appwrite database was difficult due to unfamiliarity with the service.
 - User Authentication and CRUD Operations: Implementing user login, signup, and CRUD operations for blogs was a new and educational experience.
 - Backend Development: Developing the backend services provided valuable insights and learning opportunities.
 - TinyMCE Integration: Incorporating TinyMCE for rich text editing required understanding its API and configuration.

## Learnings

This project was a significant learning experience, offering practical knowledge applicable to real-world projects. Key takeaways include:

- Production-Level Code: Writing and maintaining production-level code.
- State Management: Implementing state management using Redux-Toolkit, as taught by Hitesh Choudhary in his "Chai Aur React" series.
- Component-Based UI: Developing a React application with a modular and reusable component-based UI.
- Rich Text Editing: Integrating TinyMCE for a rich text editing experience.
