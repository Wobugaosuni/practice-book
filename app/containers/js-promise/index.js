import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'

function clickTimeout() {
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done') 
    })
  }

  timeout(100).then(value => {
    console.log(value) // done
  })
}

function taskOrder() {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 0)
  
  new Promise(resolve => {
    console.log(3)
    resolve()
  }).then(() => setTimeout(() => {
    console.log(4)
  }, 0))
    .then(() => console.log(5))
    
  console.log(6)
}

function howError() {
  Promise.resolve()
    .then(() => {
      return new Error('error!!!')
    })
    .then((res) => {
      console.log('then: ', res)
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
}

function catchThen() {
  Promise.resolve()
    .then(() => {
      throw new Error('error!')
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
    .then((res) => {
      throw new Error('error!!!')
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
    .then((res) => {
      console.log('then: ', res)
    })
}

function lastCatch() {
   Promise.resolve()
    .then(() => {
      throw new Error('error!')
    })
    .then((res) => {
      throw new Error('error!!!')
    })
    .then((res) => {
      console.log('then: ', res)
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
}

class JsPromise extends React.Component {
  render() {
    return (
      <div role="containers:Promise">
        <h2>1. 模仿异步请求 Promise</h2>
        <SyntaxHighlighter language="javascript">
          {clickTimeout.toString()}
        </SyntaxHighlighter>
        <button onClick={() => clickTimeout()}>执行函数</button>

        <h2>2. 宏任务、微任务的输出顺序</h2>
        <SyntaxHighlighter language="javascript">
          {taskOrder.toString()}
        </SyntaxHighlighter>
        <button onClick={() => taskOrder()}>执行函数</button>

        <h2>3. 抛出错误的姿势</h2>
        <SyntaxHighlighter language="javascript">
          {howError.toString()}
        </SyntaxHighlighter>
        <button onClick={() => howError()}>执行函数</button>

        <h2>4. catch、then 顺序</h2>
        <SyntaxHighlighter language="javascript">
          {catchThen.toString()}
        </SyntaxHighlighter>
        <button onClick={() => catchThen()}>执行函数</button>

        <h2>5. 统一捕获异常</h2>
        <SyntaxHighlighter language="javascript">
          {lastCatch.toString()}
        </SyntaxHighlighter>
        <button onClick={() => lastCatch()}>执行函数</button>
      </div>
    )
  }
}

export default JsPromise