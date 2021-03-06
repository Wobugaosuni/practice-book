import React from 'react';
import './index.styl';

import Input from '../../components/Input';
import List from '../../components/List';

class {{componentName}} extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };
  }

  render() {
    return (
      <div role="containers:{{componentName}}">
        <h2>To Do List Demo</h2>
        <Input onInputSubmit={this.onInputSubmit.bind(this)} />
        <List todoList={this.state.todoList} deleteItem={this.deleteItem.bind(this)} />
      </div>
    );
  }

  onInputSubmit(inputValue) {
    let id = this.state.todoList.length;

    this.setState({
      todoList: this.state.todoList.concat({
        id: id,
        value: inputValue
      })
    });
  }

  deleteItem(id) {
    this.setState({
      todoList: this.state.todoList.filter((element, index) => {
        return id !== index;
      })
    });
  }
}

export default {{componentName}};
