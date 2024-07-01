import Createeventbtn from './Createeventbtn';
import {useState , useEffect} from 'react';
    
    
    const Createevent = () => {
        return (
            <div>
                
            <h1>Create a event</h1>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>create here a new event</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">create a new event</h3>
    
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Event Title</span>
      </div>
  <input type="text" placeholder="Event Title here" className="input input-bordered w-full max-w-xs" />
  <div className="label">

  <span className="label-text">Event Date</span>
  </div>
  <input type="date" placeholder="When ist your event?" className="input input-bordered w-full max-w-xs" />
  <div className="label">
    
  <span className="label-text">Event Content</span>
  </div>
  <textarea type="text" placeholder="Describe your event here" className="textarea textarea-bordered w-full max-w-xs"> </textarea>
  <div className="label">

  </div>
  <button className="btn btn-outline"> Add Event </button>
</label>

    </div>

    <p className="py-4">Click on the Save button to publish your event</p>
  </div>
</dialog>
            </div>
             );
            }


export default Createevent;