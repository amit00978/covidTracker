
import { FormControl, MenuItem, Select,CardContent,Card } from '@material-ui/core';
import React,{ useState,useEffect } from 'react';
import { get } from "../../network/axios"
import InfoBox from "../../InfoBox"
import Map from '../../Map'
import Table from '../../Table'
import LineGraph from '../../LineGraph'
import { sortData,prettyPrintStart } from '../../util'
import "leaflet/dist/leaflet.css"
import Drawer from '../../common/Drawer/Drawer'


function News() {
    return (
            <div className="app" >
            <h3>hello i am her</h3>
        </div>
 )
}

export default News;
