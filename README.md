#Projekt Steno Museet - Interaktiv storytelling

2. Projekt Beskrivelse
Denne webløsning er en interaktiv og immersive oplevelse. Man kan bevæge flere af elemnterne på siden, man kan indblande sig selv i quizzes og brugeren kan interagere med løsningen. Til dette projekt er der blevet brugt Spline til alle interaktive 3D elementer på siden & JavaScript til vores quiz og hygiejne simulatoren
- Grunden til at vi har brugt Spline til dette projekt er fordi man kan få nogle helt vildt flotte og interaktive elementer som passede rigtig godt med vores emne. 
- JavaScript har været en udfordring for os, og quizzen tog noget tid at lave, men det der har taget mest tid og været den største udfordring har været GitHub. Vi har haft voldsomt svært ved at få hjemmesiden til at se ens ud på alles skærme grundet GitHub Collaborator. Det har ikke været sjovt.


Man starter på forsiden, hvorfra man kan vælge imellem tre mulige oplevelser; Epidemier, Vacciner og virus og Hygiejne simulator. Vælger man Epidemier, fremvises der en en tidslinje, som indeholder fire velkendte epidemier.
Man kan herfra gennemgå og høre historier, som giver en forståelse for alvoren igennem tidsperioderne. Til slut
ved hver epidemi vil man få muligheden for at tage en quiz, som endvidere belære brugeren.
En af de andre oplevelser er Vacciner og virus, hvor man bliver præsenteret for fire vacciner, der fortæller
noget om, hvad hver især behandler. Når man har læst om det hele igennem, bliver man mødt med en ny interaktiv experience, hvor man får lov til at ødelægge et virus. Efter at man har forsøgt at ødelægge virusset forklares der, at det ikke er muligt, da der altid vil opstå nye virusser.
Sidste oplevelse er en hygiejne simulator, hvor brugeren bestemmer, hvilken retning historien skal tage. Der bliver givet feedback undervejs for de valg, der bliver taget i forhold til, hvorvidt det er hygiejnisk forkert eller rigtigt.


For at opnå det endelige produkt, har vi benyttet os af forskellige elementer i HTML, CSS og Javascript, der arbejder sammen med Json data. Specifikt i quizzen bruger vi meget Json, som arbejder sammen med Javascript, hvor vi bruger function "fetch" til at hente alt dataen ned. Det kan f.eks. ses i følgende del kode:
```js
fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const temp = {
        total: data.length,
        q: data,
        counter: 0,
      };
      createQuestion(temp);
    });
```
Vi har også benyttet os en del af DOM-Manipulation, således vi kunne give fat i variabler fra HTML-koden og benytte os af dem i Javascript.
```js
const btn = document.querySelector("#btn");

const main = document.querySelector(".container");
```
For at skabe HTML-variabler i vores Javascript kode har vi lavet en specifik funktion, der arbejder tæt sammen med HTML. Det har betydet, at vi kunne lave variabler, vi ikke havde kodet i HTML:
```js
function pageElem(parent, t, html, c) {
  const element = document.createElement(t);
  element.innerHTML = html;
  element.classList.add(c);
  return parent.appendChild(element);
}
```

5. Elementer 
https://spline.design/ - Meget er lavet ud fra templates vi har gjort til vores eget (da det er første gang vi prøver spline),YouTube tutorials og remixes
JavaScript

6. Lavet af
Mads - https://github.com/eaa23mgja
<br />
Omar - https://github.com/omar-eaa
<br />
Casper - https://github.com/Proteinbro
<br />
Hani - https://github.com/HaniBassam




<br />
<br />
<br />


# Github samarbejdet 



Vi har brugt github til sammenarbejdet 


