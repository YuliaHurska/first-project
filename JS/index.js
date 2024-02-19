let mainContainer = document.querySelector(".main__menu");

let storageNavigation = document.createElement("a");
storageNavigation.classList.add("main__menu-storage");
storageNavigation.href = "../storage.html"

let storageIcon = document.createElement("span");
storageIcon .innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  height="100" viewBox="0 -960 960 960" width="100"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>`;
storageIcon.classList.add("main__menu-storage__tittle");
storageNavigation.appendChild(storageIcon);
mainContainer.appendChild(storageNavigation);

let constructorNavigation = document.createElement("a");
constructorNavigation.classList.add("main__menu-constructor");
constructorNavigation.href ="../constructor.html";

let construcrorTittle = document.createElement("span");
construcrorTittle.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960"
width="100"
>
<path
  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
/>
</svg>`;
mainContainer.appendChild(constructorNavigation);
constructorNavigation.appendChild(construcrorTittle);




