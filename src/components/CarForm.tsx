import Input from "./Input"
import Button from "./Button"
import {useForm} from 'react-hook-form'
import { server_calls } from "../api/server.ts"
import {useDispatch, useStore} from 'react-redux'
import { chooseBrand, chooseModel, chooseYear, chooseColor} from "../redux/slices/RootSlice"


//interfaces
interface CarFormProps{
    id?:string []
    onClose: () => void;
    refreshData: () => void; 
}

// const CarForm = (props:CarFormProps) => {
const CarForm: React.FC<CarFormProps> = (props) => {  
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = async (data:any, event:any) =>{
        console.log(`ID: ${props.id}`);
        if(props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated! ${data} ${props.id}`)
            // setTimeout(() => {window.location.reload()},5000);
            event.target.reset()
        }else{
            //use dispatch to update our state in our store
            dispatch(chooseBrand(data.brand))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            dispatch(chooseColor(data.color))
            console.log(data);
            await server_calls.create(data)
            props.onClose()
            props.refreshData()
        }
    }

    return (//TO DO - add handle function
    <div className="flex flex-col"> 
      <form  onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col" >
        <div className="flex flex-row">
        <div className="serperate flex flex-col m-5">

                <div>
                    <label htmlFor="brand">Make</label>
                    < Input  {...register('brand')} name='brand' placeholder="Brand"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    < Input {...register('model')} name='model' placeholder="Model"/>
                </div>
        </div>
        <div className="seperate  flex flex-col m-5">
                <div>
                    <label htmlFor="year">Year</label>
                    < Input {...register('year')} name='year' placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    < Input {...register('color')} name='color' placeholder="Color"/>
                </div>
        </div>
        </div>
        <div className="seperate">

                <div className="flex justify-center mt-4">
                    <Button className=" p-3 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 ">
                        Submit
                    </Button>
                </div>
        </div>
        
        


      </form>
    </div>
  )
}

export default CarForm


// import React, { useState, useEffect } from 'react';

// interface CarFormData {
//   id?: string; // Optional for new entries, required for updates
//   brand: string;
//   model: string;
//   year: number;
//   color: string;
// }

// type CarFormProps = {
//   id?: string[] | undefined
//   refreshData: () => void;
//   onClose: () => void;
// };

// const CarForm: React.FC<CarFormProps> = (props: CarFormProps) => {
//     const [formData, setFormData] = useState<CarFormData>({
//     id: props.id && props.id.length > 0 ? props.id[0] : undefined,
//     brand: '',
//     model: '',
//     year: 0,
//     color: '',
//   });


//   useEffect(() => {
//     // Fetch data based on the provided id when the component mounts
//     if (props.id && props.id.length > 0) {
//       // Assuming you have a fetch function to get data based on ID
//       // Example: fetchDataById(props.id[0])
//       // Update the setFormData state with the fetched data
//       // setFormData(fetchedData);
//     }
//   }, [props.id]);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
    
//     // Implement your form submission logic here, and update the data based on props.id if needed

//     // Example: Update existing data if an id is provided
//     if (props.id && props.id.length > 0) {
//       // Assuming you have an update function
//       // updateDataById(props.id[0], formData);
//     } else {
//       // Otherwise, it's a new entry, so add new data
//       // addNewData(formData);
//     }

//     // Close the modal and refresh data
//     props.onClose();
//     props.refreshData();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Brand:
//         <input
//           type="text"
//           value={formData.brand}
//           onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
//         />
//       </label>
//       <label>
//         Model:
//         <input
//           type="text"
//           value={formData.model}
//           onChange={(e) => setFormData({ ...formData, model: e.target.value })}
//         />
//       </label>
//       <label>
//         Year:
//         <input
//           type="number"
//           value={formData.year}
//           onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value, 10) })}
//         />
//       </label>
//       <label>
//         Color:
//         <input
//           type="text"
//           value={formData.color}
//           onChange={(e) => setFormData({ ...formData, color: e.target.value })}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CarForm;