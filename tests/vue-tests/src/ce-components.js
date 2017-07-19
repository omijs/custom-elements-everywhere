import Vue from 'vue';
import 'ce-without-children';
import 'ce-with-children';
// import 'ce-with-properties';

const ComponentWithoutChildren = Vue.component('component-without-children', {
  template: `
    <div>
      <ce-without-children id="wc"></ce-without-children>
    </div>
  `
});

const ComponentWithChildren = Vue.component('component-with-children', {
  template: `
    <div>
      <ce-with-children id="wc"></ce-with-children>
    </div>
  `
});

// const ComponentWithChildrenRerender = Vue.component({
//   constructor () {
//     super();
//     this.state = { count: 1 };
//   }
//   componentDidMount () {
//     this.interval = setTimeout(() =>
//       this.setState({count: this.state.count += 1}), 1000);
//   }
//   componentWillUnmount () {
//     clearInterval(this.interval);
//   }
//   render () {
//     const { count } = this.state;
//     return (
//       <div>
//         <ce-with-children id="wc">{count}</ce-with-children>
//       </div>
//     );
//   }
// });

// export class ComponentWithDifferentViews extends Component {
//   constructor () {
//     super();
//     this.state = { showWC: true };
//   }
//   toggle() {
//     this.setState({ showWC: !this.state.showWC });
//   }
//   render () {
//     const { showWC } = this.state;
//     return (
//       <div>
//         {showWC ? (
//           <ce-with-children id="wc"></ce-with-children>
//         ) : (
//           <div id="dummy">Dummy view</div>
//         )}
//       </div>
//     );
//   }
// }

// export class ComponentWithProperties extends Component {
//   render () {
//     const data = {
//       bool: true,
//       num: 42,
//       str: 'Preact',
//       arr: ['P', 'r', 'e', 'a', 'c', 't'],
//       obj: { org: 'developit', repo: 'preact' }
//     };
//     return (
//       <div>
//         <ce-with-properties id="wc"
//           bool={data.bool}
//           num={data.num}
//           str={data.str}
//           arr={data.arr}
//           obj={data.obj}
//         ></ce-with-properties>
//       </div>
//     );
//   }
// }

// export class ComponentWithUnregistered extends Component {
//   render () {
//     const data = {
//       bool: true,
//       num: 42,
//       str: 'Preact',
//       arr: ['P', 'r', 'e', 'a', 'c', 't'],
//       obj: { org: 'developit', repo: 'preact' }
//     };
//     return (
//       <div>
//         {/* This element doesn't actually exist.
//         It's used to test unupgraded behavior. */}
//         <ce-unregistered id="wc"
//           bool={data.bool}
//           num={data.num}
//           str={data.str}
//           arr={data.arr}
//           obj={data.obj}
//         ></ce-unregistered>
//       </div>
//     );
//   }
// }

// export class ComponentWithEvent extends Component {
//   constructor() {
//     super();
//     this.state = { wasClicked: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     this.setState({ wasClicked: !this.state.wasClicked });
//   }
//   render() {
//     return (
//       <div>
//         <div id="toggle">{this.state.wasClicked.toString()}</div>
//         <ce-with-event id="wc" onClick={this.handleClick}></ce-with-event>
//       </div>
//     );
//   }
// }

export {
  ComponentWithoutChildren,
  ComponentWithChildren
};
