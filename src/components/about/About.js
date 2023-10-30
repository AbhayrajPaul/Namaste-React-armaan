import { Outlet } from "react-router-dom";
import ProfileFunctional from "../about/Profile";
import ProfileClass from "../about/ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent : Constructor");
  }

  componentDidMount() {
    // console.log("Parent : componentDidMount");
  }
  render() {
    // console.log("Parent : Render");
    return (
      <>
        <div className=" px-[5rem]  bg-body  py-[2rem] flex flex-row h-[80vh] justify-between items-center">
          <div className="flex  flex-col">
            <h1 className="text-4xl">About Us Page</h1>
            <p className="text-2xl">Kya Karoge hamare baare jaankar ?</p>
          </div>
          {/* <Outlet /> */}
          <ProfileClass name="child1" />
          {/* <ProfileClass name="child2" /> */}
          {/* <ProfileFunctional name="Kajal" /> */}
        </div>
      </>
    );
  }
}
export default About;

/**
 * Parent Constructor
 * Parent Render
 *    Child Constructor
 *    Child Render
 *
 *    Child ComponentDidMount
 *        API Call
 *        log Json
 *        log Child COmponentDidMount
 *
 * Parent ComponentDidMount
 *
 *
 **/
