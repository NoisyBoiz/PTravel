import React from 'react'
import '../style/place.css'
function place({each}) {
    return (
        // show the information of place
        <div className='placeContainer'>
        <div className='topPlaceContainer'> <img src = {each.image} alt={each.placeName} className="imageDemo"/> </div>
            <div className='bottomPlaceContainer'>
                <div className='eachBottom'><span>Địa điểm: </span>{each.placeName}</div>
                <div className='eachBottom'><span>Thời gian: </span>{each.time}</div>
                <div className='eachBottom'><span>Giá: </span>{each.cost}$</div>
                <div className='eachBottom'>
                <span>Đánh Giá: </span>
                <i className={each.rate>=1? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                <i className={each.rate>=2? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                <i className={each.rate>=3? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                <i className={each.rate>=4? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                <i className={each.rate===5? "fa-solid fa-star iconRate yellowStar":"fa-solid fa-star iconRate whileStar"}></i>
                </div>
            </div>
        </div>
    )
}
export default place