import Cryptr from 'cryptr'
import privateVariables from '../privateVariables';

const cryptr = new Cryptr(privateVariables.cryptrKey);

export default cryptr;