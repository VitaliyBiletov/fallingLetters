import './style.css';
import $ from "jquery";
import app from './application';
import {setOfLetters} from "./setOfLetters";
import music from './sounds/deti.mp3';

const audio = new Audio(music);
audio.play();


app();
setOfLetters();