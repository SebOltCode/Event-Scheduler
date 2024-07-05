import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/events');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data.results)) {
                setEvents(data.results);
            } else {
                console.error('Expected an array but got', typeof data);
                setEvents([]); 
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

        fetchEvents();
    }, []);
    return (
        <div>
            <h1 className='flex justify-center p-4 font-bold text-2xl'>Upcoming Events</h1>
            <div className="flex flex-wrap justify-center">
            {events.map((event) => (
                <div key={event.id} className="card glass w-96 m-2 bg-slate-200">
                    <div className="card-body">
                        <h2 className="card-title">{event.title}</h2>
                        <p>{event.description}</p>
                        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()} {new Date(event.date).toLocaleTimeString()}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-glass bg-slate-300 hover:bg-slate-500">
                         <Link to={`/Createevent/${event.id}`}>Edit Event</Link> */}
                        {/* </button> */}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Home;