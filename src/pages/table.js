import React from 'react';
import { useState } from 'react';
import {Ranger} from './ranger';
import './App.css';

function Table() {

    const objects = Array.from(Ranger);
    const [inputarr, setInputarr]=useState(objects)

    const [inputdata, SetInputdata]=useState ({
        name:"",
        color:"",
        team:""
    })

    function changehandle(e){
        SetInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {name,color,team}=inputdata;
    function changehandle2(){
        setInputarr([...inputarr,{name,color,team}])
        SetInputdata({name:"",color:"",team:""})
    }

    function changehandle3(){
        setInputarr(inputarr.splice(0, inputarr.length -1))
    }

    return (
        <>
        <div className="tableInput">
            <form>
                <label>
                    <input type="text" autoComplete='off' name='name' value={inputdata.name} onChange={changehandle} placeholder="Enter Name" />
                </label>
                <label>
                    <input type="text" autoComplete='off' name='color' value={inputdata.color} onChange={changehandle} placeholder="Enter Color"/>
                </label>
                <label>
                    <input type="text" autoComplete='off' name='team' value={inputdata.power} onChange={changehandle} placeholder="Enter Team"/>
                </label>
            </form>

            <button onClick={changehandle2}>Add </button> &nbsp;&nbsp;&nbsp;
            <button onClick={changehandle3}>Delete </button>
        </div>

        <div className="tableBody">
            <table class="Etable" border={1} width="90%" cellPadding={10}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                        {inputarr.map(item => {
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.team}</td>
                                    </tr>
                                )
                            }
                        )}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Table;