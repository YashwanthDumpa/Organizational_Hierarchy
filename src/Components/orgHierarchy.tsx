import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputAdornment from '@mui/material/InputAdornment';

import './orgHierarchy.css';
import getHierarchy from "../Services/getHierarchy";




export default function OrgHierarchy() {
    const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transform: scale(1.1);
    transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.2);
    }
    `}
  `;

    const [search, setSearch] = useState('');
    const [ancestors, setAncestors] = useState([]);
    const [descendants, setDescendants] = useState([]);

    console.log("Inside Component");

    async function sendRequest(search: string) {

        const userData = await getHierarchy(search);

        // const userData = await axios.get(`http://localhost:8080/get-data/JMD${search}`);
        console.log(userData.data, "asdasd");
       
        setAncestors(userData.data.ancestors);
        setDescendants(userData.data.descendants);

    }

    function showHierarchy(id:string){
        sendRequest(id);
    }

    function handleClick() {
        if(search.trim()!==''){
            sendRequest(search);
            setSearch("")
        }else{
            toast.error("Please Enter Employee Id", {
                position: toast.POSITION.TOP_RIGHT,
              });
        }
    }
    return (
        <>
            <div onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick()
            }
          }}>
                <h1 className='heading mb-4'>Organization Hierarchy</h1>
                <div className="d-flex justify-content-center search-container">
                    <TextField id="searchBar" className="me-4"
                        size="small" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">JMD</InputAdornment>,
                          }}
                        label="Employee Id" variant="outlined" value= {search} onChange={(e: any) => setSearch(e.target.value)} />
                    <Button size="small" onClick={handleClick} sx={{ backgroundColor: "#FF6196", color: "white" }}>Search</Button>
                </div>
            </div>
            <div className="p-4 d-flex flex-column align-items-center hierarchy-container ">
                <div className="d-flex flex-column ">
                    {ancestors.map((employee: any) =>
                        <div className="d-flex p-3 mb-2 bg-warning card-width" onClick={()=>showHierarchy(employee.empId.split("JMD")[1])}>
                            <div className="me-3">
                                <StyledAvatar src=""></StyledAvatar>
                            </div>
                            <div className="d-flex flex-column">
                                <h5 className="name">{employee.firstName + " " + employee.lastName}</h5>
                                <p className="position">{employee.empId}</p>
                                <p className="position">{employee.position}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="d-flex flex-row w-75 justify-content-center">
                    {descendants.map((employee: any) =>
                        <div className="d-flex p-3 bg-info m-2 card-width"  onClick={()=>showHierarchy(employee.empId.split("JMD")[1])}>
                            <div className="me-3">
                                <StyledAvatar src=""></StyledAvatar>
                            </div>
                            <div className="d-flex flex-column ">
                            <h5 className="name">{employee.firstName + " " + employee.lastName}</h5>
                                <p className="position">{employee.empId}</p>
                                <p className="position">{employee.position}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer/>

        </>
    )
}