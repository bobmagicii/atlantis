# Atlantis

Yet another thing using this name, being yet another blogging platform. Main
difference here is that it is not WordPress and requires bleeding edge PHP.

# Requirements

* PHP 7.1 - Will not work on older.
* PHP-PDO
* MySQL
* Composer

# Suggestions

* PHP-OpenSSL
* PHP-Memcached

# Setting Up Dev Environment

## Get Project.

```bash
> git clone git@github.com:bobmagicii/atlantis
```

## Install dependencies.

```bash
> composer install
```

## Start Servers.

If you are on windows with PHP and MySQL properly installed you can launch both
the dev HTTP server and MySQL using `server-start.bat` and then shut it down
using `server-stop.bat`.

Else you will make sure MySQL is running yourself and launch the dev HTTP server
manually.

```bash
> php -S localhost:80 -t www
```

## Configure Database

Copy `conf\database.conf.dist` to `conf\database.conf.php` and fill it in.

## Setup Database

Windows.
```bash
> vendor\bin\phinx migrate
```

Unixen.
```bash
$ php vendor/bin/phinx migrate
```
## Ready

You should now be able to visit [localhost](http://localhost) and get to work.

