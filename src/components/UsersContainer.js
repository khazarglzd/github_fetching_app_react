import React from 'react'
import { Link } from "react-router-dom"

const UsersContainer = ({ users }) => {
    return (
        <div className="flex gap-5 flex-wrap justify-center  py-5">
            {users &&
                users?.map((user, idx) =>
                    user?.login ? (
                        <Link to={`/${user?.login}`}>
                            <div
                                key={idx}
                                className="flex w-[200px] border border-gray-500 rounded-md
                p-3 flex-col items-center"
                            >
                                <img
                                    src={user?.avatar_url}
                                    className="w-24 mb-4 border-4  border-gray-400 rounded-full"
                                />

                                <h1 className="text-xl">{user?.login}</h1>
                                <h1 className="text-xs text-gray-800">{user?.name}</h1>

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