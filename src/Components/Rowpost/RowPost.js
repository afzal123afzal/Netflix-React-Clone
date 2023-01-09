
import React,{useEffect,useState} from 'react'

import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../axios'



function RowPost(props) {
const [movies,setMovies] = useState([])
const [url,setUrl] = useState('')
useEffect(() => {
  axios.get(props.url).then((response)=>{
    // console.log(response.data.results)
    setMovies(response.data.results)
  }).catch(err=>{
    // console.log(err)
  })
  
}, )

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
   
    autoplay: 1,
  },
};
const handleMovie = (id)=>{
  console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0])
  if(response.data.results.length!==0){
  setUrl(response.data.results[0])
  }else{
    console.log("Trailer not Available")
  }
})
}



  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((obj)=>
              
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
           
          }
          
        </div>
       { url && <YouTube opts={opts} videoId={url.key}/>}
    </div>
  )
}

export default RowPost