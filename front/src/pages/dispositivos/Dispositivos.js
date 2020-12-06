import './Dispositivos.scss';
import {BsJustify, BsArrowRight, BsFillXDiamondFill, BsArrowLeftRight} from 'react-icons/bs';
import {AiFillSetting, AiFillHome, AiOutlineHistory, AiOutlineQrcode} from 'react-icons/ai';
import {FaLandmark} from 'react-icons/fa';
import {MdSpeakerPhone} from 'react-icons/md';
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi';

function Dispositivos() {
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