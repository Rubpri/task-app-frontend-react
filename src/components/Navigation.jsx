import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Navigation() {
  
  return (
    
    <div className="flex justify-between py-3">
        <Link to="/">
            <h1 className="font-bold text-3xl mb-4">Task App</h1>
        </Link>
        
        <Link to="/tasks-create">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg" >
          Crear tarea
        </button>
        </Link>
    </div> 
  )
}


