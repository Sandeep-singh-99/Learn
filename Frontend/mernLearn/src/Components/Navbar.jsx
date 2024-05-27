import { NavLink} from "react-router-dom"



const Navbar = () => {
    return (
        <header className="shadow sticky mx-4 mt-5 top-0 ">
            <nav className="bg-white border-gray-400 px-4 py-2.5 lg:px-6">
                <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto ">
                    <NavLink to="/" className="font-bold text-xl">Mern Stack</NavLink>
                    <div className="items-center">
                       <ul className="flex gap-3  font-medium">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="rounded-2xl text-white bg-yellow-700 px-4 py-2">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="rounded-2xl text-white bg-orange-800 px-4 py-2">Register</NavLink>
                        </li>
                       </ul>
                    </div>
                </div>
            </nav>
        </header>


        //  <header className="shadow sticky z-50 top-0 mx-4 mt-5">
        //     <nav className="bg-white border-gray-200 px-4 py-2.5 lg:px-6">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="mr-3 h-12" alt="Logo"/>
        //             </Link>
        //             <div className=" items-center lg:visible">
        //                 <ul className="lg:flex-row  flex gap-3 font-medium">
        //                     <li>
        //                         <NavLink to="/">Home</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/about">About</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/contact">Contact</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/service">Services</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/login">Login</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/register">Register</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>                    
        //         </div>
        //     </nav>
        //  </header>
    )
}

export default Navbar