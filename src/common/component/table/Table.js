import React from 'react'
import numeral from "numeral";

function Table({ countries }) {
    return (
        <div className="table">
            {countries.map(({ country, cases,countryInfo,todayCases}) => {
                console.log("country--->",country)
                return (
                    <tr>
                        {/* <td>{country}</td> */}
                        <td> 
                            <div style={{display: 'flex'}}>
                                <img src={countryInfo.flag} alt="" style={{ height: 20, width: 20, borderRadius: 20 }} />
                                <h5 style={{marginLeft:15,color:'var(--darkText-color)'}}>{country}</h5>
                            </div>
                            <h5 style={{marginLeft:35,color:'#f7aaa9',fontSize:10}}>{`+`+todayCases}</h5>
                            
                        </td>
                    <td><strong style={{color:'#5c6c80'}}>{numeral(cases).format("0,0")}</strong></td>
                </tr>
                )
            }
                
           )}
        </div>
    )
}

export default Table
