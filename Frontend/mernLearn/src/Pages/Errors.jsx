import { NavLink } from "react-router-dom";


 const Errors = () => {
    
    <section>
        <div className="bg-black">
            <h1 className="text-black">404</h1>
            <h4>Sorry! page not found</h4>
            <p>
                Oops! it seems like the page you're trying to access doesn't exist if you belive there's an issue, feel free to report it,
                and we'll look into it.
            </p>
            <div>
                <NavLink to="/">return Home</NavLink>
                <NavLink to="/contact">Report Problem</NavLink>
            </div>
        </div>
    </section>

};

export default Errors
