import React from "react";
import Form from "./Form";
import FormButton from "./form_button/FormButton";
import FormField from "./form_field/FormField";


function LoginForm() {
    return (
        <Form className="LoginForm" name="Formulário de Login">
            <h2>Acesse sua conta</h2>
            <FormField
                label="E-mail"
                name="Campo de E-mail"
                placeholder="Digite seu endereço de e-mail aqui."
                required={true}
            />
            <FormField
                label="Senha"
                name="Campo de Senha"
                placeholder="Digite sua senha aqui."
                required={true}
            />
            <FormButton></FormButton>
            <FormButton></FormButton>
        </Form>
    );
}

export default LoginForm;