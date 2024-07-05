import {useState , useEffect} from 'react';

const Createevent = () => {
const [formData, setFormData] = useState({
title: '',
description: '',
date: '',
location: '',
organizerId: ''

});

const [organzierId, setorganzierId] = useState('');

useEffect(() => {
  
  const storedOrganizerId = localStorage.getItem('id');
  if (storedOrganizerId) {
    setFormData(prevFormData => ({
      ...prevFormData,
      organizerId: storedOrganizerId
    }));
  }
}, []);


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
    
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3001/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('api_key')}`
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Error submitting form');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting form');
  }
};    


    
        return (
            <div >
                  <div className="mt-10 hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ml-4">Plan your Event</h1>
      <p className="py-6 ml-4">
      Organising an event can be an exciting and rewarding task, especially if you are planning an event that 
      brings many people together. Whether it's a small meeting, a conference, a concert or a non-profit event, 
      create your event here to ensure it has a wide reach. 
      </p>
      <button className="btn btn-info m-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>create here a new event</button>
    </div>
  </div>
</div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
  <form onSubmit={handleSubmit}>
     
  <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>
    
    <h3 className="font-bold text-lg">Enter your event data</h3>
    
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Event Title</span>
      </div>
  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title here" className="input input-bordered w-full max-w-xs" />
  <div className="label">

  <span className="label-text">Event Content</span>
  </div>
  <textarea type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your event here" className="textarea textarea-bordered w-full max-w-xs"> </textarea>
  <div className="label">

  <span className="label-text">Event Date</span>
  </div>
  <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="When ist your event?" className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  <span className="label-text">Event Location</span>
      </div>
  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location here" className="input input-bordered w-full max-w-xs" />
  <div className="label">
 
  <span className="label-text">ID Login</span>
      </div>
  <input type="number" name="organizerId" value={formData.organizerId} onChange={handleChange} placeholder="ID Login" className="input input-bordered w-full max-w-xs" />
  <div className="label">


  </div>
  <button type="submit" className="btn btn-outline"> Add Event </button>
</label>

    </div>

    
    </form>
  </div>
</dialog>
            </div>
             );
            }


export default Createevent;