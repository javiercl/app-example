import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();


    const onSubmit = (d) => {
        //console.log(d.usuario);
        setUser({
            name: d.usuario,
            password: d.password
        });
        localStorage.setItem("sesion",JSON.stringify(user));
        navigate("/home");
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <hr />
            <div className="card p-3">
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