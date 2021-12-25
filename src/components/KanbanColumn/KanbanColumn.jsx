import React from 'react'
import ColumnItem from '../ColumnItem/ColumnItem'
import './style.scss'
export default function KanbanColumn() {
    return (
        <div>
            <div className="kanbanContainer">
                <div className="kanbanColumn">
                    <p>1925</p>
                    <ColumnItem/>
                </div>
            </div>
        </div>
    )
}
