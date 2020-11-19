# React-Native for Adopt-A-Cat

`git clone https://gitlab.stud.idi.ntnu.no/juliemey/kittycat`  
</br>
`cd kittycat`  
</br>
`yarn install`  
</br>
`expo start`  
</br>

## React-Native
Løsningen er en app-versjon av prosjektoppgave 3. Jeg har brukt <Search/> fra et eksternt bibliotek for at løsningen skal se bedre ut, og man kan også filtrere 
og sortere med både navn, kjønn og antall likes. Man kan også like en katt ved å trykke på like-ikonet.

## React-redux
En stor del av forrige prosjekt inneholder react-redux logikk, med slices og asyncthunks. Denne logikken fungerer likt i react native også.
En forskjell er at jeg måtte provide appen med storen(store.tsx) i app.tsx filen, istedet for index-filen. 


## Navigation
I det forrige prosjektet brukte vi routing fra "react-router-dom" biblioteket for å navigere seg frem og tilbake på siden. Det finnes flere løsninger for å kunne 
navigere seg frem og tilbake i react-native, men jeg valgte stack fra navigation-biblioteket. 
Når man trykker på et kattebildet på CatsList, blir item._id sendt som et parameter til SingleCatPage via .navigation. Denne tar inn et router-objekt for å
hente ut parameteret. Videre bruker jeg useSelector fra redux for å matche parameteret som blir tatt inn, til katten med samme katte-ID fra
staten til store.tsx. Her fikk jeg endel feilmeldinger og måtte lese meg endel opp. Feilmeldingen var av TypeError, og løsningen ble å implementere en rekke 
types for typescript til å forstå. 


## Testing
Appen har blitt e2e testet på to forskjellige mobil-størrelser slik at den skal fungere bra på forskjellige størrelser.

