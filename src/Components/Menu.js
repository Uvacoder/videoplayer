import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
   handleClick(e){
    var text = e.target.value;
    this.props.chooseVideo(text);
  }

 render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="Frolicky" /> Frolicky
        <input type="radio" name="src" value="Chill" /> Chill AF
        <input type="radio" name="src" value="Cute" /> Feeling cute
        <input type="radio" name="src" value="Shady" /> Shady
      </form>
    );
  }
}