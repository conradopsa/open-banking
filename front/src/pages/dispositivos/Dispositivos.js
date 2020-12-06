import './Dispositivos.scss';
import {AiFillSetting, AiOutlinePoweroff} from 'react-icons/ai';
import {BiChevronLeft, BiChevronDown} from 'react-icons/bi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#101010',
      margin: 10
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

function Dispositivos() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const dispositivos = [
        { status: true, title: "Item", description: "ell meaning and kindly.", local: "a benevolent smile"},
        { status: false, title: "Item", description: "ell meaning and kindly.", local: "a benevolent smile"},
        { status: true, title: "Item", description: "ell meaning and kindly.", local: "a benevolent smile"},
        { status: false, title: "Item", description: "ell meaning and kindly.", local: "a benevolent smile"}
    ]
    return (
        <>
            <div className="dispositivos">
                <div className="header">
                    <BiChevronLeft color="#00D6D6" size="30"/>
                    <AiFillSetting color="#00D6D6" size="25" className="setting-icon"/>
                </div>
                <div className="title-content">
                    <p className="title">DISPOSITIVOS LIBERADOS</p>
                </div>
                <div>
                 {
                  dispositivos.map(item => 
                    <Card className={classes.root}>
                        <CardContent>
                            <div className="content-card-item">
                                <div className="content-card-left">
                                    <Typography gutterBottom className={item.status ? "status-title-card" : "status-title-card-pendent"}>
                                        {item.status ? "LIBERADO" : "PENDENTE"}
                                    </Typography>
                                    <Typography variant="h5" component="h2" className="title-card">
                                        {item.title}{bull}
                                    </Typography>
                                    <Typography variant="body2" component="p" className="content-card">
                                        {item.description}
                                    <br />
                                        {item.local}
                                    </Typography>
                                </div>
                                <div className="content-card-right">
                                    <AiOutlinePoweroff color={item.status ? "#00D6D6" : "#9D9D9D"} size="50"/>
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

export default Dispositivos;