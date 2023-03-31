import React,{useRef} from 'react'
import { Link } from 'react-router-dom';
import '../style/wishList.css'
import DataWL from '../data/DataWishList.js'
import CountrySub from '../data/CountrySub.js';

function WishList() {
    let sizeDataWL = useRef(DataWL.length);
    const pageUp = () => window.scrollTo(0, 0);
    // delete the favorite place
    function removeWishList(each){
        each.wishList = 0;
        let newArr = DataWL.filter((x) => x!==each);
        let lenDataWL=DataWL.length;
        for(let i=0;i<lenDataWL;i++) DataWL.pop();
        for(let i=0;i<newArr.length;i++) DataWL.push(newArr[i]);
        sizeDataWL.current--;
        document.getElementById("removeWishList"+each.country+each.counts).style.transition="all 0.5s ease-in-out, box-shadow 0.3s ease-in-out";
        setTimeout(()=>{
            document.getElementById("removeWishList"+each.country+each.counts).style.opacity="0";
        },50);
        setTimeout(()=>{
            document.getElementById("removeWishList"+each.country+each.counts).style.height= "0rem";
            document.getElementById("removeWishList"+each.country+each.counts).style.margin= "0";
            document.getElementById("removeWishList"+each.country+each.counts).style.padding= "0";
            checkDTLength();
        },300);
        setTimeout(()=>{
            document.getElementById("removeWishList"+each.country+each.counts).style.display="none";
        },900);
    }
    // Add effect delete
    function checkDTLength(){
        if(sizeDataWL.current===0){
            document.getElementsByClassName('closeRightEmptyWL')[0].style.display="flex";
            document.getElementsByClassName('emptyWishList')[0].classList.add('EmptyWLTransition');
            document.getElementsByClassName('leftEmptyWL')[0].classList.add('EmptyWLTransition');
            setTimeout(()=>{
                document.getElementsByClassName('emptyWishList')[0].classList.remove('closeRightEmptyWL');
                document.getElementsByClassName('emptyWishList')[0].classList.add('openRightEmptyWL');
                document.getElementsByClassName('leftEmptyWL')[0].classList.remove('classCloseImgEmptyWL');
                document.getElementsByClassName('leftEmptyWL')[0].classList.add('classOpenImgEmptyWL');
            },200);
            setTimeout(()=>{
                document.getElementsByClassName('emptyWishList')[0].classList.remove('EmptyWLTransition');
                document.getElementsByClassName('leftEmptyWL')[0].classList.remove('EmptyWLTransition');
            },800);
        }
    }
    function checkWL(){
        if(DataWL.length>0){
            return (
                // show off the favorite list
                DataWL.map((each)=>{
                    return(
                        <div className='wishListCard' id={"removeWishList"+each.country+each.counts}>
                            <Link to={"/"+each.country+"/"+each.counts+"/"+each.wishList} onClick={pageUp} className="linkWishListCard">
                                <div className='wishListCardContainer'>
                                    <div className='leftWLC'> <img src={each.image} alt={each.placeName} className="imgWLC"/> </div>
                                    <div className='contentWLC'>
                                        <div className='eachRWLC'><span>Quốc gia: </span>  <CountrySub countryEng={each.country}/> </div>
                                        <div className='eachRWLC'><span>Địa điểm: </span>{each.placeName}</div>
                                        <div className='eachRWLC'><span>Thời gian: </span>{each.time}</div>
                                        <div className='eachRWLC'><span>Giá: </span>{each.cost}$</div>
                                        <div className='eachRWLC'>
                                            <span>Đánh Giá: </span>
                                            <i className={each.rate>=1? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                            <i className={each.rate>=2? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                            <i className={each.rate>=3? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                            <i className={each.rate>=4? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                            <i className={each.rate===5? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                                        </div>
                                        <div className='titleRightWLC'> 
                                            Chi tiết
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='deleteWLC' onClick={()=>removeWishList(each)}>
                                <p> Xóa </p>
                                <img src="./photoWeb/removeFbox.png" alt="delete" className='imgDeleteWLC'/>
                            </div>
                        </div>
                    ) 
                })
            )
        }
    }
    return (
        <div className='wishList'>
            <div className='titleWishList'>
                 <h1>Danh sách đã lưu</h1>
                 <h4>Nơi lưu giữ những sản phẩm yêu thích của bạn!</h4>
            </div>
            {checkWL()}
            <div className={sizeDataWL.current===0?"emptyWishList openRightEmptyWL":"emptyWishList closeRightEmptyWL"}>
                <div className={sizeDataWL.current===0?"leftEmptyWL classOpenImgEmptyWL":"leftEmptyWL classCloseImgEmptyWL"}>
                    <img  src="./photoWeb/emptyBox.png"  alt="slide" className="imgEmptyWL" />
                </div>
                <div className='rightEmptyWL' >
                    <h1> Opp!!! Có vẻ như bạn chưa thêm bất kì sản phẩm nào danh mục yêu thích! </h1>
                    <h3> Hãy cùng đi khám phá với chúng tôi nào! </h3>
                </div>
            </div>
        </div>
    )
}

export default WishList