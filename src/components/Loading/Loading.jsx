import React from 'react'
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="loader">
                    <Loader type="TailSpin" width={20} height={20} color="#2F2432"/> 
                    <span>Loading...</span> 
                </div>
    )
}
