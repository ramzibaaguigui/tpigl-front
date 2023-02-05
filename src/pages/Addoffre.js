import React , {useState} from 'react'
import axiosInstance from '../api';

const Addoffre  = ({ setIsOpenoffre , postId }) => {
    
    const [prix, setprix] = useState('');
    const [phone, setphone] = useState('');
    const [description, setdescription] = useState('');


   
    async function addoffre(e){
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`http://127.0.0.1:8000/api/addoffre/`, {
                postId:postId,
                prix:prix,
                phone: phone,
                description: description,
            })
            setIsOpenoffre(false)
            return response;
           

        } catch (error) {
            console.log(error.stack);
        }
    }




    return (
      <>
        <div className="w-full h-screen absolute top-0 left-0 backdrop-blur-sm z-40" onClick={() => setIsOpenoffre(false)} />
        <div className="login bg-white fixed rounded-xl drop-shadow-2xl w-9/12 max-w-screen-sm p-8 z-50">

            <form  onSubmit={addoffre}>
                <div className="grid gap-4 mb-1 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-1 text-sm font-medium text-gray-900 ">Prix</label>
                        <input type="nember" id="first_name" onChange={event => setprix(event.target.value)} value={prix} className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="First name" required/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-1 text-sm font-medium text-gray-900 ">Phone</label>
                        <input type="tel" id="last_name" onChange={event => setphone(event.target.value)} value={phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="mb-1">
                    <label for="description" className="block mb-1 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="description" id="description" onChange={event => setdescription(event.target.value)} value={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="exemple@gmail.com" required/>
                </div> 
                <button type="submit" className="block mx-auto mt-2 text-white bg-theme-orange hover:bg-theme-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                
            </form>
       
            
        </div>
      </>
    );
  };

export default Addoffre