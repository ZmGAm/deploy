import axios from 'axios';
import { useState ,useEffect } from 'react';
import React from 'react';
const Tasveer = () => {
    const preset_key="cars-pics";
    // const cloud_name="";
    const [image, setImage] = useState();
    const inputvalid= (e)=>{
        // const name=e.target.name;
        const file=e.target.files[0];
        // const value=e.target.value;
        const formData =new FormData();
        formData.append('file',file);
        formData.append('upload_preset',preset_key);
        axios.post("https://api.cloudinary.com/v1_1//dogabixdo/image/upload",formData)
        .then(res=>setImage(res.data.secure_url))
        .catch(err=>console.log(err))

        // console.log(name,value);

        // setUserRegistration({...userRegistration,[name]:value});
        // setImage({...image,[name]:value});

    }
    return <>
   {/* <div>map</div> */}

   <div>
            <form action=""  > 
            
                                <label htmlFor="file">image</label>
                                <input type="file"
                                //  value={userRegistration.Image}
                                onChange={inputvalid}
                                autoComplete='off'name="image" id="image" />
                                {/* <p1 className="formerrors">{error.Image}</p1> */}
                        
                        {/* <button type='Submit'>submmit</button> */}
                        <img src={image} className="w-10 h-10"/>
            </form>
   </div>


    </>
      
};
  
export default Tasveer;