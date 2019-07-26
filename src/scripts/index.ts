import { myfunc } from './myfunc';

const todayWeather = myfunc(31);

document.querySelector("#weather").textContent = todayWeather;