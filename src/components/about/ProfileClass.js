import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    // console.log(`${this.props.name} : constructor`);
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/armaan-yadav`);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
    // console.log(`${this.props.name} : componentDidMount`);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  render() {
    let { count } = this.state;
    //  `   console.log(`${this.props.name} : render`);`
    return (
      <div className="flex  flex-col">
        <h2 className="text-3xl font-bold">GitHub </h2>
        <img
          src={this.state.userInfo.avatar_url}
          className=" w-[10rem] text-center"
        />
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.login}</h2>
        <h2>{this.state.userInfo.bio}</h2>
      </div>
    );
  }
}

export default ProfileClass;
