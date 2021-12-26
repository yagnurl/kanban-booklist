import React from 'react'
import ColumnItem from '../ColumnItem/ColumnItem'
import './style.scss'
export default function KanbanColumn(props) {

    //`props.books` is an array of objects, `key` is the key to group by
    let groupByYear = props.books.reduce((storage, item) => { 
    // set `storage` for the instance
    storage[item.first_publish_year] = storage[item.first_publish_year] || []; 
    // add this item to its group within `storage`
    storage[item.first_publish_year].push(item); 
    // return the updated storage 
    return storage; 
  }, Object.create(null)); //  initial value of the storage    

  
    // convert groupByYear object into key's array to make iterable
    const keys = Object.keys(groupByYear);
    let values = []


    // iterate the keys to determine column id's (publish year)
    Object.keys(groupByYear).forEach((key) => {
        values.push(groupByYear[key])
        console.log("values", values);
    })
    
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    return (
        <div className="kanbanContainer">
            {
                keys
                .filter((key) => key !== typeof(undefined))
                .map((key) => (
                    <div className="kanbanColumn" id={key} style={{borderTopColor: randomColor}}>
                        <p className="fs-20">{key}</p>
                        {values
                         
                         .map((item) => item
                         .map((element) =>
                            key == element.first_publish_year ? (
                            <ColumnItem item={item} props={element} />
                            ) : null)
                            
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}
