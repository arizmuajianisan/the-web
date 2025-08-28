---
title: "Exposing Your Local Apps to the Internet [SAFELY!] — Cloudflare Tunnel [2025]"
description: "Tutorial how to expose your local apps to the internet safely using Cloudflare Tunnel"
date: 2025-08-28
tags: 
  - "cloudflare"
  - "docker"
authors:
  - "arizmuajianisan"
slug: "exposing-your-local-apps-to-the-internet-safely-cloudflare-tunnel-2025"
draft: true
---

# Story

I want to create a lab server (it’s just a name, lol)in my home and deploy some apps that I want to use outside my home. Instead of exposing my IP to the Internet (and it is VERY💥 Dangerous) if you can’t set good security on it, after doing some research, I found a way I can expose my local apps to the Internet without changing my Firewall or setting anything on my computer, even exposing any port!

> The answer is using Tunneling from Cloudflare, and the good news is FREE!

## Requirements:

1. Docker, trust me you will be happy using Docker. But if you want to use it another way, Cloudflare has documentation about it, and still easy.

2. A domain, you can purchase one from any provider that you love. Mine from [Domainesia](https://my.domainesia.com/ref.php?u=23913)

5. An app or anything that you want to exposed to the internet.

## Let’s go! 🐱‍🏍

First thing first, go to Cloudflare. You need to sign in if you don’t have an account yet, it’s super easy. I think you will get it.

Once you finish, we will get this page, I already have an active site. We need to click the Add a Site button on the right side.