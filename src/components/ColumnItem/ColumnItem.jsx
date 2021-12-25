import React from 'react'
import './style.scss'
export default function ColumnItem(props) {

    return (

        <div className="columnItem">
            <h5>{props.props.title_suggest}</h5>

            <div className="tags">
                <button>{props.props.edition_count}</button>
                <span>{props.props.first_publish_year}</span>
            </div>

            <div className="reader">
                <span>{props.props.number_of_pages_median}</span>
            </div>
        </div>
    )
}
