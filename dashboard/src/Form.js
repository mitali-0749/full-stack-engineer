import React,{useState} from 'react'
//import  ReactDOM  from 'react-dom'


function Form(){
    const [formData, setFormData]=useState({
        id:"",
        status:"",
        Reponame:"",
        findings:"",
        queuedAt:"",
        scanningAt:"",
        finishedAt:""
    });
    const [records,setRecords]=useState([]);

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value)
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newrecord={...formData,id:new Date().getTime().toString()}

        setRecords([...records,newrecord]);
        setFormData({id:"",status:"",Reponame:"",findings :"",queuedAt :"",scanningAt:"",finishedAt:""});
    }


return (
<>
<div class='container'>
    <form action='' onSubmit={handleSubmit}>
        <label htmlFor='id'>ID:</label> <input type="number" name='id'  value={formData.id} onChange={handleChange}></input>
        <br/>
        <label htmlFor='status'>Status:</label><input type="text" name='status' id='status' value={formData.status} onChange={handleChange}></input>
        <br/>
        <label htmlFor='Reponame'>Repository Name:</label> <input type="text" name='Reponame' id='Reponame' value={formData.Reponame} onChange={handleChange}></input>
        <br/>
        <label htmlFor='findings'>Findings:</label><textarea id="findings" name="findings" rows="3" value={formData.findings} onChange={handleChange}></textarea>
        <br/>
        <label htmlFor='queuedAt'>Queued At:</label> <input type="datetime-local" name='queuedAt' id='queuedAt' value={formData.queuedAt} onChange={handleChange}></input>
        <br/>
        <label htmlFor='scanningAt'>Scanning At:</label><input type="datetime-local" name='scanningAt' id='scanningAt' value={formData.scanningAt} onChange={handleChange}></input>
        <br/>
        <label htmlFor='finishedAt'>Finished At:</label> <input type="datetime-local" name='finishedAt' id='finishedAt' value={formData.finishedAt} onChange={handleChange}></input>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    </div>
    <div>
        {
            records.map((curEle)=>{
                return(
                    <div>
                        <p>Id:{curEle.id}</p>
                        <p>Status:{curEle.status}</p>
                        <p>RepoName:{curEle.Reponame}</p>
                        <p>Findings:{curEle.findings}</p>
                        <p>QueuedAt:{curEle.queuedAt}</p>
                        <p>ScanningAt:{curEle.scanningAt}</p>
                        <p>FinishedAt:{curEle.finishedAt}</p>
                    </div>
                )
            })
        }
    </div>
    </>
)
}

export default Form;
