import React from 'react'
import {useParams,Link} from "react-router-dom";
import '../style/country.css'
import Place from './place.js'
import Data from '../data/DataPlace.js'
import CountrySub from '../data/CountrySub';
function Country() {
    let {country} = useParams();
    const pageUp = () => window.scrollTo(0, 0);
    return (
        // show the place list
        <div className='country'>
            <div className='countryContainer'>
            <div className='topContent'> - <CountrySub countryEng={country} /> - </div>
                {Data.map((each) =>{
                    if(each.country === country){
                        return(
                            <Link key={each.counts} to={"/"+each.country+"/"+each.counts+"/"+each.wishList} onClick={pageUp}>
                                <div className='place'>
                                    <Place each={each}/>
                                </div>
                            </Link>
                        )
                    }
                    else return null;
                })}
            </div>
        </div>
    )
}
export default Country