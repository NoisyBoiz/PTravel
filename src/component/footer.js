import React from 'react'
import "../style/footer.css"
function Footer() {
  return (
    <div className='footer'>
    <div className='footerContent'> "Nếu không thể tìm được bạn đồng hành, hãy cứ đi. Bởi khi đến nơi, bạn sẽ thấy họ ở đó. Không cần nhiều lý do để bắt đầu 1 chuyến đi mới. Mọi thứ có khi chỉ bắt đầu từ một bộ phim, một bài hát, một bức ảnh…" </div>
      <div className="socialLinks">
        <div className="socialLinksContent"> Liên hệ: </div>
          <div className="socialLinksContainer">
          <div className="eachLink twitter"> <i className="fa-brands fa-twitter"></i> </div>
          <div className="eachLink facebook"> <i className="fa-brands fa-facebook-f"></i> </div>
          <div className="eachLink instagram"> <i className="fa-brands fa-instagram"></i> </div>
          <div className="eachLink linkedin"> <i className="fa-brands fa-linkedin-in"></i> </div>
          <div className="eachLink mail"> <i className="fa-solid fa-envelope"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Footer