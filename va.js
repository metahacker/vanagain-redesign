/* VanAgain redesign mockup — shared data + rendering.
   Counts are real: pulled from vanagain.com's Shopify catalog on 2026-11-07
   (2,699 products; fitment from the store's own vehicle tags). */
const VANS = [
  {key:'bus',  fam:'bus', name:'Bus',      eng:'All engines', code:'Type 1 & Type 4', yrs:'1968–79', tag:'68-79 Bus', n:675,  img:'van-bus.jpg'},
  {key:'ac',   fam:'vanagon', name:'Vanagon', eng:'Air-cooled 2.0', code:'CV',  yrs:'1980–83', tag:'80-83 Air Cooled Vanagon', n:972, img:'van-aircooled.jpg'},
  {key:'dsl',  fam:'vanagon', name:'Vanagon', eng:'Diesel 1.6',     code:'CS',  yrs:'1982–84', tag:'82-84 Diesel Vanagon', n:984, img:'van-diesel.jpg'},
  {key:'19',   fam:'vanagon', name:'Vanagon', eng:'Wasserboxer 1.9L', code:'DH', yrs:'1983–85', tag:'83-85 1.9L Vanagon', n:1164, img:'van-19.jpg'},
  {key:'21',   fam:'vanagon', name:'Vanagon', eng:'Wasserboxer 2.1L', code:'MV', yrs:'1986–92', tag:'86-92 2.1L Vanagon', n:1294, img:'van-21.jpg', note:'incl. Syncro'},
  {key:'ev25', fam:'eurovan', name:'Eurovan', eng:'2.5L five', code:'AAF · ACU', yrs:'1992–96', tag:'92-96 2.5L Eurovan', n:373, img:'van-eurovan.jpg'},
  {key:'ev28', fam:'eurovan', name:'Eurovan', eng:'2.8L VR6', code:'AES · AXK', yrs:'1997–03', tag:'97-03 2.8L Eurovan', n:338, img:'van-eurovan.jpg'},
];
const FAMS = [
  {key:'bus', name:'Bus', yrs:'1968–1979', img:'van-bus.jpg', alt:'Orange late Bay Westfalia, METABUS, in the desert'},
  {key:'vanagon', name:'Vanagon', yrs:'1980–1992', img:'van-vanagon.jpg', alt:'Green Vanagon Syncro with roof light bar and bull bar fording a forest river'},
  {key:'eurovan', name:'Eurovan', yrs:'1992–2003', img:'van-eurovan.jpg', alt:'Blue Eurovan Westfalia high-top'},
];
// System → count per van tag (real catalog counts)
const T = ['68-79 Bus','80-83 Air Cooled Vanagon','82-84 Diesel Vanagon','83-85 1.9L Vanagon','86-92 2.1L Vanagon','92-96 2.5L Eurovan','97-03 2.8L Eurovan'];
const SYS = [
  {key:'engine',     name:'Engine',               img:'cat-engine.jpg',     total:634, byv:[189,133,158,169,173,94,91]},
  {key:'cooling',    name:'Cooling',              img:'cat-cooling.jpg',    total:252, byv:[11,10,59,84,104,42,25]},
  {key:'fuel',       name:'Fuel & Air',           img:'cat-fuel.jpg',       total:264, byv:[74,94,67,104,113,16,27]},
  {key:'electrical', name:'Electrical & Ignition',           img:'cat-electrical.jpg', total:454, byv:[112,160,127,182,221,103,63]},
  {key:'brakes',     name:'Brakes',               img:'cat-brakes.jpg',     total:232, byv:[77,86,87,87,104,33,50]},
  {key:'suspension', name:'Suspension & Steering',img:'cat-suspension.jpg', total:188, byv:[30,89,89,110,112,31,32]},
  {key:'gearbox',    name:'Gearbox & Clutch',     img:'cat-gearbox.jpg',    total:293, byv:[109,123,101,143,152,53,36]},
  {key:'exhaust',    name:'Exhaust',              img:'cat-exhaust.jpg',    total:123, byv:[40,22,24,19,31,14,9]},
  {key:'body',       name:'Body & Trim',          img:'cat-body.jpg',       total:507, byv:[63,328,336,354,382,42,38]},
  {key:'climate',    name:'Heat & A/C',           img:'cat-climate.jpg',    total:101, byv:[14,24,20,36,55,13,15]},
  {key:'camper',     name:'Camper',               img:'cat-camper.jpg', total:69, byv:[16,54,50,59,54,13,13]},
  {key:'tools',      name:'Tools & Hardware',     img:'cat-tools.jpg',      total:29,  byv:[21,13,14,16,12,8,7]},
];
const SHORT = {engine:'Engine',cooling:'Cooling',fuel:'Fuel & Air',electrical:'Electrical & Ignition',brakes:'Brakes',suspension:'Suspension',gearbox:'Gearbox',exhaust:'Exhaust',body:'Body & Trim',climate:'Heat & A/C',camper:'Camper',tools:'Tools'};
// Real products (titles tidied: fitment moved out of the name into its own line)
const PRODUCTS = [
  {img:'p-caliper.jpg',   cat:'brakes',     nm:'Brake caliper carrier',              sku:'251615125C',   pr:79.95,  fits:'1986–91 Vanagon', vans:['21']},
  {img:'p-manifold.jpg',  cat:'exhaust',    nm:'Exhaust manifold, cast-iron Y-pipe', sku:'025251217',    pr:99.95,  fits:'1986–91 Vanagon 2.1L', vans:['21']},
  {img:'p-rackbush.jpg',  cat:'suspension', nm:'Steering rack mount bushing, Powerflex', sku:'PFF85-1003', pr:107.99, fits:'All Vanagon 1980–92', vans:['ac','dsl','19','21']},
  {img:'p-tailpipe.jpg',  cat:'exhaust',    nm:'Tail pipe, stainless steel',         sku:'025251185CSS', pr:99.95,  fits:'1986–92 Vanagon 2.1L', vans:['21']},
  {img:'p-psres.jpg',     cat:'suspension', nm:'Power steering reservoir',           sku:'251422371',    pr:79.00,  fits:'All water-cooled Vanagon', vans:['19','21']},
  {img:'p-brakeline.jpg', cat:'brakes',     nm:'Metal brake line kit',               sku:'251698005G',   pr:99.95,  fits:'1986–92 Syncro', vans:['21']},
  {img:'p-filler.jpg',    cat:'fuel',       nm:'Gas tank filler, stainless',         sku:'251201107',    pr:189.05, fits:'Syncro Vanagon', vans:['21']},
  {img:'p-trinary.jpg',   cat:'climate',    nm:'A/C trinary pressure switch',        sku:'357959139B',   pr:69.95,  fits:'1988–91 Vanagon', vans:['21']},
  {img:'p-idlehose.jpg',  cat:'fuel',       nm:'Idle air bypass hose',               sku:'025133493C',   pr:39.95,  fits:'1986–91 Vanagon 2.1L', vans:['21']},
  {img:'p-difflock.jpg',  cat:'gearbox',    nm:'Rear differential lock mount',       sku:'094301142C',   pr:49.95,  fits:'Syncro Vanagon', vans:['21']},
  {img:'p-evap.jpg',      cat:'climate',    nm:'A/C evaporator, camper',             sku:'253260105A',   pr:899.00, fits:'1987–92 Westfalia', vans:['19','21']},
  {img:'p-coolhose.jpg',  cat:'cooling',    nm:'Coolant hose, water pump to head flange', sku:'026121053G', pr:9.95, fits:'1983–92 Vanagon', vans:['19','21']},
];

const fmt = n => n.toLocaleString('en-US');
const money = n => '$' + n.toFixed(2);
const qs = new URLSearchParams(location.search);
const ALL = qs.get('van') === 'all';
const SAVED = VANS.find(v => v.key === localStorage.getItem('va-van')) || null;
function getVan(){
  if (ALL) return null;
  const k = qs.get('van') || localStorage.getItem('va-van') || (document.body.dataset.defaultVan || '');
  return VANS.find(v => v.key === k) || null;
}
function setVan(k){ localStorage.setItem('va-van', k); }
const VAN = getVan();
const vIdx = v => T.indexOf(v.tag);
const label = v => `${v.yrs} ${v.name}${v.fam==='bus'?'':' '+v.eng.replace('Wasserboxer ','')}`;

const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

function header(active){
  const v = VAN;
  const pill = v
    ? `<a class="myvan" href="garage.html" title="Change van"><img class="thumb" src="${v.img}" alt=""><span class="lbl"><small>My van</small><b>${label(v)}</b></span><span class="chg">Change</span></a>`
    : ALL ? `<a class="myvan" href="garage.html"><img class="thumb" src="${SAVED?SAVED.img:'van-21.jpg'}" alt=""><span class="lbl"><small>My van · filter off</small><b>All vans</b></span><span class="chg">Set</span></a>`
    : `<a class="myvan empty" href="garage.html"><img class="thumb" src="van-21.jpg" alt=""><span class="lbl"><small>My van</small><b>Choose your van</b></span><span class="chg">Set</span></a>`;
  const vq = v ? `&van=${v.key}` : (ALL ? '&van=all' : '');
  const rail = SYS.map(s => `<a href="shop.html?cat=${s.key}${vq}" class="${active===s.key?'on':''}">${SHORT[s.key]}</a>`).join('')
    + `<span class="sep"></span><a class="quiet" href="#">Garage &amp; Gifts</a><a class="quiet" href="#">Used &amp; rebuilt</a><a class="quiet" href="#">Sale</a>`;
  return `
  <header class="hdr">
    <div class="wrap hdr-top">
      <a class="brand" href="home.html" aria-label="VanAgain home"><img class="wordmark" src="wordmark.png" alt="VanAgain.com"></a>
      <label class="search">${ICON_SEARCH}<input placeholder="Search parts or part number — try 251615125C" aria-label="Search parts"></label>
      ${pill}
      <nav class="hdr-links"><a class="hide-md" href="#help">Help</a><a class="hide-sm" href="#">Account</a><a href="#" aria-label="Cart"><span class="ct">Cart</span><span class="cart-n">0</span></a></nav>
    </div>
    <nav class="wrap rail" aria-label="Shop by system">${rail}</nav>
  </header>`;
}
function footer(){
  return `
  <footer class="ftr"><div class="wrap">
    <div class="cols">
      <div class="about"><a class="brand big" href="home.html"><img class="wordmark" src="wordmark.png" alt="VanAgain.com"></a>
        <p>Parts and advice for VW Bus, Vanagon and Eurovan owners. Keeping classic vans on the road since 1995.</p></div>
      <div><h4>Shop</h4><ul><li><a href="garage.html">Shop by van</a></li><li><a href="shop.html">All parts</a></li><li><a href="#">Camper parts</a></li><li><a href="#">Used &amp; rebuilt</a></li><li><a href="#">Garage &amp; Gifts</a></li></ul></div>
      <div><h4>Help</h4><ul><li><a href="#">Ask Ken about fitment</a></li><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li><li><a href="#">Track an order</a></li><li><a href="#">FAQ</a></li></ul></div>
      <div><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Journal</a></li><li><a href="#">Testimonials</a></li><li><a href="#">Rewards</a></li></ul></div>
      <div><h4>Contact</h4><ul><li><a href="#">Send a message</a></li><li><a href="#">Book a 30-min consult</a></li><li><a href="#">USD · English</a></li></ul></div>
    </div>
    <div class="base"><span>Rebuild by Barbine Worldwide. Design by metahacker.</span><span>Mockup, not the live store · <a href="https://github.com/metahacker/vanagain-redesign#photo-credits" style="text-decoration:underline">Photo credits</a></span></div>
  </div></footer>`;
}
function vanColumns(sel){
  return FAMS.map(f => {
    const rows = VANS.filter(v => v.fam===f.key).map(v => `
      <li><a href="shop.html?van=${v.key}" data-van="${v.key}" class="${sel&&sel.key===v.key?'sel':''}">
        <span class="eng">${f.key==='bus'?'All 1968–79 Bus':v.eng}</span><span class="code">${f.key==='bus'?'':v.yrs+' · '+v.code}${v.note?' · '+v.note:''}</span><span class="n">${fmt(v.n)}</span></a></li>`).join('');
    return `<div class="van"><a class="ph" href="${f.key==='bus'?'shop.html?van=bus':'garage.html#'+f.key}" ${f.key==='bus'?'data-van="bus"':''}><img src="${f.img}" alt="${f.alt}" loading="lazy"></a>
      <h3>${f.name}</h3><div class="yrs">${f.yrs}</div><ul>${rows}</ul></div>`;
  }).join('');
}
function tiles(opts={}){
  const v = opts.van, on = opts.on;
  return SYS.map(s => {
    const n = v ? s.byv[vIdx(v)] : s.total;
    const vq = v ? `&van=${v.key}` : (ALL ? '&van=all' : '');
    return `<a class="tile ${on===s.key?'on':''}" href="shop.html?cat=${s.key}${vq}" data-cat="${s.key}">
      <div class="im"><img class="${s.photo?'photo':''}" src="${s.img}" alt="" loading="lazy"></div>
      <div class="t"><span>${opts.short?SHORT[s.key]:s.name}</span><span class="n">${fmt(n)}</span></div></a>`;
  }).join('');
}
function card(p, showFit){
  return `<article class="card" data-cat="${p.cat}"><a class="im" href="#"><img src="${p.img}" alt="" loading="lazy"></a>
    <div class="nm">${p.nm}</div>
    <div class="meta"><span>${p.sku}</span><span>${p.fits}</span></div>
    ${showFit?'<div class="fit">Fits your van</div>':''}
    <div class="row"><span class="pr">${money(p.pr)}</span><button class="add">Add</button></div></article>`;
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-van]');
  if (a) setVan(a.dataset.van);
});
