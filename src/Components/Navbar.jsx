import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="BG sticky top-0 z-10 border-b-2 border-[#333c49]">
            <div className="navbar max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/messages"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Messages
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a >
                        <Link to={'/'}>
                            <img className="w-[80px] object-contain" src="https://i.ibb.co/b6828Lq/Colorful-Illustrative-Online-Shop-Logo-5.png" alt="" /></Link>
                    </a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu-horizontal px-1 flex gap-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end text-black font-semibold">
                    <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator bg-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">length</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">length Items</span>
                                    <span className="TEXT">Subtotal: $</span>
                                    <div className="card-actions">
                                        <Link to='/showAddCarts' className="btn btn-primary btn-block">View cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;