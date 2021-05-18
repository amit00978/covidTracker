
import React,{useEffect, useState} from 'react';
import numeral from "numeral";
import { Circle, Popup,LayerGroup } from "react-leaflet"




export const sortData = (data) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) =>  a.cases- b.cases)


}

// Draw circles on the map with interactive tooltop
export const showDataOnMap = (data, casesType = "deaths",casesTypeColor) => {
  console.log("caseTyoe", casesTypeColor)
  //  const [casesType, setCasesType] = useState(casesTypeColors)

    return (
<LayerGroup>
                  
  {data.map(country => {
      return (
            <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColor.hex}
            fillColor={casesTypeColor.hex}    
             radius={
                 Math.sqrt(country[casesType]) * casesTypeColor.multiplier
         }
        >
            <Popup>
                <div   className ="info-container">
                      <div
                   className="info-flag"
                      style={{backgroundImage:`url(${country.countryInfo.flag})`}}
                      /> 
                      <div className="info-name">{country.country}</div>  
                      <div  className="info-cases">Cases : {numeral(country.cases).format("0.0")}</div>  
                      <div className="info-recoverd">Recoverd : {numeral(country.recovered).format("0.0")}</div>  
                      <div className="info-deaths">Deaths : {numeral(country.deaths).format("0.0")}</div>            
                </div>
            </Popup>
        </Circle>
      )
    })}
        </LayerGroup>
    )

}

export const prettyPrintStart = (stat) =>  stat? `+ ${numeral(stat).format("0.0a")}` :"+0"






function sort(cb) {
    // in this object current array
    let sortData = this
    for (let j = 0; j < sortData.length - 1; j++)
    { 
            for (let i = 0; i < sortData.length-1; i++)
    {
        let res = cb(sortData[i], sortData[i + 1])
        if (res)
        {
            let sign = Math.sign(res)
            if (sign == -1)
            {
                let secondValue = sortData[i + 1];
                sortData[i + 1] = sortData[i]
                sortData[i] = secondValue 
            }
        }
      
    }
    }

    return sortData
}

Array.prototype.sort = sort
