import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import api from '../../../services/api'
import MenuAdmin from '../../../components/menu-admin';


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
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function FuncionarioCadastrar() {
  const classes = useStyles();

  const [nome_cps, setNome] = useState('');
  const [cpf_cps, setCpf] = useState('');
  const [contato_cps, setContato] = useState('');
  const [admissao_cps, setAdmissao] = useState('');
  const [cargo_cps, setCargo] = useState('');
  const [local_cps, setLocal] = useState('');
  const [salario_cps, setSalario] = useState('');
  const [agencia_cps, setAgencia] = useState('');
  const [contaSalario_cps, setcontaSalario] = useState('');
  const [observacao_cps, setObservacao] = useState('');


  async function handleSubmit() {
    const data = {
      nome: nome_cps,
      cpf: cpf_cps,
      contato: contato_cps,
      admissao: admissao_cps,
      cargo: cargo_cps,
      local: local_cps,
      salario: salario_cps,
      agencia: agencia_cps,
      contaSalario: contaSalario_cps,
      observacao: observacao_cps
    };

    const response = await api.post('/cadastroCPS', data)

    if (response.status === 200) {
      window.location.href = '/admin/CPS'
    }
    else {
      alert('Dados incorretos.')
    }
  }

  return (
    <div className={classes.root}>

      <MenuAdmin title={'FUNCIONÁRIOS'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Cadastro de Funcionário CPS</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nome"
                      name="nome"
                      label="Nome completo"
                      fullWidth
                      autoComplete="nome"
                      value={nome_cps}
                      onChange={e => setNome(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="cpf"
                      name="cpf"
                      label="CPF"
                      fullWidth
                      autoComplete="cpf"
                      value={cpf_cps}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="contato"
                      name="contato"
                      label="Contato"
                      fullWidth
                      autoComplete="contato"
                      value={contato_cps}
                      onChange={e => setContato(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="admissao"
                      name="admissao"
                      label="Data de Admissão"
                      fullWidth
                      autoComplete="admissão"
                      value={admissao_cps}
                      onChange={e => setAdmissao(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="cargo"
                      name="cargo"
                      label="Cargo"
                      fullWidth
                      autoComplete="cargo"
                      value={cargo_cps}
                      onChange={e => setCargo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="local"
                      name="local"
                      label="Local"
                      fullWidth
                      autoComplete="local"
                      value={local_cps}
                      onChange={e => setLocal(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="salario"
                      name="salario"
                      label="Salário"
                      fullWidth
                      autoComplete="salario"
                      value={salario_cps}
                      onChange={e => setSalario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="agencia"
                      name="agencia"
                      label="Agencia Bancária"
                      fullWidth
                      autoComplete="agencia"
                      value={agencia_cps}
                      onChange={e => setAgencia(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="contaSalario"
                      name="contaSalario"
                      label="Conta Bancária"
                      fullWidth
                      autoComplete="conta"
                      value={contaSalario_cps}
                      onChange={e => setcontaSalario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="observacao"
                      name="observacao"
                      label="Observação"
                      fullWidth
                      autoComplete="observacao"
                      value={observacao_cps}
                      onChange={e => setObservacao(e.target.value)}
                    />
                  </Grid>
                  <Button onClick={handleSubmit} variant="contained" color="primary">
                    Salvar
                </Button>
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