---
title: "Docker: Change Maximum Upload Size on Wordpress"
description: "The easiest way to change the limit upload size on WordPress that runs on Docker"
date: 2024-11-07
tags: 
  - "docker"
  - "wordpress"
authors:
  - "arizmuajianisan"
slug: "docker-change-maximum-upload-size-on-wordpress"
---

# Story Behind

At my other site, I need to upload the 3D asset that will be used to explain our development. But I had a problem when I uploaded it into WordPress! It said my file exceeded the limit for upload size.

I found the easiest way (my thought) to change the maximum upload size.

## Table of Contents

- [Story Behind](#story-behind)
  - [Table of Contents](#table-of-contents)
  - [If you persist the WordPress volume](#if-you-persist-the-wordpress-volume)
  - [If you don't persist the WordPress volume](#if-you-dont-persist-the-wordpress-volume)

## If you persist the WordPress volume

You only need to change the .htaccess file to add some lines of code.

Run this syntax:

```
sed -i '/^# END WordPress.*/i php_value upload_max_filesize 256M\nphp_value post_max_size 256M' .htaccess 
```

This will add that change to the very end of the .htaccess file, but beware of changing the number. Do not use the maximum number; just make sure the number is enough for your needs.

After you finish the upload, I prefer to revert the change to .htaccess for the sake of security.

To revert the change:

```
sed -i '/php_value/d' .htaccess
```

This will remove all the changes that we did before.

## If you don't persist the WordPress volume

First, you need to enter the WordPress container.

```
docker exec -it your-wordpress-name-container bash
```

After this, the rest step is the same.

You need to change the .htaccess, as you can see above.
