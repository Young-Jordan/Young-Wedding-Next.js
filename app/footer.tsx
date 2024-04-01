
'use client'

import Link from "next/link";
import * as React from "react";


export default function Footer() {
   React.useEffect(() => {
    document.addEventListener('scroll', function(e) {
            document.querySelector('audio')?.play();
       });
   })
    return(
        <footer onScroll={()=>{console.log(document.querySelector('audio'))}} className="fixed w-screen flex px-6 py-4 z-50 bottom-0 overflow-hidden">
            {/* 
                <audio className="relative -left-5" id="audio" src="/audio/turning-page.mp3" loop controls controlsList="nodownload noplaybackrate" />
            */}
        </footer>
    )

}