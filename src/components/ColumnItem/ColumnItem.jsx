import React from 'react'
import './style.scss'
export default function ColumnItem() {
    return (
        <div className="columnItem">
            <h5>Title</h5>

            <div className="tags">
                <button>123</button>
                <span>1943</span>
            </div>

            <div className="reader">
                <span>450 pages</span>
            </div>
        </div>
    )
}
