export class place{
        constructor(counts,country,image,placeName,time,cost,rate,wishList,describe){
            this.counts = counts;
            this.country = country;
            this.image = image;
            this.placeName = placeName;
            this.time = time;
            this.cost = cost;
            this.rate = rate;
            this.wishList = wishList;
            this.describe = describe;
    };
}
let VietNam1= new place(1,"VietNam","/photoWeb/VietNam/langBac.jpg","Lăng Bác","1 ngày",99,5,0,"Lăng Chủ tịch Hồ Chí Minh khởi công xây dựng vào 02/09/1973, ngay tại lễ đài nơi Bác đã đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa. Đến 29/08/1975, Lăng được chính thức khánh thành. Vật liệu xây Lăng được làm từ đá huyền đen, đá hoa gấm, mã não. Quần thể Lăng bao gồm quảng trường Ba Đình, phủ Chủ tịch, nhà sàn Bác Hồ. Lăng Chủ tịch Hồ Chí Minh là công trình có ý nghĩa to lớn thể hiện tình cảm sâu sắc của dân tộc đối với vị lãnh tụ kính yêu. Nơi đây nhân dân Việt Nam từ bao thế hệ đến viếng thăm tỏ lòng biết ơn chủ tịch Hồ Chí Minh - người đã quyết tâm đi theo con đường Cách mạng với mong muốn xây dựng một đất nước hòa bình, thống nhất, độc lập và dân chủ.");
let VietNam2= new place(2,"VietNam","/photoWeb/VietNam/baNaHill.jpg","Bà Nà Hills","3 ngày 2 đêm",199,4,0,"nice");
let VietNam3= new place(3,"VietNam","/photoWeb/VietNam/coDoHoaLu.jpg","Cố Đô Hoa Lư","1 ngày",149,3,0,"nice");
let VietNam4= new place(4,"VietNam","/photoWeb/VietNam/daoCatBa.jpg","Đảo Cát Bà","3 ngày 2 đêm",99,4,0,"nice");
let VietNam5= new place(5,"VietNam","/photoWeb/VietNam/daoPhuQuoc.jpg","Đảo Phú Quốc","5 ngày 4 đêm",599,5,0,"nice");
let VietNam6= new place(6,"VietNam","/photoWeb/VietNam/nhaThoDucBa.jpg","Nhà Thờ Đức Bà","1 ngày",149,4,0,"nice");
let VietNam7= new place(7,"VietNam","/photoWeb/VietNam/nhaTrang.jpg","Nha Trang","3 ngày 2 đêm",299,5,0,"nice");
let VietNam8= new place(8,"VietNam","/photoWeb/VietNam/phoCoHoiAn.jpg","Phố Cổ Hội An","1 ngày",149,4,0,"nice");
let VietNam9= new place(9,"VietNam","/photoWeb/VietNam/sapa.jpg","Sapa","3 ngày 2 đêm",199,4,0,"nice");
let VietNam10= new place(10,"VietNam","/photoWeb/VietNam/tamCoc.jpg","Tam Cốc","2 ngày 1 đêm",149,5,0,"nice");
let ArrVietNam = [VietNam1,VietNam2,VietNam3,VietNam4,VietNam5,VietNam6,VietNam7,VietNam8,VietNam9,VietNam10];

let America1= new place(1,"America","/photoWeb/America/tuongNuThanTuDo.jpg","Tượng Nữ Thần Tự Do","5 ngày 4 đêm",150,5,0,"beautiful");
let America2= new place(2,"America","/photoWeb/America/cauCongVang.jpg","Cầu Cổng Vàng","5 ngày 4 đêm",140,4,0,"nice");
let America3= new place(3,"America","/photoWeb/America/DisneyLand.jpg","DisneyLand","5 ngày 4 đêm",170,2,0,"nice");
let America4= new place(4,"America","/photoWeb/America/nhaThoPatrich.jpg","Nhà Thờ Patrich","5 ngày 4 đêm",200,3,0,"nice");
let America5= new place(5,"America","/photoWeb/America/SeaWorldOrlando.jpg","SeaWorld Orlando","5 ngày 4 đêm",150,5,0,"nice");
let America6= new place(6,"America","/photoWeb/America/thacNiagara.jpg","Thác Niagara","5 ngày 4 đêm",130,2,0,"nice");
let America7= new place(7,"America","/photoWeb/America/daoAlcatraz.jpg","Đảo Alcatraz","5 ngày 4 đêm",120,1,0,"nice");
let America8= new place(8,"America","/photoWeb/America/trungTamKhongGian.jpg","Trung Tâm Không Gian Kennedy","5 ngày 4 đêm",100,4,0,"nice");
let ArrAmerica = [America1,America2,America3,America4,America5,America6,America7,America8];

let England1= new place(1,"England","/photoWeb/England/bigBag.jpg","Đồng Hồ Big Bag","5 ngày 4 đêm",150,5,0,"beautiful");
let England2= new place(2,"England","/photoWeb/England/daiThienVanGreenwich.jpg","Đài Thiên Văn Greenwich","5 ngày 4 đêm",100,4,0,"nice");
let England3= new place(3,"England","/photoWeb/England/lauDaiWindsor.jpg","Lâu Đài Windsor","5 ngày 4 đêm",140,2,0,"nice");
let England4= new place(4,"England","/photoWeb/England/nhaThoThanhPaul.jpg","Nhà Thờ Thánh Paul","5 ngày 4 đêm",300,3,0,"nice");
let England5= new place(5,"England","/photoWeb/England/quangTruongTrafalgar.jpg","Quảng Trường Trafalgar","5 ngày 4 đêm",200,5,0,"nice");
let England6= new place(6,"England","/photoWeb/England/stonehenge.jpg","Stonehenge","5 ngày 4 đêm",100,2,0,"nice");
let England7= new place(7,"England","/photoWeb/England/thapLuanDon.jpg","Tháp Luân Đôn","5 ngày 4 đêm",120,4,0,"nice");
let ArrEngland = [England1,England2,England3,England4,England5,England6,England7];

let France1= new place(1,"France","/photoWeb/France/thapEiffel.jpg","Tháp Eiffel","5 ngày 4 đêm",150,5,0,"beautiful");
let France2= new place(2,"France","/photoWeb/France/thungLungLoire.jpg","Thung Lũng Loire","5 ngày 4 đêm",100,4,0,"nice");
let France3= new place(3,"France","/photoWeb/France/cungDienVersailles.jpg","Cung Điện Versailles","5 ngày 4 đêm",100,3,0,"nice");
let France4= new place(4,"France","/photoWeb/France/baoTangLouvre.jpg","Bảo Tàng Louvre","5 ngày 4 đêm",100,5,0,"nice");
let France5= new place(5,"France","/photoWeb/France/baoTangOrsay.jpg","Bảo Tàng Orsay","5 ngày 4 đêm",100,3,0,"nice");
let France6= new place(6,"France","/photoWeb/France/haiHoanMon.jpg","Hải Hoàn Môn","5 ngày 4 đêm",100,5,0,"nice");
let France7= new place(7,"France","/photoWeb/France/nhaThoLyon.jpg","Nhà Thờ Lyon","5 ngày 4 đêm",100,2,0,"nice");
let France8= new place(8,"France","/photoWeb/France/thanhPhoParis.jpg","Thành Phố Paris","5 ngày 4 đêm",100,4,0,"nice");
let France9= new place(9,"France","/photoWeb/France/thanhPhoBordeaux.jpg","Thành Phố Bordeaux","5 ngày 4 đêm",100,3,0,"nice");
let ArrFrance = [France1,France2,France3,France4,France5,France6,France7,France8,France9];

let Japan1= new place(1,"Japan","/photoWeb/Japan/nuiPhuSi.jpg","Núi Phú Sĩ","5 ngày 4 đêm",150,5,0,"beautiful");
let Japan2= new place(2,"Japan","/photoWeb/Japan/FushimiInari-taisha.jpg","Fushimi Inari-taisha","5 ngày 4 đêm",100,4,0,"nice");
let Japan3= new place(3,"Japan","/photoWeb/Japan/karuizawa.jpg","Karuizawa","5 ngày 4 đêm",100,2,0,"nice");
let Japan4= new place(4,"Japan","/photoWeb/Japan/kenroku-en.jpg","Kenroku-en","5 ngày 4 đêm",100,3,0,"nice");
let Japan5= new place(5,"Japan","/photoWeb/Japan/shibuya.jpg","Thành Phố Shibuya","5 ngày 4 đêm",100,5,0,"nice");
let Japan6= new place(6,"Japan","/photoWeb/Japan/thanhHimeji.jpg","Thành Himeji","5 ngày 4 đêm",100,2,0,"nice");
let Japan7= new place(7,"Japan","/photoWeb/Japan/thanhOsaka.jpg","Thành Osaka","5 ngày 4 đêm",100,3,0,"nice");
let Japan8= new place(8,"Japan","/photoWeb/Japan/tokyo.jpg","Thành Phố Tokyo","5 ngày 4 đêm",100,4,0,"nice");
let Japan9= new place(9,"Japan","/photoWeb/Japan/tokyoSkyTree.jpg","Tokyo Sky Tree","5 ngày 4 đêm",100,4,0,"nice");
let ArrJapan = [Japan1,Japan2,Japan3,Japan4,Japan5,Japan6,Japan7,Japan8,Japan9];

let China1= new place(1,"China","/photoWeb/China/vanLyTruongThanh.jpg","Vạn Lý Trường Thành","5 ngày 4 đêm",100,4,0,"nice");
let China2= new place(2,"China","/photoWeb/China/coCung.jpg","Cố Cung","5 ngày 4 đêm",100,4,0,"nice");
let China3= new place(3,"China","/photoWeb/China/CuuTraiCau.jpg","Cửu Trại Câu","5 ngày 4 đêm",100,2,0,"nice");
let China4= new place(4,"China","/photoWeb/China/HongKongDisneyLand.jpg","Hong Kong DisneyLand","5 ngày 4 đêm",100,3,0,"nice");
let China5= new place(5,"China","/photoWeb/China/quangChau.jpg","Quảng Châu","5 ngày 4 đêm",100,5,0,"nice");
let China6= new place(6,"China","/photoWeb/China/thanhDo.jpg","Thành Đô","5 ngày 4 đêm",100,2,0,"nice");
let China7= new place(7,"China","/photoWeb/China/thuongHai.jpg","Thượng Hải","5 ngày 4 đêm",100,1,0,"nice");
let China8= new place(8,"China","/photoWeb/China/bacKinh.jpg","Bắc Kinh","5 ngày 4 đêm",150,5,0,"beautiful");
let ArrChina = [China1,China2,China3,China4,China5,China6,China7,China8];

export let arr= [...ArrVietNam,...ArrAmerica,...ArrEngland,...ArrFrance,...ArrJapan,...ArrChina];
export default arr