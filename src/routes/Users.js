import React, { useState, useEffect, useRef } from 'react'
import UsersContainer from '../components/UsersContainer';
import Loading from '../components/Loading';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    const user = useRef("");
    let EndPoint = "https://api.github.com/users";

    async function AllUsers() {
        if (user.current.value === "") {
            setLoading(true);
            const res = await fetch(EndPoint);
            const data = await res.json();
            setUsers(data);
            setLoading(null);
        }
    }

    async function FindUser(e) {
        setLoading(true);
        if (user.current.value !== "") {
            setUsers("");
            const res = await fetch(EndPoint + "/" + user.current.value);
            const data = await res.json();
            setUsers(() => [data]);
            console.log(users);
            user.current.value = "";
        } else {
            AllUsers();
        }
        setLoading(null);
    }


    useEffect(() => {
        AllUsers();
    }, [user, setUsers]);


    return (
        <div>
            <div class="mb-3 flex justify-center">
                <div class="flex w-[50%] flex-wrap items-center">
                    <input
                        type="text"
                        class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border outline-none border-solid border-green-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700"
                        placeholder="Search a user..."
                        aria-label="Search"
                        aria-describedby="button-addon1"
                        ref={user}
                    />


                    <button
                        class="relative z-[2] flex items-center rounded-r bg-green-500 px-6 py-2 text-xs font-medium uppercase leading-tight text-white"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={FindUser}
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
        </div>
    );
};

export default Users;