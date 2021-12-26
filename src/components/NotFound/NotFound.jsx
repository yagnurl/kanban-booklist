import React from 'react'
import NoData from '../../img/empty-state-image.png'
import '../../global.scss'
import './style.scss'

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={NoData} alt="" />
            <h5 className="fs-30">There is no board to show</h5>
        </div>
    )
}
