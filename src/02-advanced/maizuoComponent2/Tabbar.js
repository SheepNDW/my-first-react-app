// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item, index) => (
//             <li
//               key={item.id}
//               className={this.props.current === index ? 'active' : ''}
//               onClick={() => this.handleClick(index)}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }

//   handleClick(index) {
//     // 通知父組件, 修改 current 狀態
//     this.props.changeIndex(index)
//   }
// }

const Tabbar = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li
            key={item.id}
            className={props.current === index ? 'active' : ''}
            onClick={() => props.changeIndex(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabbar
