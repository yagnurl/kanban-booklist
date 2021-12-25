import React from 'react'
import ColumnItem from '../ColumnItem/ColumnItem'
import './style.scss'
export default function KanbanColumn(props) {

    let groupByYear = props.books.reduce((r, a) => {
    r[a.first_publish_year] = r[a.first_publish_year] || [];
    r[a.first_publish_year].push(a);
    return r;
  }, Object.create(null));

    // let groupByYear = props.books.reduce((storage,item) => {
    //                             // `props.books` is an array of objects, `key` is the key (or property accessor) to group by
    //     var group = item[first_publish_year]; // get the first instance of the key by which we're grouping                            
    //     storage[group] = storage[group] || [];         // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    //     storage[group].push(item);                       // add this item to its group within `storage`
    //     return storage;    // return the updated storage 
    // }, {})             // {} is the initial value of the storage                                   
                                      
                                                  


    // convert groupByYear object into key's array to make iterable
    const keys = Object.keys(groupByYear);
    let values = []

    // iterate the keys to determine column id's (publish year)
    Object.keys(groupByYear).forEach((prop) => {
        values.push(groupByYear[prop])
        console.log("values", values);
    })
    
    return (
        <div className="kanbanContainer">
            {keys.map((key) => (

            <div className="kanbanColumn" id={key}>
                <p>{key}</p>

                {values.map((item) =>
                    item.map((element) =>
                    key == element.first_publish_year ? (
                        <ColumnItem item={item} props={element} />
                    ) : null
                    )
                )}
            </div>
        ))}
        </div>
    );
}
