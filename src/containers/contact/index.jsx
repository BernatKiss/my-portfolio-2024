import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
   return (
      <section id="contact" className="contact">
         <PageHeaderContent
            headerText='My Contact'
            icon={<BsInfoCircleFill size={40} />}
         />
         <div className="contact__content">
            <Animate
               play
               duration={1}
               delay={0}
               start={{
                  transform: "translateX(-200px)"
               }}
               end={{
                  transform: "translateX(0px)"
               }}
            >
               <h3 className="contact__content__header-text">Let's Talk</h3>


            </Animate>
            <Animate
               play
               duration={1}
               delay={0}
               start={{
                  transform: "translateX(200px)"
               }}
               end={{
                  transform: "translateX(0px)"
               }}
            >

               <div className="contact__content__from">

                  <div className="contact__content__from__controlswrapper">
                     <div>
                        <input required type="text" className="inputName" name="name" />
                        <label htmlFor="email" className="nameLabel">Name</label>
                     </div>
                     <div>
                     <input required type="text" className="inputEmail" name="email" />
                     <label htmlFor="email" className="emailLabel">Email</label>
                     </div>
                     <div>
                     <textarea required type="text" className="inputDescription" name="decription" rows={5} />
                     <label htmlFor="decription" className="descriptionLabel">Description</label>
                     </div>

                  </div>
                  <button>Submit</button>

               </div>

            </Animate>   

         </div>
      </section>
   )
}
export default Contact