import React from "react";

const Logo = () => {
    return (
        <div className="flex mb-4 mt-4 pb-2 justify-center items-center border-b border-gray-500">
            <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png"
                alt="logo"
                className="w-24 mb-4 bg-white rounded-full"
            />
            <h1 className="text-2xl px-2 mb-4 mt-4"> Fetching Github Users App</h1>
        </div>
    );
};

export default Logo;