import React from "react";
import Container from "../../components/container/Container";
import Title from "../../components/title";
import "./__signUp.scss";

const SignUp = () => {
  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="signUp">
        <form className="signUp__form">
          <Title className="signUp__form__title">Sign Up</Title>
          <input className="signUp__input" type="file" />
          <div style={{ display: "flex", width: "100%", maxWidth: "800px" }}>
            <input
              style={{ marginRight: "8px" }}
              className="signUp__input"
              placeholder="First Name"
            />
            <input
              style={{ marginLeft: "8px" }}
              className="signUp__input"
              placeholder="Last Name"
            />
          </div>
          {/* <div>
            <input className="signUp__input" type="email" placeholder="Email" />
            <input
              className="signUp__input"
              type="password"
              placeholder="Email"
            />
            <input
              className="signUp__input"
              type="email"
              placeholder="Department"
            />
            <input
              className="signUp__input"
              type="email"
              placeholder="Department"
            />
            <input className="signUp__input" type="email" placeholder="Batch" />
            <input
              className="signUp__input"
              type="email"
              placeholder="Graduation Year"
            />
            <input
              className="signUp__input"
              type="email"
              placeholder="Mobile No."
            />
            <input
              className="signUp__input"
              type="submit"
              placeholder="Mobile No."
            />
          </div> */}
          <input className="signUp__input" type="email" placeholder="Email" />
          <input
            className="signUp__input"
            type="password"
            placeholder="Email"
          />
          <input
            className="signUp__input"
            type="email"
            placeholder="Department"
          />
          <input
            className="signUp__input"
            type="email"
            placeholder="Department"
          />
          <input className="signUp__input" type="email" placeholder="Batch" />
          <input
            className="signUp__input"
            type="email"
            placeholder="Graduation Year"
          />
          <input
            className="signUp__input"
            type="email"
            placeholder="Mobile No."
          />
          <input
            className="signUp__input"
            type="submit"
            placeholder="Mobile No."
          />
        </form>
      </Container>
    </>
  );
};

export default SignUp;
