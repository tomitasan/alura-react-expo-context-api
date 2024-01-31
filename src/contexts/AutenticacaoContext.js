import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({children}) {

    const [usuario, setUsuario] = useState(null);

    function login(email, senha){
        if(email == 'teste@email.com' && senha == '123') {
            setUsuario({
                nome: 'Teste',
                email: email,
                endereco: 'Av. Paulista',
                telefone: '(11)1234-5678'
            })
            return 'ok'
        }
        else {
            return 'Email ou senha incorretos'
        }
    }

    return (
        <AutenticacaoContext.Provider value={{ 
            usuario,
            login,
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}