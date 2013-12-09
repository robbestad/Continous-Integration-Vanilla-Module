# Vanilla Enterprise Module

* [Get Started](#getstarted)
* [Code Sniffer](#codesniffer)
* [Zend Framework 2](#zf)
* [Javascript](#javascript)
* [CSS](#css)
* [PHP Unit](#phpunit)
* [QUnit](#quint)
* [Composer](#composer)
* [Continous integration](#continousintegration)

### Best practices
This repo is trying to take the best practises that the development community has and the standards we in Scandinavia Online are using to create a vanilla module that could be used as the basic for any php module. 

To see the best alot of good practises for php development, We recommand http://phptherightway.com/

#Prerequisites

* phing
* composer
* php

We could say that the only thing you need to install is composer and php, 
and then we could download all the dependencies via composer. But to keep the repository to a minimum, 
we also expect that the system has installed phing. To run all the tests in the provided _build.xml_ you also need *sass*, *csslint* and *jshint*.

#Choosing a standard
###The nice thing about standards is that there are so many of them

Spaces, indentations and bracket positions is meaningless in and of itself, but when it causes programmers to loose workflow, it can mean a great deal. 

Following a code standard means that everyone who works with our code know how to it should be structured. This makes it easier for everyone to read, and this increases the work flow. 

###<a name="codesniffer"></a>Code Sniffer
Using a code sniffer is the first step in our automatic code review control. We're using PHP Codesniffer.

You can install it here: 

    http://pear.php.net/package/PHP_CodeSniffer/

Or you can include it in your project by adding the following to your composer.json:

    "soldotno/sol_codestandards","dev-master",
    "squizlabs/php_codesniffer","1.*",

#####Codesniffer is easy to configure and easy to set up against a specific code standard  

######<a name="composer"></a>Composer
Run this in your terminal to get the latest Composer version:

    curl -sS https://getcomposer.org/installer | php


######<a name="zf"></a>Zend Framework 2
Our main framework is Zend Framework 2. It's a solid and well maintained framework with a proven track record.  

#######<a name="javascript"></a>Javascript
For Javascript validation, we're using JSHint (http://www.jshint.com/). You can install it system wide via node (_npm install -g jshint_), which creates an executable that can be run by executing 'jshint js/' (which will validate every file in the js/ folder).

######<a name="css"></a>CSS
For CSS validation we're using CSSLint. You install is system wide via node (_npm install -g csslint_) which creates an executable that can be run by executing 'csslint css/' (which will validate every file in the css/ folder).


######<a name="quint"></a>QUnit
Installed with Node: 

    npm install -g qunitjs

or downloaded from http://qunitjs.com/.

More information: <a href="http://api.qunitjs.com/">API Documentation</a>, <a href="http://qunitjs.com/cookbook">Cookbook</a>

######<a name="phpunit"></a>PHP unit
Can be installed system wide like this (OSX)

    wget https://phar.phpunit.de/phpunit.phar
    chmod +x phpunit.phar
    sudo mv phpunit.phar /usr/local/bin/phpunit

Or be included in composer.json and executed from the vendor folder

######<a name="continousintegration"></a>Continous integration
To continously integrate everything we've talked about above, we're using Phing. 

Phing can be included via Composer
    
    "phing/phing","dev-master"
    
or be installed system wide.

You configure phing with a *build.xml* file. A sample _build.xml_ is included in this repo.

#<a name="getstarted"></a>Get Started
Rename the folder called _./module_ with your desired module name

Delete the .git folder and re-initalize with your new git repo

Then enter your module folder and execute

    composer.phar install
    
Build the system with the following command

    phing build
    

