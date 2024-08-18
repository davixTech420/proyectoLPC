import axios from "axios";

const baseUrl = "http://localhost:3001/api/admin";


export const listarSala = () => {
    return axios.get(`${baseUrl}/sala`, {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    });
};

export const crearSala = (formData) => {
 return axios.post(`${baseUrl}/sala`, formData,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    }
 );




}