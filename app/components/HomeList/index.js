import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Item from './item'


class HomeList extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    return(
          <div className="list-container">
            {
              this.props.data.map((item,index)=> {
              return   <Item key= {index} data= {item}></Item>
              })
            }
          </div>
    )

  }
  componentWillUpdate(){
    console.log("HomeList will update");
  }


}

export default  HomeList
