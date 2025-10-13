import { useState } from "react";


const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handlerLogin = async (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('login', { usuario, contrasena });
    }

    return (
        <div className="login-form">
            <form onSubmit={handlerLogin}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;