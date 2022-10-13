import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
           <div className='blog'>
            <h1>What is the purpose of react router?</h1>
            <p>A utility that enables dynamic routing for managing routes in a web application. Unlike the previous routing architecture, which handled the routing in a configuration separate from a running app, dynamic routing takes place as the app is rendering on your computer. Component-based routing is implemented via React Router. Depending on the requirements of the application and platform, it offers various routing components.</p>
           </div>
           <div className='blog'>
            <h1>
                How does Context Api Works?
            </h1>
            <p>Context API is a React API that can address many of the issues that contemporary apps have with state management and the way that state is passed to their components. Context API is a simple alternative to adding a state management library in your project, which would ultimately slow down project performance and increase bundle size.</p>
           </div>
           <div className='blog'>
            <h1 >
               What is useRef? 
            </h1>
            <p>A hook is a unique function that makes it possible to leverage state and other React capabilities without having to write ES6 class components, which are typically thought of as being challenging to comprehend, use, and master.
The React Hooks API includes the useRef hook. It is a function that only accepts one argument at most and outputs an Object. The argument supplied to useRef is the value of the current property on the returned object. Its current property is set to undefined if it is invoked without a parameter. The useRef hook in functional components is demonstrated in the code below.</p>
           </div>
            
        </div>
    );
};

export default Blog;