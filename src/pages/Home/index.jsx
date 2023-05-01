import AddTask from "../../components/AddTask"
import Homepage from "../../components/Homepage"
import PlusButton from "../../components/PlusButton"


function Home() {

  const handleClosePopup = () => {		
		// setpopupComponent(<h1/>)
		// setIsOpen(true)
    console.log("hy");
	  }

  return (
 
 <div className='Home'>
  {/* <AddTask /> */}
  <Homepage />
  <PlusButton onClick={handleClosePopup} />
 </div>
  )
}
export default Home


