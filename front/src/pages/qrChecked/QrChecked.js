import './QrChecked.scss';
import { AiOutlineCheck } from 'react-icons/ai';

function QrChecked() {
  return (
    <div className="format">
      <p>Autenticado com sucesso!</p>
      <AiOutlineCheck color="#00D6D6" size="100" />
      <img src="https://media.tenor.com/images/c7ee1b613a7ddf98ed7c564029bd9c32/tenor.gif"></img>
    </div>
  );
}

export default QrChecked;
