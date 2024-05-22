# HasnathAhmedTamim-LandingPage-Challenge

## Project Goal

This project is a landing page and buy products with user interface built with ReactJS, Vite, and Tailwind CSS, adhering to a provided design. It features a cart functionality form and a data display area showcasing products results.

## Technology Stack

- Frontend: HTML, CSS, Tailwind CSS, React.js, Vite, Swiper ,React Router Dom

## Setup and Usage

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser.


## Development Process

First of utilized React Router to define routes for different components within the application. The Layout component serves as the main structure, rendering child components based on the selected route. 

Components are organized within dedicated folders:

- `src/pages`: Contains components for specific functionalities like `Home.jsx` ,`Products.jsx`,`Features.jsx` , `AboutUs.jsx` ,`ContactUs.jsx`

- `src/components/NavBar/NavBar.jsx`: Navbar created

- `src/components`: contains components like `/src/components/NavBar/NavBar.jsx`, `/src/components/Banner/Banner.jsx`, `/src/components/BuyEasyStep/BuyEasyStep.jsx` ,`/src/components/DiscountProducts/DiscountProducts.jsx`, `/src/components/Products` , `/src/components/ProductCard/ProductCard.jsx` ,`/src/components/Modal/Modal.jsx` and `src/components/CartList/CartList.jsx`.

- `src/components/ProductCard/ProductCard.jsx`: In this Component i did product card structure then mapping over data to render that products card.
-`src/components/Modal/Modal.jsx` : in this component add cart product functionality did

- `src/main.jsx`: Render the child components based on the route in Layout Folder which is Main component

- The App component defines the main layout for your React application using React Router. It renders a navigation bar (`NavBar`), a content area (`Outlet` for child routes), and a footer (`Footer`), providing the overall structure for your application's pages.

## Projects Links

* Live Link: [Live Link](https://hasnath-ahmed-tamim-landing-page-challenge.vercel.app/)
* Repo Link: [Github](https://github.com/HasnathAhmedTamim/HasnathAhmedTamim-Landing-Page-Challenge)

## Author

Hasnath Ahmed Tamim

## Contact

Feel free to reach out with any questions:

* [LinkedIn](https://www.linkedin.com/in/hasnath-ahmed-tamim/)
* [FaceBook](https://www.facebook.com/HasnathAhmedTamim)

# VIDEO DEPLOY
* [Deploy Video](https://drive.google.com/file/d/1vuCkNYYuKvy_aWcxHpIYEJ0l-jnZt6r1/view?usp=sharing)