import React from 'react'
import loading from '../assets/loading.gif'

import {loadingClass} from './loading.module.css'
function Loading() {
    return (
        <div className={loadingClass}>
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading
