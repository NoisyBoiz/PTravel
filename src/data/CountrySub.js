function checkCountry(countryEng){
    switch (countryEng){
        case "VietNam": return "Việt Nam"; break;
        case "America": return "Mỹ"; break;
        case "England": return "Anh"; break;
        case "France": return "Pháp"; break;
        case "Japan": return "Nhật Bản"; break;
        case "China": return "Trung Quốc";
    }
}
function CountrySub({countryEng}) {
  return (
    checkCountry(countryEng) 
  )
}

export default CountrySub