
import {AiFillSetting} from 'react-icons/ai';
import {BiChevronLeft, BiChevronDown} from 'react-icons/bi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import pessoa1 from './../../assets/pessoa1.jpg';
import pessoa2 from './../../assets/pessoa2.jpg';
import pessoa3 from './../../assets/pessoa3.jpg';
import pessoa4 from './../../assets/pessoa4.jpg';
import pessoa5 from './../../assets/pessoa5.jpg';
import pessoa6 from './../../assets/pessoa6.png';
import pessoa7 from './../../assets/pessoa7.jpg';
import pessoa8 from './../../assets/pessoa8.png';

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

function DetalheDispositivo() {
    const users = [{name: "Suellen", description: "12:00PM", local: "Rio de Janeiro", image: pessoa8}, {name: "Darlan",  description: "01:00PM", local: "Rio de Janeiro", image: pessoa7}, {name: "Conrado",  description: "12:00PM", local: "Rio de Janeiro", pessoa6, image: "./../../assets/pessoa6.jpg"}, {name: "Felipe",  description: "12:00PM", local: "Rio de Janeiro", image: pessoa5}, {name: "Alberto",  description: "12:00PM", local: "Rio de Janeiro", image: pessoa4}, {name: "Vitória",  description: "12:00PM", local: "Rio de Janeiro", image: pessoa3}, {name: "Ana",  description: "12:00PM", local: "Rio de Janeiro", image: pessoa2}, {name: "João",  description: "12:00PM", local: "Rio de Janeiro" ,image: pessoa1}];
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
            <div className="dispositivos">
                <div className="header">
                    <Link to="/meus-dispositivos">
                        <BiChevronLeft color="#00D6D6" size="30"/>
                    </Link>
                    <AiFillSetting color="#00D6D6" size="25" className="setting-icon"/>
                </div>
                <div className="title-content">
                    <p className="title">ACESSOS</p>
                </div>
                <div>
                 {
                  users.map(item => 
                    <Card className={classes.root}>
                        <CardContent>
                            <div className="content-card-item">
                                <div className="content-card-left">
                                    <Typography variant="h5" component="h2" className="title-card">
                                        {item.name}{bull}
                                    </Typography>
                                    <Typography variant="body2" component="p" className="content-card">
                                        {item.description}
                                    <br />
                                        {item.local}
                                    </Typography>
                                </div>
                                <div className="content-card-right">
                                     <Avatar size="100" round={true} src={item.image} />
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="button-title-card">DETALHES</Button>
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

export default DetalheDispositivo;