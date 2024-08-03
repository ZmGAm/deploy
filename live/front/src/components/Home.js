import React, { useState,useEffect, useContext } from 'react';
// import  Maps  from "./Maps";
import  Locationsearch  from "./Locationsearch";

import Pool_Read from './Pool_Read';
import './design/home.css';
// import ContextProvider from './Context/ContextProvider';
// import img1 from './design/images/HD-wallpaper-suzuki-swift-2017-glx-turbo-new-red-swift-h_002.jpg'
// import img2 from './design/images/gmain.jpg'
// import air from './icon/air.png'
// import bags from './icon/bags.png'
// import doors from './icon/doors.png'
// import engine from './icon/engine.png'
// import gaer from './icon/gaer.png's
// import seat from './icon/seat.png'
// https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&key=AIzaSyC8arsGuaqOBNIqoDrS5_Do12RzK0ZhK_c
import cars_content from './cars_content';
// import  SourceContext  from './Context/SourceContext';
// import  DestinationContext  from './Context/DestinationContext';
// import DestinationContext from './Context/DestinationContext';
// import SourceContext from './Context/SourceContext';
// import REACT_APP_FOURTH_API_KEY from './.env.local'
// const map_api_key=AIzaSyC8arsGuaqOBNIqoDrS5_Do12RzK0ZhK_c;
import {DestinationContext} from './Context/DestinationContext';
import {SourceContext} from './Context/SourceContext';
import GoogleMapNew from './GoogleMapNew';
import { LoginContext } from './Context/LoginContext';
import { object } from 'yup';

// import GoogleMap from './GoogleMap';

const Home = () => {
  // const [count, setCount] = useStsate(0);
  // const [hide, setHide] = useState("shown");
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(310);
  // const source= useContext(SourceContext);
  const { destination} = useContext(DestinationContext);
  const { login} = useContext(LoginContext);
  const {source} = useContext(SourceContext);
  const [bottomwidth, setBottomWidth] = useState(23);
  const [height, setHeight] = useState(150);
  const [bottomheight, setBottomHeight] = useState(10);
  const [property] = useState(cars_content);
  
  // useEffect
  // const [maperror, setMapError] = useState();
  // if(loading){
  //   // console.log(map_is_loading);
  //   // setMapError({useJsApiLoader:Error});
  //    return<><h2>map is loading</h2></> 
  // }
  
  // setPoperty(cars_content);
  const toggleVisibility = () => {
        setIsVisible(!isVisible);
        if(width===310){
        setWidth(700);
      }
      else{
        setWidth(310);
      }
        setHeight(height);
        // height=23;
        if(bottomheight===10){
          setBottomHeight(2);
        }
        else{
          setBottomHeight(10);
        } 
        setBottomWidth(bottomwidth);
      
    }
    

    useEffect(() => {
      // setPlaceholder(type === 'Source' ? 'Pickup Location ' : 'Dropoff Location ');
      if(destination){

        console.log("destinaion",destination.name)
      }
      if(source){
        
        // console.log("destinaion",destination.name)
        console.log("source",source.name)
      }
      if(login){
        
        // console.log("destinaion",destination.name)
        console.log("login in home ",login)
      }
    }, [source,destination,login]);
    // console.log("source in home ",source)
    // console.log("destinaion in home",destination)
   
    return<>
    

    <div className='all'>
    
                  <div className='upper'>
                                            <div style={{width:"900px"}} className="div-for-cars1">
                                                        
                                                        <Locationsearch type='Source'/>
                                                        <Locationsearch type='destination'/>
                                                        

                                                        <div style={{width:"100%"}} className="div-for-cars">
                                                         <div className="poolread">

                                                                   <Pool_Read/>
                                                         </div>
                                                         <div className='text'>private vehicle</div> 
    {
       
      //  Object.values(property).map((elem)=>{
       property.map((elem)=>{
          const{carname,carimag,model,dooricon,noofdoor,bagsicon,noofbags,seatticon,noofseats,
            tranmissionicon,tranmissiontype,airconditionicon,aircondition,engineicon,engine,
            vehicaltype,safty,interior,price}=elem;
          return(
          // {!elem.carname?"car nem not render":(<div>{elem.carname}</div>)}
          
          // <div>gamer</div>
          
        
        <div style={{width,height}}  className="content">
          <div style={{width,height}} className="car1">
            <div className="insid-car1">
              <img
              onClick={toggleVisibility}
                className="pic1"
                src={carimag}
                alt="Suzuki Swift"
              />{!isVisible && 
              <div  className="tex1">
                <h1>{carname}</h1>
                <p1>{model}</p1>
                <div className="nishan">
                  <div className="icon">
                    <img
                      className="me-2"
                      src={dooricon}
                      alt="Doors"
                      width="22"
                      height="22"
                    />
                    <span className="no">{noofdoor}</span>
                  </div>
                  <div className="icon">
                    <img
                      className="me-2"
                      src={bagsicon}
                      alt="Large Bag"
                      width="22"
                      height="22"
                    />
                    <span className="no">{noofbags}</span>
                  </div>
                  <div className="icon">
                    <img
                      className="me-2"
                      src={seatticon}
                      alt="Passengers"
                      width="22"
                      height="22"
                    />
                    <span className="no">{noofseats}</span>
                  </div>
                  <div className="icon">
                    <img
                      className="me-2"
                      src={tranmissionicon}
                      alt="Transmission"
                      width="22"
                      height="22"
                    />
                    <span className="no">{tranmissiontype}</span>
                  </div>
                  <div className="icon">
                    <img
                      className="me-2"
                      src={airconditionicon}
                      alt="AC"
                      width="22"
                      height="22"
                    />
                    <span className="no">{aircondition}</span>
                  </div>
                  <div className="icon">
                    <img
                      className="me-2"
                      src={engineicon}
                      alt="Engine"
                      width="22"
                      height="22"
                    />
                    <span className="no">{engine}</span>
                  </div>
                </div>
                
              </div>}
              <div className="type">
        {/* vehicaltype:"Reguler", */}
                                    <h3>{vehicaltype}</h3>
                </div>
              
            </div>
            {!isVisible && 
            <div style={{bottomwidth,bottomheight}} className="bottom">
        
        
        <div className=" protection">
            <div>
                <div className="first-in-botom">
                    <div className="text3" role="alert">
                        {safty}</div>
                </div>
            </div>
            <div>
                <div className="two-in-botom">
                    <div className="text3" role="alert">
                        Clean {interior}r</div>
                </div>

            </div>
        </div>


        <div className="rs">
            <div>
                <div className="three-in-botom">
                    <div className="price"> Rs {price}</div>
                </div>

            </div>
            <div>
                <div className="four-in-bottom">
                    <button className="bn2"> request</button>
                </div>
            </div>
        </div>

            </div>
            }
          </div>
        </div> 
                
          
       )
      })
    }
                                              </div>
                                                       
                                              </div>
                                              
     
                                                  <div style={{width:'100vw',height:'100%', border:"3px solid blue"}}  >
                                                    
                                                     
                                                          <GoogleMapNew/>

                                                        

                                                </div>
                                               
                </div>
                <div >
                  {/* <Pool_Read/> */}
                </div>
   </div>
   
   {/* </ContextProvider> */}
  </>
}
  
export default Home