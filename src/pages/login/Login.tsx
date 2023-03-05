import { useEffect, useState } from "react";
import { Main, Page, Section } from "../common";
import { Form, Input } from "../common/form";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRe = /[\w-]+@([\w-]+\.)+[\w-]+/;

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/home");
    }
  }, [navigate]);

  const submitLoginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!emailRe.test(email!)) throw Error("Invalid email format");
      const loginRes = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify({ email, password })
      });
      if (!loginRes.ok) throw Error("Incorrect email or password, please try again.");
      const data = await loginRes.json();
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Page>
      <Main>
        <h1>My movies website</h1>
      </Main>
      <Section>
        <h2>Login</h2>
        <Form id={"login-form"} onSubmit={(e: React.FormEvent) => submitLoginHandler(e)}>
          <Input type='text' id='email' fieldName='Email' action={setEmail} required />
          <Input type='password' id='password' fieldName='Password' action={setPassword} min='6' required />
        </Form>
      </Section>
    </Page>
  );
};

export default Login;
