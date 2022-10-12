import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Componets/Home/Home';
import Statistics from './Componets/Statistics/Statistics';
import Blog from './Componets/Blog/Blog';

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
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
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
