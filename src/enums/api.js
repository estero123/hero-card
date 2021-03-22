// const API = 'https://herocard-backend.herokuapp.com';
const API = 'http://localhost:8080';

const genders = `${API}/gender`;
const playerTypes = `${API}/player-type`;
const playerJobs = `${API}/job`;
const playerRaces = `${API}/race`;
const zodiacSigns = `${API}/zodiac`;

const equipment = `${API}/equipment`;
const weaponTypes = `${equipment}/weapon-type`;
const weapons = `${equipment}/weapon`;
const shields = `${equipment}/shield`;
const headTypes = `${equipment}/head-type`;
const heads = `${equipment}/head`;
const bodyTypes = `${equipment}/body-type`;
const bodies = `${equipment}/body`;
const accessoryTypes = `${equipment}/accessory-type`;
const accessories = `${equipment}/accessory`;

export { API, genders, playerTypes, playerJobs, playerRaces, zodiacSigns, weaponTypes, weapons, shields, headTypes, heads, bodyTypes, bodies, accessoryTypes, accessories }
