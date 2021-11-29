import * as React from 'react'
import Character from '../components/Character'
import bgImg from '../images/contour-map.svg'
import wwwanyuAvatar from '../images/wwwanyu.svg'
import "../styles/index.sass"
import "../styles/button.sass"

const ShowMySite = () => {
  return (
  <div style={bodyStyles}>
    <header>
        <h1>曬裝備</h1>
    </header>
    <title>曬裝備 - 登山裝備檢查表</title>
    <main>
        <Character id="1" width={200}/>
        <p>曬裝備是一個方便分享給其他人的登山裝備檢查表</p>
        <div style={teamStyles}>
            由
            <a href="http://ruoshin.wang" target="_blank">
              <div className='ruoshin' />
                ruoshin
            </a>
            跟
            <a href="https://wwwanyu.com" target="_blank">
                <img src={wwwanyuAvatar} alt="wwwanyu's avatar" style={{display: "block"}} />
                wwwanyu
            </a>
            共同開發中
        </div>
    </main>
    <footer style={teamStyles}>
        <a href="https://github.com/showmygear" target="_blank">GitHub</a>
        <a href="https://showmygear.tumblr.com" target="_blank">Dev Blog</a>
    </footer>
  </div>
  )
}

const bodyStyles = {
  background: `url(${bgImg})no-repeat center center/cover`,
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#333",
  textAlign: "center",
  overflow: "hidden"
}

const teamStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  marginTop: 80
}

export default ShowMySite
