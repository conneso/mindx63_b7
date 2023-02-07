import { Component } from "react";
import AuthenticateService from "../../services/authenticate.service";
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.redirect = props.redirect;
    this.user = { username: "", password: "" };
    this.service = new AuthenticateService();
  }
  async login() {
    var result = await this.service.login(this.user);
    let { existed, token, message } = result.data;
    if (existed == undefined || existed == false) {
      alert(message);
    } else {
      alert("Successful");
      sessionStorage.setItem("token", token);
      if (this.redirect) window.location.href = `/${this.redirect}`;
    }
  }
  render() {
    return (
      <div>
        <h1>Đây là login page</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            this.user.username = e.target.value;
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            this.user.password = e.target.value;
          }}
        ></input>
        <input
          type="button"
          value="Login"
          onClick={() => {
            this.login();
          }}
        />
      </div>
    );
  }
}
