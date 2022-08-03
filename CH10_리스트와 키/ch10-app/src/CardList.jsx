import React from 'react'
import Card from './Card'

const articles = [
  {
    img:'night.jpg',
    title:'Baby',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img:'night2.jpg',
    title:'My dog',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img:'night3.jpg',
    title:'vacation',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img:'night4.jpg',
    title:'Food',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img:'night5.webp',
    title:'Blog',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img:'night6.jpg',
    title:'Nature',
    content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];


function CardList() {
  return (
    <div className='container mt-5 d-flex flex-row justify-content-center flex-wrap'>
      {//맵 돌릴때 key 넣어줘야 각 요소들 식별가능
        articles.map((element, idx) => {
          let img = element.img;
          let title = element.title;
          let content = element.content;

          return <Card key={idx} img={img} title={title} content={content}/>
        })
      }
    </div>
  )
}

export default CardList