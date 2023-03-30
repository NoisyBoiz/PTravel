import React from "react";
import "../style/contact.css"
function Contact(){
    return(
        <div className="contact">
            <div className="contactContainer">
                <div className="contactContent">
                    <div className="leftContact">
                        <div className="contactTitle">
                            <h1>Nếu bạn muốn liên lạc với chúng tôi vui lòng chọn một trong những cách dưới đây</h1>
                        </div>
                        <form action="" className="contactForm">
                            <input type="text" placeholder="Tên của bạn"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Số điện thoại"/>
                            <input type="text" placeholder="Địa chỉ"/>
                            <textarea placeholder="Tin nhắn" ></textarea>
                            <input type="submit" value="Xác nhận gửi"/>
                        </form>
                    </div>
                    <div className="rightContact">
                        <div  className="rightContactContainer">
                            <div className="single-contact">
                                <i className="fa fa-map-marker"></i>
                                <h4>Địa chỉ</h4>
                                <p>@123 - Hà Nội</p>
                            </div>
                            <div className="single-contact">
                                <i className="fa fa-phone"></i>
                                <h4>Số điện thoại</h4>
                                <p>(+8)123456789</p>
                            </div>
                            <div className="single-contact">
                                <i className="fa fa-envelope"></i>
                                <h4>Email</h4>
                                <p>someone@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;