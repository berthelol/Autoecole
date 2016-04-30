Auto école fondée par Greg

Actuellement le serveur tourne sur ma raspberry :
connection en ssh : pi@88.168.233.209
mdp: 4249

Pour l'instant l'url du site est : http://loicberthelot.freeboxos.fr/ (temporaire)

sur la raspberry le code du site se situe sur -> cd /var/www/html/

Si jamais on veut changer la route du serveur (endroit ou vient taper la requete HTTP) Il faut: 

changer
/etc/apache2/sites-available/000-default.conf

commande:

sudo nano /etc/apache2/sites-available/000-default.conf
and change the following line to what you want:

DocumentRoot /var/www/html
Warning!!!
Also do a
sudo nano /etc/apache2/apache2.conf
and find this

<Directory /var/www/html/>
Options Indexes FollowSymLinks
AllowOverride None
Require all granted
</Directory>
and change /var/www/html to your preferred directory

and save it.

After you saved your changes, just restart the apache2 webserver and you'll be done :)

sudo service apache2 restart



Framework utilisé : Symfony2