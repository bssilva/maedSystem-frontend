import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/admin">
                Maed Construções LTDA
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    table:{
        marginRight: 400
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

function newPassagem(){
    return(
        window.location.href = '/admin/passagem/cadastrar'
    );
}

export default function PassagemListagem() {
    const classes = useStyles();

    const [passagem, setPassagem] = useState([]);

    useEffect(() => {

        async function loadPassagem() {
            const response = await api.get("/Passagem");

            setPassagem(response.data)
        }
        loadPassagem();
    }, [])

    return (
        <div className={classes.root}>
            <MenuAdmin title={'FUNCIONÁRIOS'} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Paper className={classes.paper}>
                                <Grid>
                                    <Fab color="primary" aria-label="add">
                                        <AddIcon onClick={newPassagem}/>
                                    </Fab>
                                </Grid>
                                <h2>Listagem de Passagens</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={24} sm={24}>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center"><b>Nome</b></TableCell>
                                                        <TableCell align="center" aria-required="false" ><b>CPF</b></TableCell>
                                                        <TableCell align="center"><b>Valor Diário</b></TableCell>
                                                        <TableCell align="center"><b>Valor Fornecido</b></TableCell>
                                                        <TableCell align="center"><b>Data da Entrega</b></TableCell>
                                                        <TableCell align="center"><b>Duração</b></TableCell>
                                                        <TableCell align="center"><b>Observação</b></TableCell>                                                        
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {passagem.map((row) => (
                                                        <TableRow key={row._id}>
                                                            <TableCell component="th" scope="row">
                                                                {row.nome}
                                                            </TableCell>
                                                            <TableCell align="center">{row.cpf}</TableCell>
                                                            <TableCell align="center">{row.valorDiario}</TableCell>
                                                            <TableCell align="center">{row.valorDado}</TableCell>                                                            
                                                            <TableCell align="center">{row.data}</TableCell>
                                                            <TableCell align="center">{row.duracao}</TableCell>
                                                            <TableCell align="center">{row.observacao}</TableCell>                                                            
                                                            <ButtonGroup aria-label="outlined primary button group">
                                                                <Button color="primary">Atualizar</Button>
                                                                <Button color="secondary">Excluir</Button>
                                                            </ButtonGroup>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}