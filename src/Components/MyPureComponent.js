import React, { PureComponent } from 'react'

 class MyPureComponent extends PureComponent {
    render() {
       console.log("pure Component Log")
      return <div>PureComponent:{this.props.count}</div>
    
  }
}
export default MyPureComponent;
