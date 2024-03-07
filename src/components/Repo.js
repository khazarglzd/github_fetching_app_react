import React from "react";

const Repo = ({ users }) => {
    return (
        <>
            {users.map((repo, idx) => (
                <div key={idx} className="bg-white p-3 leading-8">
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