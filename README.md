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

<br />
7. Lavet af
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

Vi har brugt GitHub til at samarbejde om dette projekt. Her er nogle af de væsentlige punkter om vores GitHub-samarbejde:



## Repository Navn: stenno-museet
Vi har oprettet et centralt GitHub-repository med navnet "stenno-museet", hvor vi har hostet vores projekt.
<img width="278" alt="Skærmbillede 2024-04-22 kl  21 34 12" src="https://github.com/omar-eaa/stenno-museet/assets/143701116/db4f889c-3080-4889-ae34-bc97f2fbbb08">


##  GitHub Desktop

Vi har brugt GitHub Desktop til at administrere vores workflow. GitHub Desktop har gjort det nemt for os at udføre handlinger som push, pull og commit uden at skulle side med visual studio code live share.
![image](https://github.com/omar-eaa/stenno-museet/assets/143701116/0c76e9d9-d79a-40be-8f8e-6cd92b7a1dbd)

## Branching Strategi
Vi har valgt at holde vores Git-workflow enkelt ved kun at committe direkte til hovedgrenen (main). Dette betyder, at al vores kode findes direkte på hovedgrenen, og der er ikke oprettet separate grenforlængelser til funktioner eller opgaver.


## Main Branch
* **Main**: Hovedgrenen af vores projekt, hvor al koden er placeret. Vi har kontinuerligt commitet vores ændringer direkte til denne gren.


## Konflikthåndtering
I tilfælde af konflikter har vi løst dem ved at samarbejde om at løse konflikterne, ofte ved at kommunikere direkte eller ved at bruge GitHub's indbyggede konflikthåndteringsværktøjer.




Contributions til vores  main branch 
<img width="1020" alt="Skærmbillede 2024-04-22 kl  21 40 54" src="https://github.com/omar-eaa/stenno-museet/assets/143701116/47b61680-dfab-45d5-93b2-0ed980b30fe3">

 


