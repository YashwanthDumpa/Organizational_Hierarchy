import axios from 'axios';

export default async function getHierarchy(search:string){
    const userId = await axios.get(`http://localhost:8080/get-data/JMD${search}`);
    return userId;

}