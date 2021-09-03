import React from 'react'
const profileComponent = (props) => {
    const btn={ 
        border: "none",
        color: "white", 
        padding: "14px 28px", 
        cursor: "pointer" ,
        backgroundColor: "#f44336",
        marginTop:"4px",
        marginLeft:"5px"


}
    return (
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid  justify-items-center  ">
        <div className="group relative">
          <div className="relative w-80 h-100 bg-white ">
           {props.children}
          </div>
          <h3 className="mt-6 text-5xl text-red-500">
           
              {props.name}
             
          </h3>
          
          <p className="text-3xl font-semibold text-gray-900 mt-3 ">{props.profession}</p>
         
          <p className="text-1xl font-semibold text-gray-900  relative w-80 h-100 mt-3 ">{props.bio}</p>

        </div>
        <button style={btn} onClick={() => props.alertName(`Hello Mrs  ${props.name}`)}>
              Say Hello for {props.name} 
        </button>
        </div>

        
    )
}

export default  profileComponent;