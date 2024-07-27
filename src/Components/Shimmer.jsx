// import React from "react";

// const Shimmer = ()=>{
//     return(
//         <div className="shimmer-container">
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//             <div className="shimmer-card">Card</div>
//         </div>
//     )
// }

// export default Shimmer


import React from "react";
import { ShimmerPostDetails } from "react-shimmer-effects";

class Example extends Component {
  render() {
    return (
      <>
        <ShimmerPostDetails card cta variant="SIMPLE" />
        <ShimmerPostDetails card cta variant="EDITOR" />
      </>
    );
  }
}