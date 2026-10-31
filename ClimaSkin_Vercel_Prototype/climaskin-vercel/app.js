// Tiny fictional demo dataset. Not live weather, air-quality readings or medical advice.
const profiles={
 kolhapur:{label:"KOLHAPUR · WARM SAMPLE PROFILE",title:"Keep the routine light.",copy:"For this example warm-day profile, a gentle cleanse and comfortable moisturizer may be enough. If you're outdoors, follow local UV guidance and use your usual sun protection."},
 pune:{label:"PUNE · DRIER SAMPLE PROFILE",title:"Comfort over extra steps.",copy:"This sample profile represents a drier day. If your skin feels tight, keep things gentle and use a moisturizer you already know works for you."},
 mumbai:{label:"MUMBAI · HUMID SAMPLE PROFILE",title:"Fresh, simple, no fuss.",copy:"For this humid-day example, choose textures that feel comfortable to you. There is no need to add products just because the weather changed."},
 delhi:{label:"DELHI · AIR-QUALITY CHECK SAMPLE",title:"Be gentle with your skin.",copy:"This example is a reminder to check a trusted local air-quality source. Avoid harsh over-cleansing; if irritation persists, seek advice from a qualified professional."}
};
const routines={
 simple:["Use a gentle cleanser you already like.","Choose a moisturizer that feels comfortable.","Check UV guidance and use sun protection outdoors."],
 dry:["Cleanse gently; avoid scrubbing.","Try your familiar moisturizer on slightly damp skin.","Pause products that sting; seek advice if irritation persists."],
 oily:["Use a gentle cleanser rather than washing repeatedly.","Choose a lightweight moisturizer if that feels better.","Keep sun protection in your daytime routine."],
 sensitive:["Stick to familiar, gentle products if tolerated.","Avoid adding several new products at once.","Stop anything that causes a reaction and seek professional advice if needed."]
};
const city=document.querySelector("#city"), concern=document.querySelector("#concern");
function update(){
 const p=profiles[city.value], c=concern.value;
 document.querySelector("#weather").textContent=p.label;
 document.querySelector("#title").textContent=c==="simple"?p.title:({dry:"Give comfort the first say.",oily:"Simple can still feel fresh.",sensitive:"Take the gentler route."}[c]);
 document.querySelector("#copy").textContent=p.copy;
 const list=document.querySelector("#steps"); list.replaceChildren();
 routines[c].forEach((s,i)=>{const li=document.createElement("li"),n=document.createElement("i");n.textContent=String(i+1).padStart(2,"0");li.append(n,document.createTextNode(s));list.append(li);});
}
document.querySelector("#make").addEventListener("click",update);city.addEventListener("change",update);concern.addEventListener("change",update);
