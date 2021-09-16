import {useRef, useState} from 'react';
import { Container } from 'react-bootstrap';
import FirstPage from './first-page/FirstPage';
import CustomFooter from './footer/CustomFooter';
import Mobile from './mobile/Mobile';
import WelcomePage from './welcome-page/WelcomePage';

const scrollToRef = (ref: any) =>{
    window.scrollTo(0, ref.current.offsetTop);
} 

const ScrollDiv = () => {
    const welcomePageRef = useRef(null);
    const[visible, setVisible] = useState(true);
    const executeScroll = () => scrollToRef(welcomePageRef);

    const firstPageRef = useRef(null)
    
    window.onscroll = function(e) {
        console.log(e)
        setVisible(true)
    }

    return(
        <>
        <div ref={welcomePageRef}>
            <WelcomePage onArrowDownClick={() => setVisible(false)}/>
        </div> 
        <div ref={firstPageRef}>
            <FirstPage executeScroll={executeScroll} visible={visible}/>
        </div>
        </>
    )
}


export default ScrollDiv;