import Card from './wordcard';
import data from '../../data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import './cardGallery.css'

function CardGallery (){
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
         {data.map((item)=>{
      return(
        <SwiperSlide>
        <Card id = {item.id} category={item.tags} word={item.english} transcription={item.transcription} translation={item.russian}/>
        </SwiperSlide>
      )
    })}
     </Swiper>
        </>
    )
}

export default CardGallery