import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Sidebar from './components/sidebar/sidebar';
import { Navigate } from "react-router-dom";
import useLocalStorage from './hooks/useLocalStorage';
import IFrame from './pages/iframe/iframe';

export function App(){

	const [isOpen, setIsOpen] = useLocalStorage('isOpen', '');
	const listOfItems = ['Home', 'IFrame', 'About'];

    const toggleSidebar = (value:boolean)=>{
        setIsOpen(value)
    }

    const router = createBrowserRouter([
        {path:'/Home', element:<Navigate to='/' />},
        {path:'/', element:<div>Home</div>},
        {path:'/IFrame', element:<IFrame />},
        {path:'/About', element:<div>About</div>},
    ]);

	return(
		<div className='page-wrapper'>
			<Header toggleSidebar={toggleSidebar} isOpen={isOpen}/>
			<div className='content-wrapper'>
				<Sidebar isOpen={isOpen} listOfItems={listOfItems}/>
				<RouterProvider router={router}/>
			</div>
			<Footer/>
		</div>
	)
}
export default App;
