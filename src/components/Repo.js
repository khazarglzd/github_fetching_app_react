import React from "react";

const Repo = ({ users }) => {
    return (
        <>
            {users.map((repo, idx) => (
                <div key={idx} className="flex border rounded-md
                p-3 flex-col  shadow-[0_2px_5px_rgb(0,0,0,0.2)] max-w-xs transition duration-100 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30">
                    <a
                        href={repo.html_url}
                        target="_blank"
                        className="text-green-500 break-words font-semibold hover:underline"
                    >
                        {repo.full_name}
                    </a>
                    <div className="flex gap-x-5">
                        <h1 className="text-sm font-semibold">{repo.language}</h1>
                        <h1 className="text-sm font-semibold">Forks: {repo.forks}</h1>
                        <h1 className="text-sm font-semibold">
                            Stars: {repo.stargazers_count}
                        </h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Repo;