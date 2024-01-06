import Background from '../assets/images/bmw_bg.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed bg-right"
    >
      <div className = 'flex place-items-center h-screen'>
            <h3 className='p-10 text-xl bg-opacity-20 text-white rounded-xl'>BMW of Los Angeles</h3> 

      </div>
      
    </div>
  )
}

export default Home

