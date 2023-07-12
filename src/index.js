import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />

      </div>
    </div>
    </>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill="PYTHON" emoji="🤮" color="green" />
      <Skill skill="mySQL" emoji="😭" color="pink" />
      <Skill skill="JavaScript" emoji="🫦" color="purple" />
      <Skill skill="HTML" emoji="🥹" color="red" />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

function Intro() {
  return <div>
    <h1>นางสาวอาทิตยา ปูสาเดช</h1>
    <p>
      นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร
      คณะวิทยาศาสตร์ มหาวิทยาอุบลราชธานี
      งานอดิเรก คือ เล่นเกม ดูหนัง
    </p>
  </div>
}

function Avatar() {
  return <img className='avatar' src='prang.jpg' alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);