import React, {useState} from 'react'
import './index.styl'

import DidMount from './didMount'
import Clear from './clear'
import UseMemo from './useMemo'
import Update from './class-father'

function Hooks() {
  const [showTimer, setTimer] = useState(false)
  const [a, setA] = useState('white')
  const [b, setB] = useState('yellow')

  const changeColor = () => {
    setA('black')
    // setB('blue')
  }

  return (
    <div role="containers:Hooks">
      <h2>Hooks DidMount 时机</h2>
      <DidMount />

      <h2 className="mt40">Hooks 执行清理的操作</h2>
      {
        showTimer ? <Clear /> : <div>已清除</div>
      }
      <button onClick={() => setTimer(!showTimer)}>
        {
          showTimer ? '清除定时器' : '重新计时'
        }
      </button>

      <div className="FBH FBJS mt40">
        <div>
          <h2>Hooks 减少不必要的渲染</h2>
          <UseMemo a={a} b={b} />
        </div>
        <div>
          <h2>class 下，需要用 shouldComponentUpdate 判断</h2>
          <Update a={a} b={b} />
        </div>
      </div>
      <button onClick={() => changeColor()} className="mt40">
        改颜色
      </button>
    </div>
  )
}

export default Hooks