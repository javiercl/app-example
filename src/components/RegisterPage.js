import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';
import { MessageBar } from './MessageBar';

export const RegisterPage = () => {
    const { setUser } = useContext( UserContext );
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = (d) => {
        const usr = localStorage.getItem(d.name) || false
        
        if (!usr) {
            setUser({
                name: d.name,
                usuario: d.usuario,
                password: d.password
            });
            localStorage.setItem("sesion",JSON.stringify({
                name: d.name,
                usuario: d.usuario,
                password: d.password
            }));
            localStorage.setItem(d.name,JSON.stringify({
                name: d.name,
                usuario: d.usuario,
                password: d.password
            }));
            navigate("/home");
        } else {
            setMessage('El usuario ya existe');
        }
    }

    return (
        <div>
            <h1>Register Page</h1>
            <hr/>
            <div className="card p-3">
                {
                    message ? <MessageBar message={message}/> : <div/>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label  className="form-label">Username</label>
                        <input type="text" className="form-control" id="nameUser" aria-describedby="Name user" {...register("usuario")}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Login user</label>
                        <input type="text" className="form-control" id="clave" aria-describedby="User" {...register("name")}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    )
}
