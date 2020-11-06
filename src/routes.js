import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import FuncionarioCLT from './pages/admin/funcionarioCLT';
import CadastrarFuncionarioCLT from './pages/admin/funcionarioCLT/funcionario.cadastrar';
import EditarFuncionarioCLT from './pages/admin/funcionarioCLT/funcionario.editar';

import FuncionarioCPS from './pages/admin/funcionarioCPS';
import CadastrarFuncionarioCPS from './pages/admin/funcionarioCPS/funcionario.cadastrar';
import EditarFuncionarioCPS from './pages/admin/funcionarioCPS/funcionario.editar';

import FuncionarioMEI from './pages/admin/funcionarioMEI';
import CadastrarFuncionarioMEI from './pages/admin/funcionarioMEI/funcionario.cadastrar';
import EditarFuncionarioMEI from './pages/admin/funcionarioMEI/funcionario.editar';

import Passagens from './pages/admin/passagens';
import CadastrarPassagens from './pages/admin/passagens/passagem.cadastrar';
import EditarPassagens from './pages/admin/passagens/passagem.editar';

import Usuario from './pages/admin/users';
import CadastrarUsuario from './pages/admin/users/usuario.cadastrar';
import EditarUsuario from './pages/admin/users/usuario.editar';

import Desligados from './pages/admin/desligados';

//IMPORTS CLIENT
import Home from './pages/client/home';

import StoreProvider from '../src/components/store/provider';
import RoutesPrivate from '../src/components/Routes/Private/private'

export default function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    {/*Rota Client*/}
                    <Route path="/" exact component={Home} />

                    {/*Rota Admin*/}
                    <RoutesPrivate path="/admin" exact component={Dashboard} />

                    <RoutesPrivate path="/admin/CLT" exact component={FuncionarioCLT} />
                    <RoutesPrivate path="/admin/CLT/cadastrar" exact component={CadastrarFuncionarioCLT} />
                    <RoutesPrivate path="/admin/CLT/editar/:id" exact component={EditarFuncionarioCLT} />

                    <RoutesPrivate path="/admin/CPS" exact component={FuncionarioCPS} />
                    <RoutesPrivate path="/admin/CPS/cadastrar" exact component={CadastrarFuncionarioCPS} />
                    <RoutesPrivate path="/admin/CPS/editar/:id" exact component={EditarFuncionarioCPS} />

                    <RoutesPrivate path="/admin/MEI" exact component={FuncionarioMEI} />
                    <RoutesPrivate path="/admin/MEI/cadastrar" exact component={CadastrarFuncionarioMEI} />
                    <RoutesPrivate path="/admin/MEI/editar/:id" exact component={EditarFuncionarioMEI} />

                    <RoutesPrivate path="/admin/passagem" exact component={Passagens} />
                    <RoutesPrivate path="/admin/passagem/cadastrar" exact component={CadastrarPassagens} />
                    <RoutesPrivate path="/admin/passagem/editar/:id" exact component={EditarPassagens} />

                    <RoutesPrivate path="/admin/usuarios" exact component={Usuario} />
                    <RoutesPrivate path="/admin/usuarios/cadastrar" exact component={CadastrarUsuario} />
                    <RoutesPrivate path="/admin/usuarios/editar/:id" exact component={EditarUsuario} />

                    <RoutesPrivate path="/admin/desligados" exact component={Desligados} />
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}