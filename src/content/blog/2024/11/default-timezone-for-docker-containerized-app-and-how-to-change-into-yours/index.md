---
title: "Default Timezone For Docker Containerized App And How To Change Into Yours"
description: "Tutorial how to change default timezone for docker containerized app"
date: 2024-11-05
updatedDate: 2024-11-06
tags: 
  - "docker"
authors:
  - "arizmuajianisan"
slug: "default-timezone-for-docker-containerized-app-and-how-to-change-into-yours"
---

# The Story

This started when I built an image containing a Python app to back up the clock for PLC when turned off. But whenever I run the image, it gives the wrong time. I did a lot of tests on the Python app and gave the correct time. What the \*\*\* going on? 😖

But I got the answer: the Docker image will use the UTC as its default timezone. So this got me in trouble. But I was kind of curious, so I created some tests to see what the real problem was.

## Table of Contents

- [The Story](#the-story)
  - [Table of Contents](#table-of-contents)
  - [Let’s Figure it Out 🚀](#lets-figure-it-out-)
  - [Conclusion](#conclusion)

## Let’s Figure it Out 🚀

I create some testing apps to print the current time with the timezone.

```python
from datetime import datetime
from pytz import timezone

print(f"Current local time: {datetime.now()}")
current_timezone = datetime.now().astimezone().tzinfo

print(f"Current timezone: {current_timezone}")
```

And bundle with the `Dockerfile`.

```dockerfile
FROM python:3.9-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y tzdata \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

COPY . .

RUN pip install --no-cache-dir pytz

# Run your Python app
CMD ["python", "app.py"]
```

Then build the image.

```bash
docker build -t timezone-app .
```

Let’s find the answer, first, we run the container at the default condition (not pass the timezone variable). And correct, the container uses the UTC timezone.

Now try using it to pass the timezone variable when running the container. See, the timezone is matched with my location (it shows WIB — Waktu Indonesia Barat — or UTC+7)

## Conclusion

If you build some app that expects to run at a specific time, you need to set the timezone.  
You can see the available time zone through the `pytz` package.

In my case, I just need to install the `tzdata` inside the image and pass it when running the container or simply just set it inside the `Dockerfile.`

I hope this will help you if you encounter the same issue.
