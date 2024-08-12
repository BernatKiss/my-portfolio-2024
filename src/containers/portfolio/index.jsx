import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from './image1.jpeg'
import ImageTwo from './image2.jpg'
import ImageThree from './image3.jpg'
import ImageFour from './image4.jpeg'
import ImageFive from './image5.jpeg'
import './styles.scss'

const PortfolioData = [
   {
      id: 2,
      name: 'Ecommerce',
      image: ImageOne,
      link: ''
   },
   {
      id: 3,
      name: 'Notes App',
      image: ImageTwo,
      link: ''
   },
   {
      id: 2,
      name: 'Supplier Design',
      image: ImageThree,
      link: ''
   },
   {
      id: 2,
      name: 'Todo App',
      image: ImageFour,
      link: ''
   },
   {
      id: 3,
      name: 'Shopping cart design',
      image: ImageFive,
      link: ''
   }
]

const filterData = [
   {
      filterId: 1,
      label: 'All'
   },
   {
      filterId: 2,
      label: 'Development'
   },
   {
      filterId: 3,
      label: 'Design'
   },
]


const Portfolio = () => {

   const [filteredvalue, setFilteredValue] = useState(1)
   const [hoveredValue, setHoveredValue] = useState(null)

   function handleFilter(currentId) {
      setFilteredValue(currentId)
   }

   function handleHover(index) {
      setHoveredValue(index)
   }

   console.log('========================')
   console.log(hoveredValue)
   console.log('========================')

   const filteredItem = filteredvalue === 1 ? PortfolioData :
      PortfolioData.filter(item => item.id === filteredvalue)

   console.log(filteredItem)

   return (
      <section id="portfolio" className="portfolio">
         <PageHeaderContent
            headerText='My Portfolio'
            icon={<BsInfoCircleFill size={40} />}
         />
         <div className='portfolio__content'>

            <ul className="portfolio__content__filter">
               {
                  filterData.map((item) => (
                     <li
                        className={item.filterId === filteredvalue ? 'active' : ''}
                        onClick={() => handleFilter(item.filterId)}
                        key={item.filterId}
                     >
                        {
                           item.label
                        }
                     </li>
                  ))
               }
            </ul>
            <div className="portfolio__content__cards">
               {
                  filteredItem.map((item, index) => (
                     <div
                        className="portfolio__content__cards__item"
                        key={`cardItem${item.name.trim()}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                     >
                        <div className="portfolio__content__cards__item__img-wrapper">
                           <a>
                              <img src={item.image} alt="dummy data" />
                           </a>
                        </div>
                        <div className="overlay">
                           {
                              index === hoveredValue && (
                                 <div>
                                    <p>{item.name}</p>
                                    <button>Visit</button>
                                 </div>
                              )
                           }
                        </div>
                     </div>
                  ))
               }
            </div>

         </div>
      </section>
   )
}
export default Portfolio