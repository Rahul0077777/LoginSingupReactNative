How to Run the Project

Prerequisites

Ensure you have the following installed on your system:

Node.js (>= 14.x)

Expo Go app installed on your mobile device (available on iOS and Android app stores)

Steps to Run

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Start the Expo development server:

expo start

Open the app:

Use the Expo Go app on your phone to scan the QR code displayed in the terminal or browser.

Alternatively, click on the "Run on Android device/emulator" or "Run on iOS simulator" options if you have emulators set up.

Test the app’s functionality:

Navigate between the Login and Signup screens.

Test form validation, Remember Me functionality, and password strength indicator.

Design Choices Made

User Interface (UI)

Modern Aesthetic:

A visually appealing gradient background image adds depth to the app.

Images at the top of each screen (Login and Signup) provide visual context.

Clear Typography:

Bold and readable text ensures accessibility and clarity.

Consistent font sizes and color schemes across the app for uniformity.

User Experience (UX)

Form Validation:

Real-time error messages ensure the user knows how to correct inputs.

Validation schemas built with Formik and Yup to enforce proper formatting (e.g., valid email, strong password).

Password Strength Indicator:

Guides users to create a secure password with visual feedback (Weak, Medium, Strong).

Remember Me Checkbox:

Offers convenience by saving the user's email for future logins using AsyncStorage.

Navigation Flow:

Intuitive navigation between Login and Signup screens using React Navigation.

Technical Design

TypeScript Integration:

Ensures type safety and reduces potential runtime errors.

Modular Components:

Each screen (Login and Signup) is encapsulated in its own file for maintainability.

Formik and Yup:

Handles form state management and validation efficiently.

Assumptions and Limitations

Assumptions

Form Validation Scope:

Email validation ensures proper email formatting.

Password strength checks length and inclusion of uppercase letters and digits.

User Authentication:

The app assumes the login/signup submission is successful without backend integration.

Device Storage:

The Remember Me functionality stores the email in AsyncStorage for demonstration purposes.

Limitations

No Backend Integration:

The app does not connect to a server for authentication or data persistence.

Limited Password Validation:

Password strength is evaluated with basic rules and does not include advanced checks (e.g., special characters).

Accessibility Improvements:

While basic ARIA labels and accessible colors are included, further enhancements (e.g., screen reader testing) are pending.#   L o g i n S i n g u p R e a c t N a t i v e  
 #   L o g i n S i n g u p R e a c t N a t i v e  
 #   L o g i n S i n g u p R e a c t N a t i v e  
 