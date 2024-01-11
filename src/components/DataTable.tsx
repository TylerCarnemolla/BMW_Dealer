import React, { useState } from 'react'
import Modal from './Modal'
import Button from './Button';
import { server_calls } from '../api/server'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';

const columns: GridColDef[] = [
  {field: 'id', headerName: "ID", width:90},
  {field: 'brand', headerName: "Brand Name", flex: 1},
  {field: 'model', headerName: "Model", flex:1},
  {field: 'year', headerName:"Year", flex:1},
  {field: 'color', headerName:"Color", flex:2},
]


function DataTable() {
  let [open, setOpen ] = useState(false)

  const { carData, getData} = useGetData();
  const[selectionModel, setSelectionModel] = useState<string[]>([])


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    // setTimeout( () => {window.location.reload()}, 500)
    
    }

  const refreshData = () => {
    getData();
  };




  return (
    <>
      <Modal 
      id = {selectionModel}
      open = {open}
      onClose={handleClose}
      refreshData = {refreshData}
      />
      <div className='flex  flex-row'>
        <div>
          <button className='p-3 m-3 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300'
          onClick={()=> handleOpen()}>
            Add Vehicle to Inventory

          </button>
        </div>
        <button onClick={handleOpen} className="p-3 m-3 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300" >Update</button>
        <button onClick={deleteData} className="p-3 m-3 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300" >Delete</button>
      </div>
      {/* data table section */}
      <div className={open?  "hidden": "container mx-10 my-5 flex flex-col"}
        style = {{height: 400, width: '100%'}}
        >
          <h2 className="p-3 bg-slate-300 my-2 rounded">Inventory</h2>
          
          <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]}
          checkboxSelection={true}
          onRowSelectionModelChange={(item:any)=> {
            setSelectionModel(item)
          }}
          />
      </div>
    </>
  )
}

export default DataTable
