import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Componets/Home/Home';
import Statistics from './Componets/Statistics/Statistics';
import Blog from './Componets/Blog/Blog';
import Quiz from './Componets/Quiz/Quiz';


function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
           const topicsData= await fetch('https://openapi.programming-hero.com/api/quiz')  
           const topics= await topicsData.json()
           return topics
          }  , 
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: async() => {
            const topicsData= await fetch('https://openapi.programming-hero.com/api/quiz')  
            const topics= await topicsData.json()
            return topics
           }  ,
          element: <Statistics></Statistics>
        },
        
        {
          path: '/home',
          element: <Blog></Blog>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
        ,
        {
          path: "/quiz/:id",    
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          
          },
          element: <Quiz></Quiz>
        },
        {
          path:'*',
          element: <div>This Route not found</div>
        }

      ]
    }
  ])
  return (
    <div className="App">
     
       
        <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
