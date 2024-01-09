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
            await server_calls.create(store.getState())
            props.onClose()
            props.refreshData()
        }
    }

    return (//TO DO - add handle function
    <div> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="brand">Brand Name</label>
            < Input {...register('brand')} name='Brand' placeholder="Brand"/>
        </div>
        <div>
            <label htmlFor="model">Model</label>
            < Input {...register('model')} name='Model' placeholder="Model"/>
        </div>
        <div>
            <label htmlFor="year">Year</label>
            < Input {...register('year')} name='Year' placeholder="Year"/>
        </div>
        <div>
            <label htmlFor="color">Color</label>
            < Input {...register('color')} name='Color' placeholder="Color"/>
        </div>
        <div className="flex p-1">
            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                Submit
            </Button>
        </div>
        
        


      </form>
    </div>
  )
}

export default CarForm

