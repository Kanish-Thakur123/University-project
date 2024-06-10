import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import user1 from "../../../assets/user-1.png";
import user2 from "../../../assets/user-2.png";
import user3 from "../../../assets/user-3.png";
import user4 from "../../../assets/user-4.png";

function Testimonial() {
    const slider= useRef()
    let tx=0;

         const slideforward=()=> {
        
        if(tx > -50){
        tx -=25;
        
        }
        
        slider.current.style.transform =`translateX(${tx}%)`;
    }
        
         const slideBackward=()=>{
         if(tx < 0) {
        tx += 25;
        } 
        slider.current.style.transform =`translateX(${tx}%)`;
    }

  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideforward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
         
        <li>
            <div className="slide">
              <div className="user1">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edisity,USA</span>
                </div>
              </div>
              <p>
                The most common division is between formal, non-formal, and
                informal education.[25][c] Formal education occurs within a
                structured institutional framework, typically with a
                chronological and hierarchical order. The modern schooling
                system organizes classes based on the student's age and
                progress, ranging from primary school to university. Formal
                education is usually overseen and regulated by the government
                and often mandated up to a certain age.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user1">
                <img src={user2} alt="" />
                <div>
                  <h3>Cristofer Nolan</h3>
                  <span>Edisity,USA</span>
                </div>
              </div>
              <p>
                The most common division is between formal, non-formal, and
                informal education.[25][c] Formal education occurs within a
                structured institutional framework, typically with a
                chronological and hierarchical order. The modern schooling
                system organizes classes based on the student's age and
                progress, ranging from primary school to university. Formal
                education is usually overseen and regulated by the government
                and often mandated up to a certain age.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user1">
                <img src={user3} alt="" />
                <div>
                  <h3>Cillian Murphy</h3>
                  <span>Edisity,USA</span>
                </div>
              </div>
              <p>
                The most common division is between formal, non-formal, and
                informal education.[25][c] Formal education occurs within a
                structured institutional framework, typically with a
                chronological and hierarchical order. The modern schooling
                system organizes classes based on the student's age and
                progress, ranging from primary school to university. Formal
                education is usually overseen and regulated by the government
                and often mandated up to a certain age.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user1">
                <img src={user4} alt="" />
                <div>
                  <h3>Jofra Archer</h3>
                  <span>Edisity,USA</span>
                </div>
              </div>
              
              <p>
                The most common division is between formal, non-formal, and
                informal education.[25][c] Formal education occurs within a
                structured institutional framework, typically with a
                chronological and hierarchical order. The modern schooling
                system organizes classes based on the student's age and
                progress, ranging from primary school to university. Formal
                education is usually overseen and regulated by the government
                and often mandated up to a certain age.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Testimonial;
