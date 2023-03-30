import React from 'react'
import {useParams, Link} from "react-router-dom" 
import '../style/detailBookList.css'
import DataBook from  '../data/DataBook.js'
import CountrySub from '../data/CountrySub';

function DetailBookList() {
    const pageUp = ()=> window.scrollTo(0, 0);
    let {timeBookSecond} = useParams();
    function deleteBook(each){
        let newArr = DataBook.filter((x) => x!==each);
        let lenDataBL=DataBook.length;
        for(let i=0;i<lenDataBL;i++) DataBook.pop();
        for(let i=0;i<newArr.length;i++) DataBook.unshift(newArr[i]);
    }
    function checkDelete(each){
        if(window.confirm("Bạn có chắc chắn muốn hủy chuyến đi này?")){
            deleteBook(each);
            document.getElementsByClassName('closeDetailBL')[0].click();
        }
    }
    return (
    DataBook.map((each)=>{
        if(each.timeBookSecond === Number(timeBookSecond)){
            return(
                <div className='detailBookList'>
                <Link to="/bookList" className='closeDetailBL'> Quay Lại </Link>  
                    <div className='leftDetailBL'>
                        <div className='titleDetailBL'> 
                            <h1> Chúc quý khách có một chuyến đi vui vẻ! </h1> 
                        </div>
                        <div className='leftDetailBLContainer'>
                            <div className='eachLeftDBL'><span>Thời gian đặt: </span> {each.timeBook} </div>
                            <div className='eachLeftDBL'><span>Tên khách hàng: </span> {each.name} </div>
                            <div className='eachLeftDBL'><span>Email: </span> {each.email} </div>
                            <div className='eachLeftDBL'><span>Số điện thoại: </span> {each.phone} </div>
                            <div className='eachLeftDBL'><span>Ngày khởi hành: </span> {each.date} </div>
                            <div className='eachLeftDBL'><span>Thời gian khởi hành: </span> {each.time}:00h </div>
                            <div className='eachLeftDBL'><span>Số vé người lớn: </span> {each.ticketAdult} <span>vé </span><p>(</p> {each.costTAdult}$ <p>)</p></div>
                            <div className='eachLeftDBL'><span>Số vé trẻ em: </span> {each.ticketChildren} <span>vé </span><p>(</p> {each.costTChildren}$ <p>)</p></div>
                            <div className='eachLeftDBL'><span>Tin nhắn: </span> {each.message} </div>
                            <div className='eachLeftDBL'><span>Tổng chi phí: </span> {each.costTotal}$ </div>
                            <div className='deleteBook' onClick={()=>checkDelete(each)}> <i class="fa-solid fa-plane-slash"></i> Hủy chuyến đi </div>
                        </div>
                    </div>
                    <div className='rightDetailBL'>
                        <img src={each.infoPlace.image} alt={each.infoPlace.placeName} className="imgRightDBL"/>
                        <div className='eachRightDBL'><span>Quốc gia: </span> <CountrySub countryEng={each.infoPlace.country}/> </div>
                        <div className='eachRightDBL'><span>Địa điểm: </span> {each.infoPlace.placeName}</div>
                        <Link to={"/"+each.infoPlace.country+"/"+each.infoPlace.counts+"/"+each.infoPlace.wishList} onClick={pageUp}> <div  className="buttonGTDescrible">  Xem chi tiết </div> </Link>
                    </div>
                </div>
            )}
        else return null;
    }))
}

export default DetailBookList