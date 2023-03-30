import React,{ useState,useRef } from 'react' 
import { Link } from "react-router-dom";
import "../style/navbar.css"
function Navbar() {
    const pageUp = () => window.scrollTo(0, 0);
    const [click,setClick] = useState(false);
    const handleOn= () => setClick(true);
    const handleOut= () => setClick(false);
    let preNavBar = useRef("home");
    let preDestination = useRef(0);
    function handleNavBar(n){
        document.getElementById(n).style.color="#FD5825";
        if(preDestination.current === 1) {
            document.getElementById("destination").style.color = "#ffffff";
            preDestination.current = 0;
        }
        if(n==="destination") preDestination.current = 1;
        else {
            document.getElementById(preNavBar.current).style.color = "#ffffff";
            preNavBar.current = n;
        }
    }

    return (
    <div className='navBar'>
    <p id="titleNavbar"> Travel </p> 
        <div className='rightSide'>
        <Link to="/" onClick={()=>{pageUp();handleNavBar("home");}}> <span className="textNavBar" id="home"> Trang Chủ </span></Link> 
            <div onMouseMove={handleOn} onMouseOut={handleOut}>
            <span className="textNavBar" id="destination" > Điểm Đến </span> 
                <div className='dropDown' id={click?"open":"close"} onMouseMove={handleOn} onMouseOut={handleOut} onClick={()=>{handleNavBar("destination");}}>
                    <Link to="/VietNam" onClick={()=>{pageUp();handleNavBar("vietnam");}}><span className="eachDrop" id="vietnam"> Việt Nam </span></Link> 
                    <Link to="/America" onClick={()=>{pageUp();handleNavBar("america");}}><span className="eachDrop" id="america"> Mỹ </span></Link> 
                    <Link to="/England" onClick={()=>{pageUp();handleNavBar("england");}}><span className="eachDrop" id="england"> Anh </span></Link> 
                    <Link to="/France" onClick={()=>{pageUp();handleNavBar("france");}}><span className="eachDrop" id="france"> Pháp </span></Link> 
                    <Link to="/Japan" onClick={()=>{pageUp();handleNavBar("japan");}}><span className="eachDrop" id="japan"> Nhật Bản </span></Link> 
                    <Link to="/China" onClick={()=>{pageUp();handleNavBar("china");}}><span className="eachDrop" id="china"> Trung Quốc </span></Link> 
                </div>
            </div>
            <Link to="/wishList" onClick={()=>{pageUp();handleNavBar("wishList");}}> <span className="textNavBar" id="wishList"> Bộ sưu tập </span></Link>  
            <Link to="/bookList" onClick={()=>{pageUp();handleNavBar("bookList");}}> <span className="textNavBar" id="bookList"> Chuyến đã đặt </span></Link>  
            <Link to="/contact" onClick={()=>{pageUp();handleNavBar("contact");}}> <span className="textNavBar" id="contact">  Liên Hệ </span></Link> 
        </div>
    </div>
  )
}
export default Navbar