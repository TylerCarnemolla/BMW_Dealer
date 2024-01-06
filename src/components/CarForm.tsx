import Input from "./Input"
import {useForm} from 'react-hook-form'
import { server_calls } from "../api/server"
import {useDispatch, useStore} from 'react-redux'
import { chooseMake, chooseModel, chooseYear, chooseColor, choosePrice} from "../redux/slices/RootSlice"

//interfaces
interface CarFormProps{
    id?:string []
    onClose: () => void;
    refreshData: () => void; 
}

// const ContactsForm = (props:CarFormProps) => {
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
            dispatch(chooseMake(data.Make))
            dispatch(chooseModel(data.Model))
            dispatch(chooseYear(data.Year))
            dispatch(chooseColor(data.Color))
            dispatch(choosePrice(data.Price))
            await server_calls.create(store.getState())
            props.onClose()
            props.refreshData()
        }
    }

    return (//TO DO - add handle function
    <div> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="Make">Brand Name</label>
            < Input {...register('Make')} name='Make' placeholder="Make"/>
        </div>
        <div>
            <label htmlFor="Model">Model</label>
            < Input {...register('Model')} name='Model' placeholder="Model"/>
        </div>
        <div>
            <label htmlFor="Year">Year</label>
            < Input {...register('Year')} name='Year' placeholder="Year"/>
        </div>
        <div>
            <label htmlFor="address">Color</label>
            < Input {...register('Color')} name='Color' placeholder="Color"/>
        </div>
        <div>
            <label htmlFor="address">Price</label>
            < Input {...register('Price')} name='Price' placeholder="Price"/>
        </div>
        <div className="flex p-1">
            <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                Submit
            </button>
        </div>
        
        


      </form>
    </div>
  )
}

export default CarForm

