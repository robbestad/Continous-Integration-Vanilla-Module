# VanillaEnterpriseModule

[link](#getstarted)

This repo is trying to take the best practises that the development community has and the standards we in Scandinavia Online are using to create a vanilla module that could be used as the basic for any php module. 

To see the best alot of good practises for php development, We recommand http://phptherightway.com/

#Prerequisites

* phing
* composer
* php

We could say that the only thing you need to install is composer and php, 
and then we could download all the dependencies via composer. But to keep the repository to a minimum, 
we also expect that the system has installed phing. 

#Kodestandard
###Det beste ved standarder, er at du har så mange å velge blant...

Mellomrom, indentering og klammeposisjon betyr ingenting for datamaskinene , men når det får programmerere til å miste arbeidsflyt, kan det bety veldig mye. 

Det å ha en kodestandard innebærer at alle som jobber med vår kode vet hvordan koden skal struktureres. Det gjør den leselig for alle, og det øker arbeidsflyten.

Kodesnifferen vi har valgt til dette formålet er PHP CodeSniffer. Det er tilgjengelig via Pear her: http://pear.php.net/package/PHP_CodeSniffer/, men er også tilgjengelig som en Composer-modul, og kan derfor lett tas ned i et prosjekt ved å legge inn følgende i composer.json:

    "soldotno/sol_codestandards","dev-master",
    "squizlabs/php_codesniffer","1.*",

#####Codesniffer enkel å konfigurere og det er mulig å bruke den mot spesifikke kodestandarder.  

######Zend######
Vi har valgt en standard som ligger nær opp til Zend-standarden. Det er en god ide å ta utgangspunkt i en eksisterende standard, for det gjør det enklere når man får nye øyne inn i kodebasen, samtidig som det gir en viss trygghet at valgene som er gjort er forankret i den vide verden.

######Javascript######
For validering av Javascript har vi tatt i bruk JSHint (http://www.jshint.com/). Det kan installeres via node (_npm install -g jshint_) og kjøres ved å skrive 'jshint js/' (som i dette eksempelet validerer alle filer i javascript-katalogen).

######CSS######
For CSS-validering har vi tatt i bruk CSS Lint. Det installeres også via node (npm install -g csslint), og brukes på samme måte som JSHint.

######PHP unit######
Kan inkluderes i composer.json, eller installeres globalt: 

    wget https://phar.phpunit.de/phpunit.phar
    chmod +x phpunit.phar
    sudo mv phpunit.phar /usr/local/bin/phpunit

######Continous integration######
For å kjøre ulike tester med disse verktøyene har vi landet på Phing. 

Phing kan dras ned via Composer ("phing/phing","dev-master"). 

Det konfigureres med en build.xml-fil, som gjør det enkelt å konfiguere opp testscenarioer og hvordan feil skal behandles. 

#<a name="getstarted"></a>Get Started
Rename the folder called _./mal_ to your module name

Delete the .git folder and re-initalize with your new git repo

Then enter your module folder and execute

    composer.phar install
    
Build the system with the following command

    phing build
    

