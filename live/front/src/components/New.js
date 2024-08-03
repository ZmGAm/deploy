import React, { useState } from 'react';
import './design/home.css';
import img1 from './design/images/HD-wallpaper-suzuki-swift-2017-glx-turbo-new-red-swift-h_002.jpg'
import img2 from './design/images/gmain.jpg'
import air from './icon/air.png'
import bags from './icon/bags.png'
import doors from './icon/doors.png'
import engine from './icon/engine.png'
import gaer from './icon/gaer.png'
import seat from './icon/seat.png'

const New = () => {
  const [isVisible, setIsVisible] = useState(Array(4).fill(true)); // Change the array length according to the number of cards you have

  const toggleVisibility = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  return (
    <>
      <div class="div-for-cars">
        {isVisible.map((visible, index) => (
          <div key={index} className="content">
            <div className="car1">
              <div className="insid-car1">
                <img
                  onClick={() => toggleVisibility(index)}
                  className="pic1"
                  src={index === 0 ? img1 : img2}
                  alt="Suzuki Swift"
                />
                {!visible && (
                  <div className="tex1">
                    <h1>Suzuki Swift</h1>
                    <p1>glx-turbo</p1>
                    <div className="nishan">
                      <div className="icon">
                        <img
                          className="me-2"
                          src={doors}
                          alt="Doors"
                          width="22"
                          height="22"
                        />
                        <span className="no">4</span>
                      </div>
                      <div className="icon">
                        <img
                          className="me-2"
                          src={bags}
                          alt="Large Bag"
                          width="22"
                          height="22"
                        />
                        <span className="no">1</span>
                      </div>
                      <div className="icon">
                        <img
                          className="me-2"
                          src={seat}
                          alt="Passengers"
                          width="22"
                          height="22"
                        />
                        <span className="no">4</span>
                      </div>
                      <div className="icon">
                        <img
                          className="me-2"
                          src={gaer}
                          alt="Transmission"
                          width="22"
                          height="22"
                        />
                        <span className="no">Manual</span>
                      </div>
                      <div className="icon">
                        <img
                          className="me-2"
                          src={air}
                          alt="AC"
                          width="22"
                          height="22"
                        />
                        <span className="no">Yes</span>
                      </div>
                      <div className="icon">
                        <img
                          className="me-2"
                          src={engine}
                          alt="Engine"
                          width="22"
                          height="22"
                        />
                        <span className="no">300cc</span>
                      </div>
                    </div>
                  </div>
                )}
                <div class="type">
                  <h3>Reguler</h3>
                </div>
              </div>
              {!visible && (
                <div class="bottom">
                  <div class=" protection">
                    <div>
                      <div class="first-in-botom">
                        <div class="text3" role="alert">
                          Theft Protection
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="two-in-botom">
                        <div class="text3" role="alert">
                          Clean Interior/Exterior
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rs">
                    <div>
                      <div class="three-in-botom">
                        <div class="price"> Rs 65000/Per day</div>
                      </div>
                    </div>
                    <div>
                      <div class="four-in-bottom">
                        <button class="bn2"> Book Me</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default New;
