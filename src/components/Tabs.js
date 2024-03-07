import React from "react";

const Tabs = ({ type, setType }) => {
    return (
        <div className="flex w-[700px] justify-between items-center mt-10">
            <button
                className={`${type === "repos" && "text-green-500"}`}
                onClick={() => setType("repos")}
            >
                Repositories
            </button>
            <button
                className={`${type === "received_events" && "text-green-500"}`}
                onClick={() => setType("received_events")}
            >
                Activities
            </button>
            <button
                className={`${type === "followers" && "text-green-500"}`}
                onClick={() => setType("followers")}
            >
                Followers
            </button>
        </div>
    );
};

export default Tabs;