import React from 'react';

import axios from 'axios';

class ArenaContent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blocks: []
    }
  }

  componentDidMount (){

    axios.get('https://api.are.na/v2/channels/61452/contents?per=1000')
    .then(
      (res) => {
        this.setState({ blocks: res.data.contents.reverse() });

        console.log('received: ');
        console.log(res.data.contents);
      }
    )

  }

  render() {

    return (
      <div>
        <h1>Virtualized Bodies</h1>
        { this.state.blocks.map( (i) =>

            i.base_class == "Block"
              ?
              <div style={{ float: 'left', padding: '50px', marginLeft: Math.random()*100, marginBottom: Math.random()*300}}><a href={"https://are.na/block/" + i.id}>{ i.image && <img src={i.image.display.url} style={{ width: 200+Math.random()*500 }}/> }<br/>{i.title}</a></div>
              :
              <span></span>



        )}
      </div>
    );
  }
}

export default ArenaContent;
