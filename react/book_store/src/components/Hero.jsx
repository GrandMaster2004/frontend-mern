import React from 'react'
import  {Books} from '../data.js'
import Swiper from 'swiper'
const Hero = () => {
  return (
    <>
      <div className='mt-16 mx-10 md:mx-40 flex gap-28'>
        <div>
            <h1 className='text-7xl font-bold mb-10'>Unlock Worlds, <br/> turn pages...</h1>
            <p className="text-xl">
                "Joureny through the pages, find solace in words, and let the stories within shape your world."
            </p>
        </div>

        <div className='w-72'>
            <swiper-container effect="cards" autoplay="true">
                {
                    Books.map((book, i)=>(
                        <Swiper-slide>
                            <img src={book.book_cover} alt={book.title} width="200px" />
                        </Swiper-slide>
                    ))
                }
            </swiper-container>
        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D3D9D1" fill-opacity="1" d="M0,256L18.5,234.7C36.9,213,74,171,111,165.3C147.7,160,185,192,222,213.3C258.5,235,295,245,332,256C369.2,267,406,277,443,240C480,203,517,117,554,112C590.8,107,628,181,665,208C701.5,235,738,213,775,218.7C812.3,224,849,256,886,272C923.1,288,960,288,997,266.7C1033.8,245,1071,203,1108,202.7C1144.6,203,1182,245,1218,229.3C1255.4,213,1292,139,1329,90.7C1366.2,43,1403,21,1422,10.7L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
    </>
  )
}

export default Hero
