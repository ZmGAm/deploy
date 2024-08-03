import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
function Localdevelop() {
//     const[searchvalue,setSearchvalue]=useState({
//   destination:{},
//   source:{}

//  } );
 const[searchsource,setSearchSource]=useState(null );
 const[searchdestination,setSearchDestination]=useState(null );

    // const[searchdestination,setSearchDestination]=useState(null);
    useEffect(() => {
      console.log("search source value in develop" ,searchsource);
      // console.log("search destination value in develop" ,searchdestination);
    }, [searchsource]);
    useEffect(() => {
      console.log("search destination in develop" ,searchdestination);
      // console.log("search destination value in develop" ,searchdestination);
    }, [searchdestination]);
    return(
  <>
  
   <GooglePlacesAutocomplete
   selectProps={
    {
     value:searchsource,
     onChange:setSearchSource
    }
   }
   />  
   <GooglePlacesAutocomplete
   selectProps={
    {
      value: searchdestination,
      onChange:setSearchDestination
    }
   }
  
   
   />  
  <div>
   {/* <h1> search values{search}</h1> */}

  </div>
  </>
 )  
}

export default Localdevelop
