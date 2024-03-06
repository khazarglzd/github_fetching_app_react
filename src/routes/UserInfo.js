import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsersContainer from "../components/UsersContainer";
import Tabs from "../components/Tabs";

const UserInfo = () => {
    const [user, setUser] = useState([]);
    const [type, setType] = useState("repos");


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
        <div className="py-4">
            {user &&
                user?.map((uinfo, i) => (
                    <div
                        key={i}
                        className="flex md:flex-row
               md:px-0 px-10 ml-20 flex-col gap-10"
                    >
                        <img
                            src={uinfo.avatar_url}
                            className="w-[350px] rounded-full border-4 border-green-300 md:mx-0 mx-auto"
                        />
                        <div className="text-lg leading-10 px-3 ml-6">
                            <h1 className="text-3xl pb-4 pt-6">{uinfo.name}</h1>
                            <h1>
                                <span className="text-green-500">Login Name: </span> :{uinfo.login}
                            </h1>
                            <h1>
                                <span className="text-green-500">Followers: </span>
                                {uinfo.followers}
                            </h1>
                            <h1>
                                <span className="text-green-500">Following: </span>
                                {uinfo.following}
                            </h1>
                            <h1>
                                <span className="text-green-500">Public Repositories: </span>
                                {uinfo.public_repos}
                            </h1>
                            <h1>
                                <span className="text-green-500">Join Date: </span>
                                {new Date(uinfo.created_at).toLocaleDateString()}
                            </h1>
                            <a
                                href={uinfo.html_url}
                                target="_blank"
                                className="text-white
                    font-semibold rounded cursor-pointer  px-4 py-1 bg-green-500 my-3 tracking-wide"
                            >
                                Visit for More
                            </a>
                        </div>
                    </div>
                ))}
            <Tabs type={type} setType={setType} />
        </div>
    );
};

export default UserInfo