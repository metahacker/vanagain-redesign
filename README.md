# VanAgain redesign — mockups

Clickable design mockups for [vanagain.com](https://vanagain.com): a cleaner, photo-first store you can shop by van or by system, with no dropdown menus.

**View it live:** https://metahacker.github.io/vanagain-redesign/

| Page | What it shows |
|---|---|
| [Home](https://metahacker.github.io/vanagain-redesign/home.html) | Hero, "which van is yours", shop by system, fitment help |
| [Shop](https://metahacker.github.io/vanagain-redesign/shop.html?van=21) | Shop landing filtered to one van |
| [Van picker](https://metahacker.github.io/vanagain-redesign/garage.html) | "My van" as a full page |
| [Navigation](https://metahacker.github.io/vanagain-redesign/nav.html) | The navigation design and how the old menu maps to the new one |

## The idea

A parts shopper answers two questions: **which van** and **which part of it**. The navigation is those two answers, always on screen:

- **My van:** set once and remembered. Uses the store's 7 existing fitment groups (Bus 68–79, Vanagon air-cooled, diesel, 1.9L, 2.1L, Eurovan 2.5L, Eurovan VR6).
- **System rail:** 12 systems in one row. The store's 27 overlapping collections fold into these.
- **Search:** takes part names and VW part numbers.

Part counts, part numbers and prices come from the live vanagain.com catalog as of Nov 7, 2026 (2,699 products). The product grid uses a 12-part sample for the 1986–92 Vanagon. The "bundle" cards are proposals, not real kits.

Plain static HTML/CSS/JS. No build step. Open `index.html` or serve the folder.

## Photo credits

Part photos and logo: vanagain.com.

Van photos from Wikimedia Commons:

- `hero-syncro.jpg` — 1989 Volkswagen Caravelle Club Westfalia Syncro, Spanish Coches, CC BY 2.0
- `van-bus.jpg` — Volkswagen T2B Westfalia Campingbus, Brücke-Osteuropa, CC0
- `van-aircooled.jpg` — 1981 Volkswagen Transporter Westfalia, Riley from Christchurch, New Zealand, CC BY 2.0
- `van-diesel.jpg` — 1984 Volkswagen T3 Westfalia Joker, Niels de Wit, CC BY 2.0
- `van-19.jpg` — Volkswagen Westfalia (Typ 2 - T3), Spanish Coches, CC BY 2.0
- `van-21.jpg` — 1986 Volkswagen T3 Westfalia Joker, Niels de Wit, CC BY 2.0
- `van-ev25.jpg` — Westfalia California T4, Norbert Schnitzler, CC BY-SA 3.0
- `van-ev28.jpg` — 2003 Volkswagen EuroVan GLS, MercurySable99, CC BY-SA 4.0
- `story.jpg` — VW Vans + old Chevrolet truck, dave_7 from Lethbridge, Canada, CC BY 2.0
- `camper.jpg` — Volkswagen Westfalia (Typ 2 - T3) interior, Spanish Coches, CC BY 2.0

Photos are resized and cropped.
