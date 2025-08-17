import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {

    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accesstoken')}`, // Include your API key in the Authorization header
        "Content-Type": "application/json", // Adjust the content type as needed
      },

      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      //console.log(data)
      return data;
    }else{
      const errorData = await response.json();
      return errorData;
    }

  } catch (error) {
    console.error('Error:', error);
  }
};


export const fetchDataFromApi = async (url) => {
  try {
    const params={
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accesstoken')}`, // Include your API key in the Authorization header
        "Content-Type": "application/json", // Adjust the content type as needed
      }
    }


    const { data } = await axios.get(apiUrl + url,params)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


export const uploadImage = async (url, updatedData) => {
  const params={
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('accesstoken')}`, // Include your API key in the Authorization header
      "Content-Type": "multipart/form-data", // Adjust the content type as needed
    }
  }

  var response;
await axios.put(apiUrl + url,updatedData, params).then((res)=>{
  response=res;
  
})
 return response;
  
}


export const editData = async (url, updatedData) => {
  const params={
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('accesstoken')}`, // Include your API key in the Authorization header
      "Content-Type": "application/json", // Adjust the content type as needed
    }
  }

  var response;
await axios.put(apiUrl + url,updatedData, params).then((res)=>{
  response=res;
  
})
 return response;
  
}

export const deleteData = async (url) => {
  const params={
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('accesstoken')}`, // Include your API key in the Authorization header
      "Content-Type": "application/json", // Adjust the content type as needed
    }
  }
  const { res } = await axios.delete(apiUrl +url,params)
  return res;
}