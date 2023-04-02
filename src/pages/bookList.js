import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import '../style/bookList.css'
import DataBook from '../data/DataBook.js'
import CountrySub from '../data/CountrySub';
function BookList() {
  let sizeDataBL = useRef(DataBook.length);
  const pageUp = () => window.scrollTo(0, 0);
  function checkBL(){
    return (
      // show off the list of bookings
      DataBook.map((each,index)=>{
          return(
            <div className='bookListCard' key={index}>
              <Link to={"/detailBookList/"+ String(each.timeBookSecond) } onClick={pageUp} className="linkBookListCard">
                <div className='bookListCardContainer'>
                <div className='leftBookLC'> <img src={each.infoPlace.image} alt={each.infoPlace.placeName} className="imgBookLC"/> </div>
                  <div className='contentBookLC'>
                      <div className='eachRBookLC'><span>Thời gian đặt: </span> {each.timeBook} </div>
                      <div className='eachRBookLC'><span>Tên khách hàng: </span> {each.name} </div>
                      <div className='eachRBookLC'><span>Quốc gia: </span> <CountrySub countryEng={each.infoPlace.country}/> </div>
                      <div className='eachRBookLC'><span>Địa điểm: </span> {each.infoPlace.placeName}</div>
                      <div className='eachRBookLC'><span>Ngày khởi hành: </span> {each.date} </div>
                      <div className='eachRBookLC'><span>Thời gian khởi hành: </span> {each.time}:00h </div>
                      <div className='eachRBookLC'><span>Tổng chi phí: </span> {each.costTotal}$ </div>
                      <div className='titleRightBookLC'> Chi tiết </div>
                  </div>
                </div>
              </Link>
            </div>
          )
      })
    )
  }
  return (
    <div className='bookList'>
        <div className='titleBookList'>
             <h1>Các chuyến đi đã đặt</h1>
             <h4>Lên kế hoạch cho kì nghỉ của bạn, khám phá những địa điểm bạn yêu thích!</h4>
        </div>
        {checkBL()}
        <div className={sizeDataBL.current===0?"emptyBookList openRightEmptyBL":"emptyBookList closeRightEmptyBL"}>
            <div className='leftEmptyBL'>
                <img  src="./photoWeb/emptyBox.png"  alt="slide" className="imgEmptyBL"/>
            </div>
            <div className='rightEmptyBL' >
                <h1> Opp!!! Có vẻ như bạn chưa đặt bất kì một chuyến đi nào! </h1>
                <h3> Hãy cùng đi khám phá với chúng tôi nào! </h3>
            </div>
        </div>
    </div>
  )
}

export default BookList