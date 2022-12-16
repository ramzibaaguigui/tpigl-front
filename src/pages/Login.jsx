import React , {useState, useEffect} from 'react'
import axiosInstance from '../api'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const Login  = ({ setIsOpen }) => {
    const [log, setLog] = useState(true);

    //login variable 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //signup variable9
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [pswd, setPswd] = useState('');
    const [pswd2, setPswd2] = useState('');


    //register function



    async function register(e){
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/create/', {
                first_name: first,
                last_name: last,
                username: username,
                phone: phone,
                email: mail,
                password: pswd,
                pswd : pswd2
            })
            .then(() => {
                setLog(true);
                setFirst('');
                setLast('');
                setUsername('');
                setPhone('');
                setMail('');
                setPswd('');
                setPswd2('');
            })
            return response;

        } catch (error) {
            console.log(error.stack);
        }
        
    }



    //login function 

    async function login(e)  {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/token/obtain/', {
                email: email,
                password: password
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    //google login 
    const clientId = '938713439568-q7barlgciie3puigfe5bqjqqlgi2pphj.apps.googleusercontent.com';

    useEffect(() => {
    const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
        });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log(res)
        localStorage.setItem('refresh_token',res.tokenId)
        localStorage.setItem('access_token',res.tokenObj.id_token)
        async function send(){
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/user/google/login/', {
                    first_name: res.profileObj.familyName,
                    last_name: res.profileObj.givenName,
                    username: res.profileObj.name,
                    phone: '',
                    email: res.profileObj.email,
                    profile_picture:res.profileObj.imageUrl
                })
                return response;

            } catch (error) {
                console.log(error.stack);
            }
        }
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };



    return (
      <>
        <div className="w-full h-screen absolute top-0 left-0" onClick={() => setIsOpen(false)} />
        <div className="login bg-white fixed rounded-xl drop-shadow-2xl w-9/12 max-w-screen-sm p-8">
          
        {!log &&
            <form  onSubmit={register}>
                <div className="grid gap-4 mb-1 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-1 text-sm font-medium text-gray-900 ">First name</label>
                        <input type="text" id="first_name" onChange={event => setFirst(event.target.value)} value={first} className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="First name" required/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-1 text-sm font-medium text-gray-900 ">Last name</label>
                        <input type="text" id="last_name" onChange={event => setLast(event.target.value)} value={last} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Last name" required/>
                    </div>
                    <div>
                        <label for="username" className="block mb-1 text-sm font-medium text-gray-900 ">username</label>
                        <input type="text" id="username" onChange={event => setUsername(event.target.value)} value={username} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="username" required/>
                    </div>  
                    <div>
                        <label for="phone" className="block mb-1 text-sm font-medium text-gray-900 ">Phone number</label>
                        <input type="tel" id="phone" onChange={event => setPhone(event.target.value)} value={phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="0xxxxxxxxx" pattern="0[5-7][0-9]{8}" required/>
                    </div>
                </div>
                <div className="mb-1">
                    <label for="email" className="block mb-1 text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="email" id="email" onChange={event => setMail(event.target.value)} value={mail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="exemple@gmail.com" required/>
                </div> 
                <div className="mb-1">
                    <label for="password" className="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
                    <input type="password" id="password" onChange={event => setPswd(event.target.value)} value={pswd} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required/>
                </div> 
                <div className="mb-1">
                    <label for="confirm_password" className="block mb-1 text-sm font-medium text-gray-900 ">Confirm password</label>
                    <input type="password" id="confirm_password" onChange={event => setPswd2(event.target.value)} value={pswd2} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required/>
                </div> 
                <div className="flex items-start my-2">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                    </div>
                    <label for="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="/#" className="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="block mx-auto mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900">Alredy have account? <button className="text-blue-600 hover:underline " onClick={() => setLog(true)}>Log in</button>.</label>
            </form>
        }
            
        {log && 
            <form onSubmit={login}>
                <div className="mb-1">
                    <label for="email" className="block mb-1 text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="email" id="email" onChange={event => setEmail(event.target.value)} value={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="exemple@gmail.com" required/>
                </div> 
                <div className="mb-1">
                    <label for="password" className="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
                    <input type="password" id="password" onChange={event => setPassword(event.target.value)} value={password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required/>
                </div> 
                <button type="submit" className="block mx-auto mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900">Don't have account? <button className="text-blue-600 hover:underline " onClick={() => setLog(false)}>Sign up</button>.</label>
            </form>
        }
            
        </div>
      </>
    );
  };

export default Login