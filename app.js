const menu=document.querySelector('.menu'),links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
const dialog=document.querySelector('#lightbox'),image=document.querySelector('#dialog-image');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{image.src=button.dataset.image;image.alt=button.querySelector('img').alt;document.querySelector('#dialog-caption').textContent=image.alt;dialog.showModal();document.body.style.overflow='hidden';}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';});
document.querySelector('#copy').addEventListener('click',async()=>{const text=document.querySelector('#bib').textContent,status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(text);status.textContent='Citation copied to clipboard.';document.querySelector('#copy').textContent='Copied ✓';}catch{const sel=window.getSelection(),range=document.createRange();range.selectNodeContents(document.querySelector('#bib'));sel.removeAllRanges();sel.addRange(range);status.textContent='Citation selected. Press Ctrl+C or ⌘C to copy.';}});
const tabs=Array.from(document.querySelectorAll('[role="tab"]'));
function activateTab(tab,focus=false){tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;});if(focus)tab.focus();}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();activateTab(tabs[next],true);}});});
