import CarForm from "./CarForm";
import React from "react";


type Props = {
  id?: string[];
  open:boolean;
  onClose: () => void;
  refreshData: () => void;
}

// const Modal = (props: Props) => {
//   if( !props.open ) return (<></>);
const Modal: React.FC<Props> = (props) => {
  if (!props.open) return <></>;


  return (

    <div
      className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-grey-300 bg-opacity-25'
      onClick={props.onClose}
      >
        <div
          className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded'
          onClick={(e)=>{
            e.stopPropagation()
          }}
        >
          <div className='w-full flex flex-col'>
            <div className="flex flex-row space-apart">
              <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                onClick={props.onClose}>
                X
                </p>
            </div>
            <div className="flex flex-col items-center text-center my-3 p-2">
              <CarForm refreshData = {props.refreshData} onClose={props.onClose} id={props.id}/>
            </div>
          </div>

      </div>
    </div>
  )
}
export default Modal