import React from "react";
import Form from "./Form";
import FormButton from "./form_button/FormButton";
import FormField from "./form_field/FormField";


const submissionDisabled = true;
const formName = "loginForm";

function LoginForm() {
    return (
        <Form className="LoginForm" name={formName}>
            <h2>Acesse sua conta</h2>
            <FormField
                label="E-mail"
                name="email"
                placeholder="Digite seu endereço de e-mail aqui."
                required={true}
            />
            <FormField
                label="Senha"
                name="password"
                placeholder="Digite sua senha aqui."
                required={true}
            />
            <FormButton
                ariaLabel="Cancelar login e retornar à página inicial."
                disabled={false}
                form={formName}
                text="Cancelar"
                type="button"
            />
            <FormButton
                ariaLabel="Realizar login com as informações preenchidas."
                disabled={submissionDisabled}
                form={formName}
                text="Entrar"
                type="submit"
            />
        </Form>
    );
}

export default LoginForm;