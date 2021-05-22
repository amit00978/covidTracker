import React from 'react'
import './css/infoBox.css'
import { Card ,CardContent ,Typography } from "@material-ui/core"

function InfoBox({title,cases,total,active,caseKey,isNotRed,...props}) {
    return (
        <Card className={`infoBox ${active && `infoBox--selected`} ${!isNotRed && `infoBox--red` }`} onClick={() => {
            props.onClick(caseKey)
        }}>
            <CardContent color="textSecondary">
                <Typography className="infoBox__title">{title}</Typography>
                <h2 className={`infoBox__cases ${caseKey=='recovered' && `infoBox--cases-green` }`}>{cases}</h2>
                <Typography className="infoBox__total">{total} Total</Typography>
            </CardContent>  
        </Card>
    )
}

export default InfoBox
