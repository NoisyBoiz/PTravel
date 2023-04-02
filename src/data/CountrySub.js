// translate name of country in English to Vietnamese
function checkCountry(countryEng){
    switch (countryEng){
        case "VietNam": return "Việt Nam"; 
        case "America": return "Mỹ"; 
        case "England": return "Anh"; 
        case "France": return "Pháp"; 
        case "Japan": return "Nhật Bản"; 
        default: return "Trung Quốc";
    }
}
function CountrySub({countryEng}) {
  return (
    checkCountry(countryEng) 
  )
}

export default CountrySub