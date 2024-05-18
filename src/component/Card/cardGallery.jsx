import Card from './wordcard';
import data from '../../data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import './cardGallery.css'
import { useState,useContext } from 'react';
import Context from '../../context/context';


function CardGallery (){
  const [wordCount, setWordCount] = useState(0)
  const { words } =
    useContext(Context);

  const addToWord = () => {
    setWordCount(wordCount+1)
   
   }
    return(    
      <>
         <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
         {words.map((item)=>{
      return(
        <SwiperSlide>
        <Card id = {item.id} category={item.tags} word={item.english} transcription={item.transcription} translation={item.russian} addToWord = {()=> {addToWord()}}/>
        </SwiperSlide>
      )
    })}
     </Swiper>
     <p className='wordcount'>Выучено слов: {wordCount} </p>
      </>
    )
}

export default CardGallery