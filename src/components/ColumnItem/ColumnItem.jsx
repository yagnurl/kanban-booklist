import React from 'react'
import Collapsible from 'react-collapsible';
import './style.scss'

import ChevronIcon from '../../img/icons/chevron-down.svg'
import PagesIcon from '../../img/icons/pages.svg'
import ReadTimeIcon from '../../img/icons/read-time.svg'

export default function ColumnItem(props) {

    return (
        <div className="columnItem" >
            <Collapsible trigger={props.props.title_suggest}>
                <div className="tags">
                    <button className="fs-12">{props.props.edition_count} Editions</button>
                    <span className="fs-12">First Published: {props.props.first_publish_year ? props.props.first_publish_year : "Unknown"}</span>
                </div>

                <div className="reader">
                    <div className="fs-11">
                        <img src={PagesIcon} alt="" />
                        <span>{props.props.number_of_pages_median ? props.props.number_of_pages_median : "Unknown"} Pages</span>
                    </div>

                    <div className="fs-11">
                        <img src={ReadTimeIcon} alt="" />
                        <span>32 hours read time</span>
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}
