import { useEffect, useState } from "react";
import { Main, Page, Section } from "../common";
import { Form, Input } from "../common/form";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/home");
    }
  }, [navigate]);

  const submitLoginHandler = async (e: FormDataEvent) => {
    e.preventDefault();
    try {
      const loginRes = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await loginRes.json();
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <Main>
        <h1>My movies website</h1>
      </Main>
      <Section>
        <h2>Login</h2>
        <Form id={"login-form"} onSubmit={(e: FormDataEvent) => submitLoginHandler(e)}>
          <Input type='text' id='email' fieldName='Email' action={setEmail} value='eve.holt@reqres.in' />
          <Input type='password' id='password' fieldName='Password' action={setPassword} value='cityslicka' />
        </Form>
      </Section>
    </Page>
  );
};
