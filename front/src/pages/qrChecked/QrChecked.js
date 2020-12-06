import './QrChecked.scss';
import { AiOutlineCheck } from 'react-icons/ai';
import {BiChevronRight} from 'react-icons/bi';

function QrChecked() {
  return (
    <>
      <div className="format">
        <img className="img-info" src="https://media.tenor.com/images/c7ee1b613a7ddf98ed7c564029bd9c32/tenor.gif"></img>
        <p className="info">AUTENTICADO COM</p>
        <p className="info-sub">SUCESSO</p>
        <AiOutlineCheck color="#00D6D6" size="150" />
      </div>
      <div className="footer-checked">
        <div className="footer-checked-content">
          <BiChevronRight color="#00D6D6" size="50" />
        </div>
      </div>
    </>
  );
}

export default QrChecked;
