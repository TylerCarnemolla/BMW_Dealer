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
