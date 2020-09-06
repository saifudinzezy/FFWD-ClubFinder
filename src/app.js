//supaya didis tidak error async awat
import "regenerator-runtime";
//style css
import "./styles/style.css";
//import app-bar
import "./script/component/app-bar.js";
//import data yang dibutuhkan disetiap file
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);