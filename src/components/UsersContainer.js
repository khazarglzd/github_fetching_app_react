import React from 'react'
import { Link } from "react-router-dom"

const UsersContainer = ({ users }) => {
    return (
        <div className="flex gap-4 flex-wrap justify-center mt-4 py-5">
            {users &&
                users?.map((user, index) =>
                    user?.login ? (
                        <Link to={`/${user?.login}`}>
                            <div
                                key={index}
                                className="flex w-[250px] h-[250px] border rounded-md
                p-3 flex-col items-center shadow-[0_2px_5px_rgb(0,0,0,0.2)] max-w-xs transition duration-100 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30"
                            >
                                <img
                                    src={user?.avatar_url}
                                    className="w-32 mb-8 mt-4 border-2  border-green-200 rounded-full"
                                />

                                <h1 className="text-xl">{user?.login}</h1>

                            </div>
                        </Link>
                    ) : (
                        <div className="text-lg">No user</div>
                    )
                )}
        </div>
    );
}

export default UsersContainer