# 28e Augusti

## Live-kod

[Live coding examples](live-coding/)


## Material (från förra tillfället)
- [Should you use react with typescript?](https://www.youtube.com/watch?v=ydkQlJhodio&pp=ygUQcmVhY3QgdHlwZXNjcmlwdA%3D%3D)
- [Using typescript in react (dokumentation)](https://react.dev/learn/typescript)

### Level up
- [Avancerade tips o tricks med react typescript](https://www.youtube.com/watch?v=j898RGRw0b4)
  
## Övning
Om du inte tidigare har erfarat react så rekommenderas reacts egna tutorial för att komma igång, [tic-tac-toe med react](https://react.dev/learn/tutorial-tic-tac-toe).

För denna vecka finns de tre övningar varav #1 bör ses mer som kompletterande ifall en uppvärmning känns mer lämpligt och #2 mer lämpligt om man hellre följer en step-by-step innan man ger sig in på att planera ett lite större projekt.

### Övning 1
En alternativ övning som inte utvecklas här är att översätta legacy kod till typescritp med react, detta kan antas som en uppvärmande övning om det känns bättre än övningen nedanför. Förslaget är då att översätta memory typescriptkoden till att använda typescript i react.


### Övning 2
Web simplified hang the man [https://www.youtube.com/watch?v=-ONUyenGnWw](https://www.youtube.com/watch?v=-ONUyenGnWw)


### Övning 3
Den övning som vi kommer att jobba med t.o.m. fredagen är att skapa en todo app i react med typescript. All backend går bra att mocka (anta "fejkdata") men det uppmanas att prova på att skriva en backend i typescript med express, se exempelvis [how to typescript with nodejs](https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/).

Appen ska ha följande delar.
1. Inloggningsskärm
2. Huvudsida
3. Inställningssida 

Upplägget är valfritt men följande definitioner rekommenderas
```ts
export type Theme = "DARK" | "LIGHT";
export type UserRole = "USER" | "ADMIN";
export type TodoState = "NEW" | "UNFINISHED" | "EXPIRED" | "FINISHED"

export inteface UserSetting {
  preferredTheme: Theme;
  expireAutomatically: boolean; // set todo to expire if expireAt passed
  sendReminder: boolean; // send close to deadline reminders
  reminderInterval: number; // time in ms to send reminder if sendReminder is true
}

export interface Todo {
  title: string;
  content: string;
  createdAt: Date;
  expireAt: Date | null;
}

export interface User {
  username: string;
  role: UserRole;
  todos: Todo[];
  settings: UserSetting;
}
```

Svårt att veta vart du ska börja? Börja då med följande.

1. I terminalen skriv "npx create-react-app --template typescript"
2. Skapa en mapp i src som heter "pages" och placera där följande *.tsx filer:
   1. LoginPage
   2. HomePage
   3. SettingPage
3. Skapa sedan en mapp som heter components och placera följande *.tsx filer
   1. PageBanner
   2. LoginForm
   3. TodoGrid
   4. TodoItem
   5. SettingList
   6. SettingItem
4. Skapa sedan en folder som heter "types" där du placerar följande *.ts filer
   1. User
   2. Todo
5. Skapa sedan en mapp som heter services och placera följande *.ts filer
   1. CacheService // spara data i localStorage
   2. TodoService // spara todo data
   3. RequestService // för eventuellt kommunikation med API
   4. SettingService // för att hämta och hantera användarinställningar

Ovan är endast ett utkast på struktur och observera då att i ett mer avancerat react projekt hade det även ingått delar som [CustomHooks](https://react.dev/learn/reusing-logic-with-custom-hooks). Detta är inte ett krav pågående kurs och förväntas inte att man bemästrar under denna kurs.

Om det fortfarande upplevs som svårt att komma igång så rekommenderas det att man kikar på materialet från javascript del 3 kursen där vi gick in på olika områden i React, samt att man diskuterar upplägget med en medstuderande för att få ett bredare perspektiv på uppgiften. 

Förväntningen inför nästa vecka är att man **kan** skapa ett react projekt med typescript och använda interfaces/types för att skapa en bättre kodstruktur. Uppgiften är menad att ta tid och kommer eventuellt inte hinnas avslutas innan fredag, huvudsaken är att du har satt dig in i react och typescript.

Och för den som skulle bli klar med en frontend, som tidigare nämnt uppmanas det till att skapa en backend i typescript :)!
