import { useContext } from "react";
import DataContext from "../../context/index";
import Popup from 'reactjs-popup';
import './style.module.css'

function PopupManagement() {

    const { popupComponent, setpopupComponent } = useContext(DataContext);

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
                </div>
            </Popup>
            }
        </>
    )

}

export default PopupManagement;