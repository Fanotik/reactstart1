import React from 'react'
import clasess from './Home.module.css'

function Home() { 
    return(
        <div className={clasess.main}>
      <div className={clasess.card}>
        <h2>Mikhail Volkov</h2>
        <p>Saint Lector, good men</p>
      </div>
      <div className={clasess.card}>
        <h2>Ivan Mishkyn</h2>
        <p>Big papa, small mama, medium rare</p>
      </div>
      <div className={clasess.card}>
        <h2>Alan Kock</h2>
        <p>yes or not?</p>
      </div>
      <div className={clasess.card}>
        <h2>Anton Kaban</h2>
        <p>Papa moego Papy</p>
      </div>
    </div>
    )
}
export default Home;