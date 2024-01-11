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
    <div className="flex justify-center ">

    <div
      className="flex  justify-center"
      onClick={props.onClose}
      >
        <div
          className=' flex fixed   z-1 mt-20 shadow-2xl rounded'
          onClick={(e)=>{
            e.stopPropagation()
          }}
        >
          <div className='w-full flex flex-col'>
            <div className="flex flex-row space-apart">
              <p className="flex justify-center p-3 m-5 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300"
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
    </div>
  )
}
export default Modal