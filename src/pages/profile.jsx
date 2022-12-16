import React from 'react'
import axiosInstance from '../api'

function Profile() {
  async function getpost(e)  {
    e.preventDefault();
    try {
        const response = await axiosInstance.get('/post/');
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}
  return (
    <div>
      <button onClick={getpost}>post</button>
    </div>
  )
}

export default Profile