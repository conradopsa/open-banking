import './Home.scss';
import {BsJustify, BsArrowLeftRight, BsFillXDiamondFill} from 'react-icons/bs';
import {AiFillSetting, AiFillHome, AiOutlineHistory} from 'react-icons/ai';
import {FaLandmark} from 'react-icons/fa';
import {MdSpeakerPhone} from 'react-icons/md';

function Home() {
    return (
        <>
            <div className="home">
                <div className="home-header">
                    <BsJustify color="#00D6D6" size="25" className="display-icon"/>
                    <AiFillSetting color="#00D6D6" size="25" className="setting-icon"/>
                </div>
                <div className="content">
                    <p></p>
                </div>
                <div className="options">
                    <div class="button-option">
                        <BsArrowLeftRight color="black" size="30" className="transaction-icon"/>
                        <p className="transaction">TRANSFERIR</p>
                    </div>
                    <div class="button-option">
                        <BsFillXDiamondFill color="black" size="30" className="transaction-icon"/>
                        <p className="transaction">PIX</p>
                    </div>
                    <div class="button-option">
                        <MdSpeakerPhone color="black" size="30" className="transaction-icon"/>
                        <p className="meus-name">MEUS</p>
                        <p className="dispositivos-name">DISPOSITIVOS</p>
                    </div>
                </div>
                <div className="home-footer">
                    <div className="footer-menu">
                        <AiFillHome color="#FFFFFF" size="25" className="home-icon"/>
                        <AiOutlineHistory color="#00D6D6" size="25" className="setting-icon"/>
                        <FaLandmark color="#00D6D6" size="25" className="setting-icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;