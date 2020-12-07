import './MeusDispositivos.scss';
import {AiFillSetting, AiOutlinePoweroff} from 'react-icons/ai';
import {BiChevronLeft, BiChevronDown} from 'react-icons/bi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TiDeviceDesktop, TiKeyOutline, TiPrinter, TiVideo } from "react-icons/ti";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#101010',
      marginLeft: 10,
      marginBottom: 10
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
  });

function MeusDispositivos() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const dispositivos = [
        { acessosQtd: 3, title: "Desktop", description: "ell meaning and kindly.", local: "a benevolent smile", type: 0, users: [{name: "João", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa1.jpg"}, {name: "Ana", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa2.jpg"}, {name: "Vitória", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa3.jpg"}]},
        { acessosQtd: 8, title: "Fechadura de Casa", description: "ell meaning and kindly.", local: "a benevolent smile", type: 1, users: [{name: "Suellen", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa8.jpg"}, {name: "Darlan", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa7.jpg"}, {name: "Conrado", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa6.jpg"}, {name: "Felipe", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa5.jpg"}, {name: "Alberto", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa4.jpg"}, {name: "Vitória", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa3.jpg"}, {name: "Ana", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa2.jpg"}, {name: "João", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa1.jpg"}]},
        { acessosQtd: 1, title: "Impressora", description: "ell meaning and kindly.", local: "a benevolent smile", type: 2, users: [{name: "Darlan", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa8.jpg"}]},
        { acessosQtd: 1, title: "Câmera de Segurança", description: "ell meaning and kindly.", local: "a benevolent smile", type: 3, users: [{name: "Darlan", description: "ell meaning and kindly.", local: "a benevolent smile", image: "./../../assets/pessoa8.jpg"}]}
    ]
    return (
        <>
            <div className="dispositivos">
                <div className="header">
                    <Link to="/">
                        <BiChevronLeft color="#00D6D6" size="30"/>
                    </Link>
                    <AiFillSetting color="#00D6D6" size="25" className="setting-icon"/>
                </div>
                <div className="title-content">
                    <p className="title">MEUS DISPOSITIVOS</p>
                </div>
                <div>
                 {
                  dispositivos.map(item => 
                    <Card className={classes.root}>
                        <CardContent>
                            <div className="content-card-item">
                                <div className="content-card-left">
                                    <Typography gutterBottom className="status-title-card">
                                        {item.acessosQtd + " ACESSOS"}
                                    </Typography>
                                    <Typography variant="h5" component="h2" className="title-card">
                                        {item.title}{bull}
                                    </Typography>
                                    {/* <Typography variant="body2" component="p" className="content-card">
                                        {item.description}
                                    <br />
                                        {item.local}
                                    </Typography> */}
                                </div>
                                <div className="content-card-right">
                                    {item.type == 0 ? <TiDeviceDesktop color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/> : item.type == 1 ? <TiKeyOutline color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/> : item.type == 2 ? <TiPrinter color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/> : item.type == 3 ? <TiVideo color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/> : <TiDeviceDesktop color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/>}
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Link to="/detalhe-dispositivo" >
                                <Button size="small" className="button-title-card">DETALHES</Button>
                            </Link>
                        </CardActions>
                    </Card>
                  )
                }   
                </div>
                <div className="footer">
                    <div className="footer-menu">
                        <BiChevronDown color="#00D6D6" size="30" className="arrow-down"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeusDispositivos;