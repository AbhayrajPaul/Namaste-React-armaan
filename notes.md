Bundler used by create-react-app is called 	WEBPACK	BABEL

Npm alternative is yarn 

Our react app ispowered by a lot of things (modules)which is why we need 
Something to manage all the different packets and hence we use NPM

Dev-dependency -> all the packages that our project needs develoment env
Dependency -> global environment 

Node-modules  -> database of the npm

Package.json vs package-lock.json
Plock contains the snapshot  of the project…means
It tells the exact version of the packages we are using

It locks the version
--never gitignore this

Package-lock.json -->inside
Version  -> tells the current version of the project
Integrity -> is the server and the git code has the same version\
		Installed (this is how it maintains the	 integrity)

Npmx -> execute using npm

Why we don't push node modules ?
Firstly it is tooooo heavy and secondly the two important files
Package.json and package-lock.json have sufficent information to reinstalll the node modules
Exaclty the same way as they were in our local machine


