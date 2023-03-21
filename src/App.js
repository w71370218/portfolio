import './App.css';
import photoListJson from './assets/json/image-list.json'
import { useState } from "react";
import Arrowleft from './assets/svg/Arrow left.svg'
import Arrowright from './assets/svg/Arrow right.svg'
import useRWD from './compoments/useRWD'

function App() {
  const device = useRWD();
  const photoList = photoListJson;
  const [photoIndex, setPhotoIndex] = useState(0);

  const arrow_size = device === "PC" ? 120 : 50;
  const [menuicon, setMenuicon] = useState("")
  const [menu, setMenu] = useState("hidden")

  const MenuToggle = () => {
    if (menuicon === "") {
      setMenuicon("change")
      setMenu("")
    }
    else {
      setMenuicon("")
      setMenu("hidden")
    }
  }

  return (
    <div className="App">
      <nav>
        <div className={`menu-icon ${menuicon}`} onClick={() => MenuToggle()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div style={{ width: "100%" }} ><a style={{ display: 'flex', justifyContent: 'center', fontSize: '125%' }}>楊子右的設計作品集</a></div>
      </nav>
      <div className={`menu ${menu}`}>
        <div className='menu-item'><a href='https://ur-blog.vercel.app/' target={'_blank'}>UR&#39;s Blog</a></div>
        <div className='menu-item'><a href='https://ur-blog.vercel.app/project' target={'_blank'}>網頁作品集</a></div>
        <div className='menu-item'><a href='https://w71370218.github.io/' target={'_blank'}>個人網站</a></div>
      </div>
      <header className="App-header">

      </header>
      <main>
        <div>
          <div className="photo-area">
            <div className='arrow-area'>
              {
                photoIndex !== 0 &&
                <div className='arrow left-arrow' onClick={() => setPhotoIndex(photoIndex - 1)}>
                  <svg width={arrow_size} height={arrow_size} viewBox={`0 0 ${arrow_size} ${arrow_size}`} xmlns="http://www.w3.org/2000/svg">
                    <use href={`${Arrowleft}#svg`} width={arrow_size} height={arrow_size} />
                  </svg>
                </div>
              }

              {
                photoIndex !== photoList.length - 1 &&
                <div className='arrow right-arrow' onClick={() => setPhotoIndex(photoIndex + 1)}>
                  <svg width={arrow_size} height={arrow_size} viewBox={`0 0 ${arrow_size} ${arrow_size}`} xmlns="http://www.w3.org/2000/svg">
                    <use href={`${Arrowright}#svg`} width={arrow_size} height={arrow_size} />
                  </svg>
                </div>
              }
            </div>
            <div className='photo'>
              <img src={require(`././assets/img/${photoList[photoIndex].src}`)} alt="Background" />
            </div>
          </div>
          <div className="photo-list">
            <div className={`images-group"`}>

              <div className={`thumbnail`}>
                {
                  photoList.map((keys, index) => (
                    <div key={index} className={`image-grid`}>
                      <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: photoIndex === index ? 'rgba(255, 255, 255, 0.6)' : '#000' }}>
                        <img src={require(`././assets/img/${keys.src}`)} onClick={e => setPhotoIndex(index)} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="photo-description">
            <p>
              {photoList[photoIndex].description}
            </p>
          </div>
        </div>
      </main>
      <footer>版權所有 © 楊子右</footer>
    </div>
  );
}

export default App;
