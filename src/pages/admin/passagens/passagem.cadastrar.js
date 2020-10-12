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

  const [nome_passagem, setNome] = useState('');
  const [cpf_passagem, setCpf] = useState('');
  const [valorDiario_passagem, setDiario] = useState('');
  const [valorDado_passagem, setDado] = useState('');
  const [data_passagem, setData] = useState('');
  const [duracao_passagem, setDuracao] = useState('');
  const [observacao_passagem, setObservacao] = useState('');


  async function handleSubmit() {
    const data = {
      nome: nome_passagem,
      cpf: cpf_passagem,
      valorDiario: valorDiario_passagem,
      valorDado: valorDado_passagem,
      data: data_passagem,
      duracao: duracao_passagem,
      observacao: observacao_passagem
    };

    const response = await api.post('/Passagem', data)

    if (response.status === 200) {
      window.location.href = '/admin/Passagem'
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
                <h2>Inserir nova Passagem</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nome"
                      name="nome"
                      label="Nome completo"
                      fullWidth
                      autoComplete="nome"
                      value={nome_passagem}
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
                      value={cpf_passagem}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="valorD"
                      name="valorD"
                      label="Valor diário"
                      fullWidth
                      autoComplete="valorD"
                      value={valorDiario_passagem}
                      onChange={e => setDiario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="valorDado"
                      name="valorDado"
                      label="Valor Fornecido"
                      fullWidth
                      autoComplete="valorDado"
                      value={valorDado_passagem}
                      onChange={e => setDado(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="data"
                      name="data"
                      label="Data da entrega"
                      fullWidth
                      autoComplete="data"
                      value={data_passagem}
                      onChange={e => setData(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="duração"
                      name="duração"
                      label="Duração"
                      fullWidth
                      autoComplete="duração"
                      value={duracao_passagem}
                      onChange={e => setDuracao(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField

                      id="observação"
                      name="observação"
                      label="Observação"
                      fullWidth
                      autoComplete="observação"
                      value={observacao_passagem}
                      onChange={e => setObservacao(e.target.value)}
                    />
                  </Grid >
                  <Grid item xs={12} sm={6}></Grid>
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