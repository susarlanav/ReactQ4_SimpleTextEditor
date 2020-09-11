import React from 'react';


class TextEditor extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      inputList:[]
    }
  }
  handleAppend=()=>{
    let list = this.state.inputList;
    list.push(' ' +this.state.input);
    this.setState({inputList:list});
    this.setState({input: ''});

  }
  handleUndo=()=>{
    let list = this.state.inputList;
    list.pop(this.state.input + ' ');
    this.setState({inputList:list});
    this.setState({input: ''});
  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input value ={this.state.input} onChange={this.onInputChange} id="inputBox" className="word-input" type="text" data-testid="word-input" />
          <button data-testid="append-button" onClick={this.handleAppend} disabled={this.state.input===''}>Append</button>
          <button data-testid="undo-button" onClick={this.handleUndo} disabled={this.state.inputList.length === 0}>Undo</button>
        </div>
    <div className="text-field" data-testid="text-field">{this.state.inputList}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
