import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Events = ({ data }) => {
    return (
        <>
            {data?.map((ev, i) => (
                <div key={i} className="flex border rounded-md
                p-3 shadow-[0_2px_5px_rgb(0,0,0,0.2)] max-w-xs transition duration-100 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30">
                    <Link to={`/${ev.actor?.login}`}>
                        <img src={ev.actor?.avatar_url} className="w-16 rounded-full" />
                    </Link>
                    <h1 className="break-words pl-6">
                        {ev?.actor?.login} {ev?.type}
                        <br />
                        {ev?.repo?.name}
                        <br />
                        <span className="text-sm  text-green-500">{format(ev?.created_at)}</span>
                    </h1>
                </div>
            ))}
        </>
    );
};

export default Events;