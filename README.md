# Atlantis

A multi user blogging platform. I'm just trying to make a thing to do a thing, and if people want to come along then lets go. Its designed/being designed to be a little network of blogs.

# Requirements

* PHP 7.4+
* PHP-PDO
* MySQL 5.6+ or MariaDB 10.4+
* Composer for PHP
* A ReCaptcha API key (https://www.google.com/recaptcha/intro/)

Note: the PHP requirement of 7.4 will quickly be pushed up to 8 after it, you know, comes out.

# Suggestions

* PHP-OpenSSL
* PHP-Memcached

# Is It Ready To Use?

No. I'm still greenfielding this.

# Install and Configuration

## Install

1) `$ git clone git@github.com:bobmagicii/atlantis`

## Web Server

I still use Apache. It will run fine on other things but you'll have to use your own experience to configure them. If you want to add example configs to the servers directory then please do.

1) Copy `conf/servers/apache24.conf.dist` to `conf/servers/apache24.conf` and edit the values according to how the file describes you should edit them. Note, if you are installing for the first time you should only use the AtlantisHTTP` macro until you follow the SSL instructions below.

2) Tell Apache your site exists. `sudo ln -s /path/to/atlantis/conf/servers/apache24.conf /etc/apache2/sites-enabled/my-atlantis-site.conf` - I use Ubuntu Server you may need to use your experience to tweak this to fit however your distro may be set up. You'll need to rehash Apache after adding the config.

3) Copy `conf/priate.conf.dist` to `conf/private.conf.php` and edit its values.

4) `$ composer install`

5) Look at `www/.htaccess` - in particular two sections marked `Force Remove WWW` and `Force Add WWW` - you will/may need to toggle these sections on or off depending on your needs. My demo project forces the WWW off by default to make URLs that much shorter. Only turn one of these two sections on at a time or you'll have a loop. You may also turn them both off if you want.

## Database

1) Copy `conf/database.conf.dist` to `conf/database.conf.php` and edit its values.

2) `$ bin/phinx migrate`

## SSL

1) If you have not set up the SSL you should have configured the webserver to only use HTTP so far. Additionally, you need to go into `www/.htaccess` and comment out the lines under `# Force HTTPS`

2) Copy `conf/tools/acmephp.yml.dist` to `conf/tools/acmephp.yml` and edit its values
to be relevant to your website.

3) `$ bin/acmephp.phar run conf/tools/acmephp.yml`

4) Edit `conf/servers/apache24.conf` and replace `AtlantisHTTP` with `AtlantisHTTPS`, rehash the server, and restore the lines you commented out within the `.htaccess` file.

## Shout Outs

I am the most NIH coder you know but there are still things I depend on. Here are a few of my favourite projects.

### PHP

* [Phinx](https://github.com/cakephp/phinx)
* [Ramsey/UUID](https://github.com/ramsey/uuid)
* [ReactPHP](https://github.com/reactphp)

### JS

* [Jodit3](https://xdsoft.net/jodit/)


