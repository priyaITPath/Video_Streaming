import React, { useState } from "react";
import ReactPlayer from "react-player";
import v1 from "../../assets/videos/v1.mp4";
import v2 from "../../assets/videos/v2.mp4";
import v3 from "../../assets/videos/v3.mp4";
import v4 from "../../assets/videos/v4.mp4";
import v5 from "../../assets/videos/v5.mp4";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

var moviesr = [
  {
    id: 0,
    title: "Car Racing ",
    des:"Auto racing is a motorsport involving the racing of automobiles for competition. Auto racing has existed since the invention of the automobile. Races of various sorts were organised, with the first recorded as early as 1867. ",
    desc: v1,
    playing: false,
  },
  {
    id: 1,
    title: "Nature",
    des:"Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology. ",
    desc: v2,
    playing: false,
  },
  {
    id: 2,
    title: "Car Rider",
    des:"A rider is an extra protection added to an insurance policy in exchange for paying a higher premium to an insurer. CarRiderPro is a safe and efficient way to streamline the dismissal of car riding students at the end of the school day.",
    desc: v3,
    playing: false,
  },
  {
    id: 3,
    title: "Ocean Love",
    des:"Oceans are areas of salty water that fill enormous basins on the Earth's surface. Even though Earth has one continuous body of saltwater, scientists and geographers divide it into five different sections. ",
    desc: v4,
    playing: false,
  },
  {
    id: 4,
    title: "Journey around the world",
    des:"A tour is an organized trip that people such as musicians, politicians, or theatre companies go on to several different places, stopping to meet people or perform.journey around the world; world tour; voyage around the world.",
    desc: v5,
    playing: false,
  },
  {
    id: 5,
    title: "Car Racing ",
    des:"Auto racing is a motorsport involving the racing of automobiles for competition. Auto racing has existed since the invention of the automobile. Races of various sorts were organised, with the first recorded as early as 1867. ",
    desc: v1,
    playing: false,
  },
  {
    id: 6,
    title: "Nature",
    des:"Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology. ",
    desc: v2,
    playing: false,
  },
  {
    id: 7,
    title: "Car Rider",
    des:"A rider is an extra protection added to an insurance policy in exchange for paying a higher premium to an insurer. CarRiderPro is a safe and efficient way to streamline the dismissal of car riding students at the end of the school day.",
    desc: v3,
    playing: false,
  },
  {
    id: 8,
    title: "Ocean Love",
    des:"Oceans are areas of salty water that fill enormous basins on the Earth's surface. Even though Earth has one continuous body of saltwater, scientists and geographers divide it into five different sections. ",
    desc: v4,
    playing: false,
  },
  {
    id: 4,
    title: "Journey around the world",
    des:"A tour is an organized trip that people such as musicians, politicians, or theatre companies go on to several different places, stopping to meet people or perform.journey around the world; world tour; voyage around the world.",
    desc: v5,
    playing: false,
  },
];

function Home() {
  const [first, setFirst] = useState(true);
  const [movies, setmovies] = useState(moviesr);

  const PlayVideo = (e) => {
    const newState = movies.map((obj) => {
      if (obj.id === e) {
        return { ...obj, playing: true };
      }
      return obj;
    });
    setmovies(newState);
  };
  const PauseVideo = (e) => {
    const newState = movies.map((obj) => {
      if (obj.id === e) {
        return { ...obj, playing: false };
      }
      return obj;
    });
    setmovies(newState);
  };

  return (
    <div style={{flexDirection:"row", justifyContent: "space-between" }} className="flex-wrap flex   justify-between mt-2">
      {movies.map((item, key) => {
        return (

         
          <Card className="mt-4 mx-4" sx={{ maxWidth: 345 }}>
          <ReactPlayer 
          // style={{ height:"20rem"}}
            // onMouseLeave={()=>{setFirst(false)
            //    setSecond(true)}}
            onMouseOver={() => PlayVideo(item.id)}
            onMouseLeave={() => PauseVideo(item.id)}
            url={item.desc}
            muted={true}
            playing={item.playing}
            width="100%"
            height="auto"
            controls
          />
     
      <CardContent>
      <Typography >
      {item.title}
      </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.des}
        
        </Typography>
      </CardContent>
     
    </Card>








        );
      })}

     




    </div>



   

  );
}

export default Home;
