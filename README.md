# One image of Wednesday 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/jacky01234567890/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/jacky01234567890/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A front page that sums up the world news of **Wednesday 18 November 2026** in a
single 1024×1024 image. An AI judge compares the images two at a time and picks
the one that best sums up its day.

## What's on the page

- **Lead — APEC, Shenzhen:** Trump lands in China for the first-ever talks with
  Xi Jinping and Vladimir Putin. The three-way meeting is on Thursday; Putin and
  Xi met on Wednesday.
- **Iran war:** Iran says its drones hit a US air base in Kuwait, a day after
  the US struck Qeshm Island in the Strait of Hormuz.
- **Gaza:** Israel opens a new "concentrated operation" in three areas of
  central Gaza.
- **Cyclone Akvan:** a severe cyclonic storm bears down on Odisha; families in
  Ganjam district were moved to shelters.
- **Tech outage:** outages that grounded US flights reach the NSA; Washington
  denies any systemic attack.
- **Also today:** the Quad meets in Manila, the India–US trade deal is nearly
  done, the US loses its measles-free status, and Grand Theft Auto VI launches
  at midnight.

Every story happened, or was first reported, on 18 November 2026, as reported
by AP, Reuters, the Wall Street Journal, Anadolu and Outlook India that day.

## How the image is made

The image is drawn, not photographed or AI-generated, so every word is exactly
what the sources reported and nothing is garbled: `tools/make_image.py` lays
out the front page with Pillow and writes `entry.png`. `main.ts` (Node 22,
standard library only) copies `entry.png` to `/output/entry.png`, so two runs
write the same bytes with no network.

```sh
python3 tools/make_image.py   # rebuild entry.png
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Competition: [news-image-20261118](https://make.fun/bounty/news-image-20261118)
  on [make.fun](https://make.fun)
- License: MIT
