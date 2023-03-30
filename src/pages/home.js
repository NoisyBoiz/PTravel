import React, {useCallback, useEffect,useRef} from "react";
import '../style/home.css'
function Home(){
    const slide = useRef();
    const img = useRef();
    let counts= useRef(0);
    let setTime = useRef();
    let checkSetTime = useRef(0);
    let setTimeAni = useRef();
    useEffect(() => {
        slide.current= document.querySelector('.slideContainer');
        img.current = document.querySelectorAll('.slideContainer .boxImageSilde');
        slide.current.style.transform = 'translate(' + (-100 * counts.current) +'vw)';
        document.getElementById('buttonSlide'+counts.current).style.backgroundColor = "#7b7b7b";
    },[])
    function checkEndOfImage(){
        setTimeAni.current = setTimeout(()=>{
            if(counts.current >= img.current.length-1){
                slide.current.style.transition = "none";
                counts.current=0;
                slide.current.style.transform = 'translate(' + (-100 * counts.current) +'vw)';
            }
        },1000);
    }
    const autoNext = useCallback(()=>{
        setTime.current = setTimeout(()=>{
            slide.current.style.transition = "transform 1s ease-in-out";
            counts.current++;
            checkEndOfImage();
            slide.current.style.transform = 'translate(' + (-100 * counts.current) +'vw)';
            slideBackgroundColor();
            if(checkSetTime.current===0) checkSetTime.current=1;
            autoNext();
        },5000);
    },[]);
    useEffect(()=>{
        autoNext();
    },[autoNext]);
    
    function slideShow(n){
        counts.current = n;
        clearTimeout(setTime.current);
        clearTimeout(setTimeAni.current);
        checkSetTime.current=0;
        slide.current.style.transition = "transform 1s ease-in-out";
        slide.current.style.transform = 'translate(' + (-100 * counts.current) +'vw)';
        slideBackgroundColor();
        checkEndOfImage();
        if(checkSetTime.current===0) autoNext();
    }
    const slideBackgroundColor = ()=>{
        document.querySelectorAll('.buttonSlide').forEach(Element => {
            Element.style.backgroundColor="white";
        }); 
        if(counts.current >= img.current.length-1){
            if(document.getElementById('buttonSlide0')!==undefined)
            document.getElementById('buttonSlide0').style.backgroundColor = "#7b7b7b";
        } 
        else {
            if(document.getElementById('buttonSlide'+counts.current)!==undefined)
            document.getElementById('buttonSlide'+counts.current).style.backgroundColor = "#7b7b7b";
        }
    }
    
    return(
        <div className="home">
                <div className="homeTop">
                    <div className="slideContainer">
                        <div id="imageSlide0" className="boxImageSilde"> <img src="./photoWeb/VietNam/baNaHill.jpg"  alt="slide" className="imageSlide"/> </div>
                        <div id="imageSlide1" className="boxImageSilde"> <img src="./photoWeb/VietNam/daoPhuQuoc.jpg"  alt="slide" className="imageSlide"/> </div>
                        <div id="imageSlide2" className="boxImageSilde"> <img src="./photoWeb/VietNam/sapa.jpg"  alt="slide" className="imageSlide"/> </div>
                        <div id="imageSlide3" className="boxImageSilde"> <img src="./photoWeb/VietNam/phoCoHoiAn.jpg"  alt="slide" className="imageSlide"/> </div>
                        <div id="imageSlide4" className="boxImageSilde"> <img src="./photoWeb/America/cauCongVang.jpg"  alt="slide" className="imageSlide"/> </div>
                        <div id="lastImageSlide" className="boxImageSilde"> <img src="./photoWeb/VietNam/baNaHill.jpg"  alt="slide" className="imageSlide"/> </div>
                    </div>
                    <div className="homeTopTitle">
                        <p> Không Ngừng <br></br> Trải Nghiệm </p>
                        <h3> Khám Phá Muôn Nơi</h3>
                    </div>
                    <div className="buttonContainer">
                        <button id="buttonSlide0" className="buttonSlide" onClick={() => slideShow(0)} ></button>
                        <button id="buttonSlide1" className="buttonSlide" onClick={() => slideShow(1)} ></button>
                        <button id="buttonSlide2" className="buttonSlide" onClick={() => slideShow(2)} ></button>
                        <button id="buttonSlide3" className="buttonSlide" onClick={() => slideShow(3)} ></button>
                        <button id="buttonSlide4" className="buttonSlide" onClick={() => slideShow(4)} ></button>
                    </div>
                </div>
                <div className="homeContent">
                    <div className="welcome"> 
                        <h1> Chào Mừng Bạn </h1> 
                        <h4> Cảm ơn vì đã đến với dịch vụ vủa chúng tôi</h4>
                    </div>
                    <div className="mainContent">
                        <div className="leftMainContent">
                            <div className="cardMainContent moutainMainCard">
                                <div className="moutainImageCard"></div>
                                <div className="endMoutainImageCard"> <p>Đặt Ngay</p> </div>
                                <div className="titleImageCard"><span> Nếu bạn đang mơ về một kỳ nghỉ rất cần thiết và xứng đáng, nhưng không có tiền để thực hiện điều đó cho bạn và gia đình, hãy xem xét các khoản vay du lịch: đặt ngay bây giờ, thanh toán sau và tận hưởng kỳ nghỉ của bạn. </span> </div>
                            </div>
                            <div className="cardMainContent forestMainCard">
                                <div className="forestImageCard"></div>
                                <div className="endForestImageCard"> <p>Đặt Ngay</p> </div>
                                <div className="titleImageCard"> <span> Hầu hết mọi người tiết kiệm tiền để trang trải chi phí cho chuyến du lịch của họ. Tuy nhiên, quá trình này có thể diễn ra trong một khoảng thời gian dài. Tùy chọn Đặt trước Trả tiền sau có thể là cách phù hợp để đạt được ước mơ du lịch của bạn ngay lập tức. </span></div>
                            </div>
                            <div className="cardMainContent beachMainCard">
                                <div className="beachImageCard" ></div>
                                <div className="endBeachImageCard"> <p>Đặt Ngay</p> </div>
                                <div className="titleImageCard"><span> Chúng tôi luôn sẵn sàng giúp bạn lên kế hoạch cho một chuyến đi hoàn hảo. Bất kể là đi nghỉ, đi công tác. Chúng tôi sẽ là cầu nối đưa bạn đi vòng quanh thế giới với những chuyến bay giá rẻ, khách sạn ưu đãi và những chuyến tàu vòng quanh thế giới.  </span></div>
                            </div>  
                        </div>
                        <div className="rightMainContent"> 
                            <span className="topRightMC"> Các Dịch Vụ Khác </span>
                            <div className="cardRightMCContainer">
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC">
                                        <i className="iconCardRMC fa-sharp fa-solid fa-stethoscope"></i>
                                        <p>Bảo Hiểm</p>  
                                    </div>
                                    <div className="titleCardRMC">
                                        <span> Cam kết có dịch vụ bảo hiểm cho chuyến du lịch của khách hàng</span>
                                        <button id="titleCardRMCButton1">Xem Thêm</button>
                                    </div>
                                </div>
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC"> 
                                        <i className="iconCardRMC fa-solid fa-key"></i>   
                                        <p>Đặt Phòng</p>
                                    </div>
                                    <div className="titleCardRMC">
                                        <span>Dịch vụ đặt phòng chuyên nghiệp tại các khách sạn sang trọng, 5 sao</span>
                                        <button id="titleCardRMCButton2">Xem Thêm</button>
                                        </div> 
                                </div>
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC"> 
                                        <i className="iconCardRMC fa-sharp fa-solid fa-utensils"></i>   
                                        <p>Ăn Uống</p>
                                    </div>
                                    <div className="titleCardRMC">
                                        <span>Cung cấp dịch vụ ăn uống, tổ chức tiệc, tổ chức sự kiện cho khách hàng</span>
                                        <button id="titleCardRMCButton3">Xem Thêm</button>
                                        </div> 
                                </div>
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC"> 
                                        <i className="iconCardRMC fa-solid fa-ticket"></i>  
                                        <p>Đặt Vé Máy Bay</p>
                                    </div>
                                    <div className="titleCardRMC">
                                        <span>Dịch vụ đặt vé máy bay giá rẻ, dễ dàng, nhanh chóng cho khách hàng</span>
                                        <button id="titleCardRMCButton4">Xem Thêm</button>
                                    </div> 
                                </div>
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC"> 
                                        <i className="iconCardRMC fa-solid fa-car-side"></i>  
                                        <p>Thuê Xe</p> 
                                    </div>
                                    <div className="titleCardRMC">
                                        <span>Cung cấp các phương tiện di chuyển cho khách du lịch</span>
                                        <button id="titleCardRMCButton5">Xem Thêm</button>
                                    </div> 
                                </div>
                                <div className="cardRightMC"> 
                                    <div className="topCardRMC">
                                        <i className="iconCardRMC fa-sharp fa-solid fa-tag"></i>   
                                        <p>Dịch Vụ Kèm Theo</p>
                                    </div>
                                    <div className="titleCardRMC">
                                        <span>Kèm theo các dịch vụ tiện ích khác giúp khách hàng có chuyến đi tuyệt vời</span>
                                        <button id="titleCardRMCButton6">Xem Thêm</button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeBottom"> 
                        <h1 className="titleHomeBottom">- Tin Nổi Bật -</h1>
                        <div className="homeBottomContent">
                            <div className="boxHBC boxHBC1"></div>
                            <div className="boxHBC boxHBC2"></div>
                            <div className="boxHBC boxHBC3"></div>
                            <div className="boxHBC boxHBC4"></div>
                            <div className="boxHBC boxHBC5"></div>
                            <div className="boxHBC boxHBC6"></div>
                            <div className="boxHBC boxHBC7"></div>
                            <div className="boxHBC boxHBC8"></div>
                        </div>
                </div>
        </div>
    )
}
export default Home;