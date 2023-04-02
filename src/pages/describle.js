import React, {useState,useRef} from 'react'
import {useNavigate,useParams} from "react-router-dom" 
import '../style/describle.css'
import Data from '../data/DataPlace.js'
import DataWL from  '../data/DataWishList.js'
import DataBook from '../data/DataBook.js'

function Describe(){
    // Create new object save the info of the booking
    class CreNewBook{
        constructor(name,email,phone,date,time,timeBook,timeBookSecond,ticketAdult,costTAdult,ticketChildren,costTChildren,message,costTotal,infoPlace){
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.date = date;
            this.time = time;
            this.timeBook = timeBook;
            this.timeBookSecond = timeBookSecond;
            this.ticketAdult = ticketAdult;
            this.costTAdult = costTAdult;
            this.ticketChildren = ticketChildren;
            this.costTChildren = costTChildren;
            this.message = message;
            this.costTotal = costTotal;
            this.infoPlace = infoPlace;
        }
    }
    const navigate = useNavigate();
    let {countryName} = useParams();
    let {ccounts} = useParams();
    let {wishList} = useParams();
    let costTAdult = useRef(0);
    let costTChildren = useRef(0);
    let ticketAdult = useRef(0);
    let ticketChildren = useRef(0);
    let costTotal = useRef(0);
    let y = useRef(0);

    const [addTWish,setAddTWish] = useState(Number(wishList));
    const handleAddTWish = (each) => {
        setAddTWish(!addTWish);
        //Remove favorite place in favorite list
        if(each.wishList) {
            each.wishList = 0;
            let newArr = DataWL.filter((x) => x!==each);
            let lenDataWL=DataWL.length;
            for(let i=0;i<lenDataWL;i++) DataWL.pop();
            for(let i=0;i<newArr.length;i++) DataWL.push(newArr[i]);
        }
        // Add favorite place in favorite list
        else {
            each.wishList = 1;
            if(DataWL.findIndex((x) => x===each) === -1) DataWL.unshift(each);
        }
    }
    // sum the price ticket
    function sumTicketAdult(costA){
        ticketAdult.current = Number(document.getElementsByName('ticketAdult')[0].value);
        costTAdult.current = ticketAdult.current * Number(costA);
        sumTotal()
    }
    function sumTicketChildren(costC){
        ticketChildren.current = Number(document.getElementsByName('ticketChildren')[0].value);
        costTChildren.current = ticketChildren.current * Number(costC);
        sumTotal()
    }
    function sumTotal(){
        costTotal.current = costTAdult.current + costTChildren.current;
        document.getElementById('resultTotalBook').innerHTML =  costTotal.current + "$";
    }
    // Check and save the information in the booking list.
    function acceptBook(each){
        let checked = 1;
        let name = document.getElementsByName('name');
        let email = document.getElementsByName('email');
        let phone = document.getElementsByName('phone');
        let date = document.getElementsByName('date');
        let time;
        let message = document.getElementsByName('messageBook')[0].value;
        let timeBook = new Date().toLocaleString();
        let timeBookSecond = Date.now()
        if(name[0].value===""){
            name[0].classList.add("alertClass");
            checked = 0;
        }
        if(email[0].value===""){
            email[0].classList.add("alertClass");
            checked = 0;
        }
        if(phone[0].value===""){
            phone[0].classList.add("alertClass");
            checked = 0;
        }
        if(date[0].value===""){
            date[0].classList.add("alertClass");
            checked = 0;
        }
        if(document.querySelector('input[name="radioTime"]:checked')===null){
            document.getElementsByClassName('timeBook')[0].classList.add("alertClass");
            checked = 0;
        }
        else{time = document.querySelector('input[name="radioTime"]:checked').value;}
        if(costTotal.current===0){
            document.getElementsByClassName('ticketBook')[0].classList.add("ticketBookBorder");
            checked = 0;
        }
        if(checked === 1){
            let book = new CreNewBook(name[0].value,email[0].value,phone[0].value,date[0].value,time,timeBook,timeBookSecond,ticketAdult.current,costTAdult.current,ticketChildren.current,costTChildren.current,message,costTotal.current,each);
            handleAlert(1)
            DataBook.push(book);
        }
    }
    function resetBorder(n){
        let x = document.getElementsByName(n);
        if(n!=="time"&&n!=="ticket") x[0].classList.remove("alertClass");
        else{
            if(n==="time") document.getElementsByClassName('timeBook')[0].classList.remove("alertClass");
            else document.getElementsByClassName('ticketBook')[0].classList.remove("ticketBookBorder");
        }
    }
    // Show off congratulations message
    function handleAlert(n){
        if(n===1){
            let alert = document.getElementsByClassName('alertComfirmBook');
            alert[0].style.display="block";
            setTimeout(()=>{alert[0].style.opacity="1";},10);
            y.current = window.scrollY;
            window.addEventListener('scroll',scrollTpY);
        }
        else{
            window.removeEventListener('scroll',scrollTpY);
            let alert = document.getElementsByClassName('alertComfirmBook');
            alert[0].style.opacity = '0';
            setTimeout(()=>{
                alert[0].style.display="none";
            },500);
        }
    }
    function scrollTpY(){
        window.scrollTo(0,y.current);
    }
    return(
        // Show off information about the place
        Data.map((each,index)=>{
            if(each.country===countryName&&each.counts===Number(ccounts)){
                return(
                    <div key={index}>
                    <div className='describle' >
                    <div className='describleContainer'>
                    <div className='closeDescrible' onClick={() => navigate(-1)}>Quay Lại</div> 
                    <div className='leftDescrible'>
                    <div className='topLeftDescrible'>
                        <div className='iconTLDTitle'>
                            <div className='addTWishContainer' onClick={() => handleAddTWish(each)}> <i className="fa-solid fa-heart" id={addTWish?"selectIconAddTWish":"unselectIconAddTWish"} ></i>  <span id={addTWish?"selectSpanAddTWish":"unselectSpanAddTWish"} > Thêm vào bộ sưu tập </span> </div>
                            <div className='shareContainer'> 
                                <div><i className="fa fa-share-alt"></i> <span> Chia sẻ </span> </div>
                                    <ul className="iconShareContainer">
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                    <li><i className="fa fa-instagram"></i> </li>
                                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                                </ul>
                            </div>                 
                        </div>
                        <div className='titleTLD'>
                            <h1> {each.placeName} </h1>
                            <div className='underTitleTLD'>
                                <h4><span>Giá</span><p className='costDescrible'>{each.cost}$</p></h4>
                                <h4><span>Thời gian</span><p>{each.time}</p></h4>
                                <h4>
                                    <div className='rateDescrible'>
                                        <span>Đánh Giá:</span>
                                        <p>
                                        <i className={each.rate>=1? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        <i className={each.rate>=2? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        <i className={each.rate>=3? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        <i className={each.rate>=4? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        <i className={each.rate===5? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        </p>
                                    </div>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='contentLeftDescrible'>
                        <img src = {each.image} alt={each.placeName} className="imageDescrible"/>
                    </div>
                    <div className='bottomLeftDescrible'>
                        <h2> Giới Thiệu</h2>
                        <h3>{each.describe}</h3> 
                    </div>
                </div>
                <div className='rightDescrible'>
                    <form action='' className='bookForm'>
                    <div className='titleTopBookForm'>Đặt chuyến đi này</div>
                        <div className='infoBook'> 
                            <input type='text' name="name"  placeholder="Họ và Tên *" onClick={()=>{resetBorder("name")}}></input>
                            <input type='email' name="email"  placeholder='Email *' onClick={()=>{resetBorder("email")}}></input>
                            <input type='number'name="phone"  placeholder='Số điện thoại *' onClick={()=>{resetBorder("phone")}}></input>
                            <input type="date" name="date" placeholder='Ngày *' onClick={()=>{resetBorder("date")}}></input>
                        </div>
                        <div className='timeBook' onClick={()=>{resetBorder("time")}}>
                            <span> Thời gian * </span> 
                            <div className='radioBoxContainer'>
                                <div><input type="radio" name="radioTime" value="8"></input> <label for="8am"> 8:00 </label></div>
                                <div><input type="radio" name="radioTime" value="12"></input> <label for="12pm"> 12:00 </label></div>
                                <div><input type="radio" name="radioTime" value="16"></input> <label for="4pm"> 16:00 </label></div>
                            </div>
                        </div>
                        <div className='ticketBook' onClick={()=>{resetBorder("ticket")}}> 
                            <span> Đặt vé</span>
                            <div className='ticketBookContainer'>
                                <div> <label for="ticketAdult"> Người lớn (18+) </label> <span>{each.cost}$</span>  <input type='number' name="ticketAdult"  min='0' step='1' placeholder="0" onChange={()=>sumTicketAdult(each.cost)}></input> </div>
                                <div> <label for="ticketChildren"> Trẻ em (0-17) </label> <span>{Math.floor(each.cost*0.9)}$</span> <input type='number' name="ticketChildren" min='0' step='1' placeholder="0" onChange={()=>sumTicketChildren(Math.floor(each.cost*0.9))}></input> </div>
                            </div>
                        </div>
                        <textarea className='messageBook' placeholder='Tin nhắn' name="messageBook"></textarea>
                        <div className='totalBook'>
                            <h2> Tổng </h2> <h2 id="resultTotalBook"> 0$</h2>
                        </div>
                        <div className='acceptBook' onClick={()=>acceptBook(each)}> Đặt ngay </div>
                    </form>
                </div>        
            </div>
        </div>
        <div className='alertComfirmBook'>
            <div className='alertComfirmBookContainer'> 
                <i className="fa-solid fa-circle-check"></i>
                <span>
                <h1> Chúc mừng </h1>
                <h3> Bạn đã đặt chuyến đi thành công</h3>
                </span>
                <div onClick={()=>handleAlert()}> Tiếp tục </div>
            </div>
        </div>
        </div>
        )}
        else return null;
        })
    )
}
export default Describe