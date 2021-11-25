import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';
import { MessageBar } from './MessageBar';

export const LoginPage = () => {
    const [ message, setMessage] = useState('');
    const { setUser } = useContext( UserContext );
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();


    const onSubmit = (d) => {
        const usr = localStorage.getItem(d.usuario)
        if (!usr) {
            setMessage('El usuario no existe');
        } else {
            const ousr = JSON.parse(usr);
            setUser({
                name: ousr.name,
                usuario: ousr.usuario,
                password: ousr.password
            });
            navigate("/home");
        }
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <hr />
            <div className="card p-3">
                {
                    message ? <MessageBar message={message}/> : <div/>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("usuario")}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
                    </div>
                    <button type="submit" className="btn btn-primary">LogIn</button>
                </form>
            </div>
        </div>
    )
}