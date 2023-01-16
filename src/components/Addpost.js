import React, { Fragment ,useState , useRef, useEffect} from 'react'
import axiosInstance from '../api';


const Addpost = () => {
    const [add, setadd] = useState(true);
    const [category, setcategory] = useState('Vente');
    const [type, settype] = useState('');
    const [surface, setsurface] = useState('');
    const [prix, setprix] = useState('');
    const [description, setdescription] = useState('');


    let lastimg = useRef('/nopic.png');
    const [imgs, setimgs] = useState([]);
    
    const addimage = (e) => {
        let s = URL.createObjectURL(e.target.files[0])
        lastimg.current = s
        setimgs(imgs => [...imgs, s]);
    }

    

    async function ajouter(e)  {
        let lat = 0
        let long=0
        e.preventDefault();
        if (imgs.length) {

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    lat =  position.coords.latitude
                    long =  position.coords.longitude
                });
                try {
                    const response = await axiosInstance.post('/post/create/', {
                        category: category,
                        type: type,
                        surface: surface,
                        prix: prix,
                        description: description,
                        images:imgs,
                        lat :lat,
                        long :long
                    });
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    console.log(response)
                    return response.data;
                } catch (error) {
                    throw error;
                }
        }else{
            alert("geolocation isn't available")
        }
        } else {
            alert('add picture')
        }
        
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
        });
    })
    
  return (
    <Fragment>
        <div className="w-full h-screen absolute top-0 left-0" onClick={() => setadd(false)} />
        
        {add &&
            <div className="login bg-white fixed rounded-xl drop-shadow-2xl w-11/12 max-w-screen-xl p-8">
                <form onSubmit={ajouter} className='flex gap-2  flex-col sm:flex-row'>
                    <div className='w-full sm:w-6/12 max-h-96 overflow-hidden'>
                        <input id="photo-upload" type="file" className='hidden'  onChange={addimage} /> 
                        <div className=' h-4/6 flex justify-center'>
                            <img alt=''  src={lastimg.current} className='h-full'/>
                        </div>
                        <div className='h-2/6 w-min mt-4 flex'>
                            <label for="photo-upload" className='mr-8'>
                                <img alt='' src='/add-image.png' className='h-24 w-24 min-w-fit'/>
                            </label>
                            <div className='overflow-x-scroll w-fit'>
                                <div className='flex w-min' >
                                    {imgs.length
                                    ? imgs.map(img => <div className='w-24 h-24 overflow-hidden mr-1 flex justify-center items-center'><img alt='' key={img} src={img} className='min-w-full min-h-full' /></div>)
                                    : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 max-h-96'>
                        <div className="grid gap-4 mb-1 md:grid-cols-2">
                            <div>
                                <label for="Category" className="block mb-1 text-sm font-medium text-gray-900 ">Category</label>
                                <select id='Category' onChange={event => setcategory(event.target.value)} value={category} className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline outline-theme-orange" required>
                                    <option>Vente</option>
                                    <option>Location</option>
                                    <option>Location vacances</option>
                                    <option>Echange</option>
                                </select>
                            </div>
                            <div>
                                <label for="type" className="block mb-1 text-sm font-medium text-gray-900 ">Type</label>
                                <input type="text" id="type" list="types" onChange={event => settype(event.target.value)} value={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline outline-theme-orange" placeholder="Last name" required/>
                                <datalist id="types">
                                    <option>Terrain</option>
                                    <option>Terrain Agricole</option>
                                    <option>Appartement</option>
                                    <option>Maison</option>
                                    <option>Bungalow</option>
                                </datalist>
                            </div>
                            <div>
                                <label for="surface" className="block mb-1 text-sm font-medium text-gray-900 ">Surface</label>
                                <input type="number" id="surface" onChange={event => setsurface(event.target.value)} value={surface} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline outline-theme-orange" placeholder="xxx" required/>
                            </div>  
                            <div>
                                <label for="Prix" className="block mb-1 text-sm font-medium text-gray-900 ">Prix</label>
                                <input type="number" id="Prix" onChange={event => setprix(event.target.value)} value={prix} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline outline-theme-orange" placeholder="0xxxxxxxxx" pattern="0[5-7][0-9]{8}" required/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <label for="description" className="block mb-1 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea type="email" id="description" onChange={event => setdescription(event.target.value)} value={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full h-36 resize-none p-2.5 focus:outline outline-theme-orange" maxLength={1000} placeholder="description" required></textarea>
                        </div> 
                        <button type="submit" className="block mx-auto mt-2 text-white bg-theme-orange hover:bg-theme-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">ADD</button>
                    </div>
                </form>
            </div>    
        }
        
    </Fragment>
  )
}

export default Addpost