import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../components/Input";

import Button from "../../components/Button";
import { Column, Container, LoginContainer, Spacing, Title } from "./styles";
import { IFormLogin, defaultValues } from "./types";

const schema = yup
  .object({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "No mínimo 6 caracteres, incluindo uma letra e um número")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const handleLogin = () => {
    console.log("Função handleLogin chamada!");
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} isValid={isValid} onClick={handleLogin} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
