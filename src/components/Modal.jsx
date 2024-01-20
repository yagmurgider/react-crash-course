import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({ children}) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/');
        //navigate('..'); Bir üst url'e git
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}
//Burda div'e MainHeader'daki gibi Link vererek de çözebilirdik, ancak useNavigate methodunu nasıl kullanacağımızı görmek için yaptık.

export default Modal;