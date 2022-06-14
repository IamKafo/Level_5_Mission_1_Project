import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
        <div className="homeContainer">
            <div className="search">
                <input type="text" placeholder='Search'  />
                <button className='searchButton'>SEARCH</button>
            </div>
            <div className="content">
                <div className="card">
                    <div className="top1"></div>
                    <div className="bottom">
                        <h1>Normal</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top2"></div>
                    <div className="bottom">
                        <h1>Old School</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top3"></div>
                    <div className="bottom">
                        <h1>Futuristic</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home