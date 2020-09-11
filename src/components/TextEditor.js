import React from 'react';

class TextEditor extends React.Component {

constructor(){
  super();
  this.state={
    term:"",
    listterms:[]
  }
}


handleChange=(event)=>{
  this.setState({
    term: event.target.value,
  })
}

appendText=()=>{
  let list = this.state.listterms;
  list.push(this.state.term+'');
  this.setState({
    listterms : list
  })
  this.setState({
    term:"",
  })
}


undoChange=()=>{
  let list = this.state.listterms;
  list.pop(''+this.state.term);
  this.setState({
    listterms : list
  })
 this.setState({term: ''});
}


  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input
          value={this.state.term}
          className="word-input"
          type="text"
          onChange={this.handleChange}
          data-testid="word-input" />
          <button data-testid="append-button" disabled={this.state.input===''} onClick={this.appendText}>Append</button>
          <button data-testid="undo-button" onClick={this.undoChange}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.listterms}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
