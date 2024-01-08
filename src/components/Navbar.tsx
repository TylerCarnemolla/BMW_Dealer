import {useState} from 'react'
import { Link } from 'react-router-dom'




function Navbar() {
    const [isVisable, setIsVisable]= useState(false) //the default is false menaing not visable

    

    const dropDown = () =>{
        setIsVisable(!isVisable)//once you click on it, it become the opposite of false, therfor visable
        
    }

    const clicked = () =>{
        setIsVisable(false)
    }


  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-900 bg-opacity-100 px-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight p-8'>BMW Los Angeles</Link>
        </div>
        <div className='block'>
            <button 
                    onClick = {dropDown}
                    className='flex items-center px-3 py-2 text-teal-200 border rounded
                    border-white hover:text-slate-300 hover:border-slate-300'>
            
                    <i className='fas fa-bars'></i>
            </button>

        </div>
        {isVisable ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className="p-3 m-5 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 justify-center">
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                                text-white'>
                                Home
                            </Link>
                        </div>

                    </button>
                    <button className="p-3 m-5 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 justify-center">
                        <div>
                            <Link to='/about' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-white hover:text-white'>
                                About
                            </Link>
                        </div>

                    </button>
                    <button className="p-3 m-5 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 justify-center">
                        <div>
                            <Link to='/contact' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-white hover:text-white'>
                                Contact Us
                            </Link>
                        </div>

                    </button>
                    <button className="p-3 m-5 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 justify-center">
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='flex place-items-center lg:inline-block lg:mt-0
                                text-white hover:text-white '>
                                Dashboard
                            </Link>
                        </div>

                    </button>
                    


                </div>
            </div>
        ) : (
       <></>)}

    </nav>
  )
}

export default Navbar
