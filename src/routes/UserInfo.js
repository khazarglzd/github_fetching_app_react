import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsersContainer from "../components/UsersContainer";

const UserInfo = () => {
    const [user, setUser] = useState([]);


    let EndPoint = "https://api.github.com/users";
    const { pathname } = useLocation();
    const navigate = useNavigate();



    async function GetUserInfo() {
        const res = await fetch(EndPoint + pathname);
        const data = await res.json();
        setUser(() => [data]);
    }


    useEffect(() => {
        GetUserInfo();
    }, [pathname]);

    return (
        <div className="py-5">
            <button
                onClick={() => navigate("/")}
                className="px-5 py-1 font-medium mx-1 my-4 bg-green-600 rounded text-white"
            >
                BACK
            </button>
            {user &&
                user?.map((uinfo, i) => (
                    <div
                        key={i}
                        className="flex justify-center md:flex-row
               md:px-0 px-4 flex-col gap-10"
                    >
                        <img
                            src={uinfo.avatar_url}
                            className="w-[350px] rounded-full border-4 border-green-300 md:mx-0 mx-auto"
                        />
                        <div className="text-lg leading-10 px-3">
                            <h1 className="text-3xl pb-4">{uinfo.name}</h1>
                            <h1>
                                <span className="text-green-500">Login_name</span> :{uinfo.login}
                            </h1>
                            <h1>
                                <span className="text-green-500">followers : </span>
                                {uinfo.followers}
                            </h1>
                            <h1>
                                <span className="text-green-500">following : </span>
                                {uinfo.following}
                            </h1>
                            <h1>
                                <span className="text-green-500">public_repositories : </span>
                                {uinfo.public_repos}
                            </h1>
                            <h1>
                                <span className="text-green-500">Join : </span>
                                {new Date(uinfo.created_at).toLocaleDateString()}
                            </h1>
                            <a
                                href={uinfo.html_url}
                                target="_blank"
                                className="text-white
                    font-semibold rounded cursor-pointer  px-4 py-1 bg-green-600 my-3 tracking-wide"
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                ))}

        </div>
    );
};

export default UserInfo