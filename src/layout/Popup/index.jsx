import { useContext } from "react";
import DataContext from "../../context/index";
import Popup from 'reactjs-popup';
import './style.module.css'


// Creator : moshe cohen
function PopupManagement() {

    const { isOpen, setIsOpen, popupComponent, setpopupComponent } = useContext(DataContext);
    // const handleClosePopup = () => {
    //     setpopupComponent(null);
    //     setpopupComponent(null);
    // };

    return (
        <>
           {popupComponent &&
            <Popup
                open={popupComponent}
                onClose={() => setpopupComponent(null)}
                modal
                closeOnDocumentClick
                contentStyle={{ width: "auto", height: "auto", backgroundColor: 'white', padding: '20px' }}
                overlayStyle={{ background:'rgba(0, 0, 0, 0.6)'}}
            >
                <div>
                    {popupComponent}
                        {/* 
                   {isOpen&&<button className="close-button" onClick={() => handleClosePopup()}>
                    
                    </button>}  */}
                </div>
            </Popup>
            }
        </>
    )

}

export default PopupManagement;