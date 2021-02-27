import React from 'react'
import TaskList from "./TaskList";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  toggleForm = (id) => {
    console.log('toggleForm');
    this.setState({
      isShow: true
    })
  }


  render() {
    return (
      <div className="App">
        <TaskList toggleForm={this.toggleForm} />
        <Form isShow={this.state.isShow} toggleForm={this.toggleForm} />
      </div>
    );
  }
}

export default App;
