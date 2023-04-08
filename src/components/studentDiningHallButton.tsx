import {ObjectId} from "mongodb";
import {Link} from "react-router-dom";
import React from "react";


export default function StudentDiningHallButton({diningHallName, diningHall_id}: { diningHallName: string, diningHall_id?: ObjectId }) {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={`/student/dininghall/${diningHall_id}/${diningHallName}`}> click here to dininghallpage </Link>
            </button>
        </div>
    )

}