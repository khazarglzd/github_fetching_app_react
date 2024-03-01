import React from "react";
import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/" >
            <div className="flex mb-4 mt-4 pb-2 justify-center items-center border-b border-gray-500">

                <img
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png"
                    alt="logo"
                    className="w-24 mb-4 bg-white rounded-full"
                />
                <h1 className="text-2xl px-2 mb-4 mt-4"> Fetching Github Users App</h1>

            </div>
        </Link>
    );
};

export default Logo;