const STORAGE_KEY = "dear-ma-dear-pa-draft-v2";

const I18N = {
  en: {
    eyebrow: "NO PERFECT WORDS NEEDED",
    heroTitle: "Some things are easier to say when we slow down.",
    heroSub: "A short, private reflection to help you put into words the things you appreciate, remember, wish for, and now understand about someone who has been like a parent to you.",
    start: "Start my letter →",
    shareForm: "Send this form to someone",
    privacyNote: "Your draft stays in this browser. Nothing is sent unless you choose to share it.",
    howTitle: "Pick a few little doors to open.",
    howSub: "You don't have to answer everything. Skip anything that doesn't feel right.",
    savedLocally: "saved on this device",
    optional: "all optional",
    recipientLabel: "Who are you writing to?",
    recipientNote: "Optional — you can leave this blank.",
    pauseTitle: "Before you finish…",
    pauseText: "What might your parent, guardian, or parent figure have been carrying back then that you couldn't see yet?",
    pauseNote: "Understanding another side doesn't erase the things that hurt. It can simply make more room for both stories.",
    almost: "ALMOST THERE",
    finishTitle: "What do you want them to carry after reading this?",
    finishSub: "One sentence is enough. Or leave it blank and let the letter speak for itself.",
    makeLetter: "Turn my thoughts into a letter ✨",
    yourLetter: "YOUR LETTER",
    resultTitle: "A few honest words, in your own voice.",
    edit: "← Edit",
    copy: "Copy letter",
    shareLetter: "Share letter",
    emailLetter: "Open email",
    clear: "Clear draft",
    sendNote: "Sharing uses your device's share/email options. The site does not send your letter by itself.",
    sendEyebrow: "WANT TO GIVE THEM A LITTLE NUDGE?",
    sendTitle: "Send the reflection form to them.",
    sendText: "Maybe you want your parent, guardian, or parent figure to answer a few questions too. Send them the blank reflection form — their answers stay on their device.",
    whyEyebrow: "WHY THIS EXISTS",
    whyTitle: "For the conversations we don't always know how to start.",
    whyText: "This project began as a youth-led idea connected with an MCGI Youth parents-focused activity. The resource is intentionally open to anyone, regardless of religion or family background.",
    whyNote: "You never have to send a letter. Writing it can be enough for today.",
    footerText: "made for honest little conversations",
    greeting: (name) => `Dear ${name || "Ma / Pa"},`,
    shareTitle: "A little reflection for us",
    shareText: "I found this short reflection form and thought we could each take a few minutes with it. No pressure — just a little space to say what we don't always say."
  },
  tl: {
    eyebrow: "HINDI KAILANGANG PERPEKTO ANG MGA SALITA",
    heroTitle: "May mga bagay na mas madaling sabihin kapag huminto muna tayo sandali.",
    heroSub: "Isang maikling at pribadong reflection para matulungan kang sabihin ang mga bagay na pinapahalagahan, naaalala, hinihiling, at mas naiintindihan mo na tungkol sa isang taong naging magulang o magulang-sa-puso para sa iyo.",
    start: "Simulan ang sulat ko →",
    shareForm: "Ipadala ang form sa iba",
    privacyNote: "Nasa browser lang ang draft mo. Walang ipinapadala maliban kung piliin mong i-share ito.",
    howTitle: "Pumili ng ilang pintuang gusto mong buksan.",
    howSub: "Hindi kailangang sagutin lahat. Puwede mong laktawan ang hindi komportable.",
    savedLocally: "naka-save sa device na ito",
    optional: "lahat optional",
    recipientLabel: "Para kanino ang sulat mo?",
    recipientNote: "Optional — puwedeng iwanang blangko.",
    pauseTitle: "Bago ka matapos…",
    pauseText: "Ano kaya ang mga pinagdadaanan noon ng magulang, guardian, o taong naging parang magulang sa iyo na hindi mo pa nakikita o naiintindihan noon?",
    pauseNote: "Hindi binubura ng pag-unawa sa kabilang panig ang mga bagay na nakasakit. Baka makatulong lang itong bigyan ng puwang ang dalawang kuwento.",
    almost: "MALAPIT NA",
    finishTitle: "Ano ang gusto mong maiwan sa puso nila pagkatapos nilang basahin ito?",
    finishSub: "Kahit isang pangungusap lang. O puwedeng iwanang blangko at hayaan ang sulat ang magsalita.",
    makeLetter: "Gawing sulat ang mga sinabi ko ✨",
    yourLetter: "ANG SULAT MO",
    resultTitle: "Ilang tapat na salita, gamit ang sarili mong boses.",
    edit: "← I-edit",
    copy: "Kopyahin ang sulat",
    shareLetter: "I-share ang sulat",
    emailLetter: "Buksan ang email",
    clear: "Burahin ang draft",
    sendNote: "Gagamitin ng sharing ang options ng device mo. Hindi awtomatikong ipinapadala ng website ang sulat.",
    sendEyebrow: "GUSTO MO BA SILANG ANYAYAHAN?",
    sendTitle: "Ipadala sa kanila ang reflection form.",
    sendText: "Baka gusto mong sagutin din ito ng iyong magulang, guardian, o parent figure. Ipadala ang blankong form — mananatili sa device nila ang kanilang sagot.",
    whyEyebrow: "BAKIT ITO GINAWA",
    whyTitle: "Para sa mga usapang hindi natin laging alam kung paano sisimulan.",
    whyText: "Nagsimula ang proyektong ito bilang youth-led idea na konektado sa isang MCGI Youth parents-focused activity. Sadyang bukas ang resource na ito sa lahat, anuman ang relihiyon o family background.",
    whyNote: "Hindi mo kailangang ipadala ang sulat. Minsan, sapat nang naisulat mo ito ngayong araw.",
    footerText: "para sa mga tapat na munting pag-uusap",
    greeting: (name) => `Dear ${name || "Ma / Pa"},`,
    shareTitle: "Isang munting reflection para sa atin",
    shareText: "May nakita akong maikling reflection form. Baka gusto nating pareho itong sagutan kahit ilang minuto lang. Walang pressure — kaunting space lang para masabi ang mga bagay na hindi natin laging nasasabi."
  }
};

const PROMPTS = [
  {
    id:"happy",
    titleEn:"I feel happy when…",
    titleTl:"Natutuwa ako kapag…",
    hintEn:"What is something small or big they do that you appreciate?",
    hintTl:"Anong maliit o malaking bagay ang ginagawa nila na naa-appreciate mo?"
  },
  {
    id:"memory",
    titleEn:"I remember…",
    titleTl:"Naalala ko…",
    hintEn:"What is a memory with them that you still carry with you?",
    hintTl:"Anong alaala ninyo ang hindi mo makalimutan?"
  },
  {
    id:"thanks",
    titleEn:"Thank you, Ma / Pa, for…",
    titleTl:"Thank you, Ma / Pa, sa…",
    hintEn:"What did they do, give up, or provide that you're grateful for?",
    hintTl:"Ano ang ginawa, isinakripisyo, o ibinigay nila na ipinagpapasalamat mo?"
  },
  {
    id:"tell",
    titleEn:"I want you to know…",
    titleTl:"Gusto kong malaman mo…",
    hintEn:"Something you've wanted to say for a while — love, hurt, or something you wish they understood.",
    hintTl:"Isang bagay na matagal mo nang gustong sabihin — pagmamahal, sakit, o gusto mong maintindihan nila."
  },
  {
    id:"older",
    titleEn:"Now that I'm older, I realize…",
    titleTl:"Ngayon, naiintindihan ko na…",
    hintEn:"What do you understand about them now that you didn't understand as a child?",
    hintTl:"Ano ang mas naiintindihan mo tungkol sa kanila ngayong mas matanda ka na?"
  },
  {
    id:"hope",
    titleEn:"I hope we can have more…",
    titleTl:"Sana mas…",
    hintEn:"More time, bonding, conversations, affection, patience, or understanding?",
    hintTl:"Ano ang gusto mong magkaroon kayo ng mas marami — oras, bonding, usapan, lambing, o pagkakaintindihan?"
  },
  {
    id:"proud",
    titleEn:"I'm proud of you because…",
    titleTl:"Proud ako sa’yo dahil…",
    hintEn:"What is something about them that you admire or feel proud of?",
    hintTl:"Ano ang isang bagay tungkol sa kanila na hinahangaan o ipinagmamalaki mo?"
  }
];

let lang = "en";
let draft = loadDraft();

function $(id){ return document.getElementById(id); }

function loadDraft(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {answers:{}, perspective:"", closing:"", recipient:""}; }
  catch { return {answers:{}, perspective:"", closing:"", recipient:""}; }
}
function saveDraft(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(draft)); } catch {}
}
function t(key){ return I18N[lang][key]; }

function renderPrompts(){
  $("promptGrid").innerHTML = PROMPTS.map((p,i)=>`
    <article class="prompt-card">
      <div class="prompt-number">${String(i+1).padStart(2,"0")}</div>
      <h3 class="prompt-title">${lang==="tl"?p.titleTl:p.titleEn}</h3>
      <p class="prompt-hint">${lang==="tl"?p.hintTl:p.hintEn}</p>
      <textarea data-id="${p.id}" rows="5" maxlength="1000" placeholder="${lang==="tl"?"Isulat dito…":"Write here…"}">${escapeHtml(draft.answers[p.id]||"")}</textarea>
    </article>`).join("");

  document.querySelectorAll("#promptGrid textarea").forEach(el=>{
    el.addEventListener("input", ()=>{
      draft.answers[el.dataset.id] = el.value;
      saveDraft();
      updateProgress();
    });
  });
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function updateProgress(){
  const count = PROMPTS.filter(p=>(draft.answers[p.id]||"").trim()).length;
  $("progressText").textContent = `${count} / ${PROMPTS.length}`;
  $("progressBar").style.width = `${count/PROMPTS.length*100}%`;
}

function applyLanguage(){
  document.documentElement.lang = lang==="tl" ? "fil" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(I18N[lang][key]) el.textContent=I18N[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  renderPrompts();
  updateProgress();
}

function toast(msg){
  const el=$("toast"); el.textContent=msg; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove("show"),2200);
}

function collect(){
  document.querySelectorAll("#promptGrid textarea").forEach(el=>draft.answers[el.dataset.id]=el.value);
  draft.perspective=$("perspective").value;
  draft.closing=$("closing").value;
  saveDraft();
}

function buildLetter(){
  collect();
  const recipient = draft.recipient.trim() || (lang==="tl" ? "Ma / Pa" : "Ma / Pa");
  $("letterGreeting").textContent = t("greeting")(recipient);

  const parts = PROMPTS
    .map(p=>({p, v:(draft.answers[p.id]||"").trim()}))
    .filter(x=>x.v)
    .map(x=>`<p><strong>${lang==="tl"?x.p.titleTl:x.p.titleEn}</strong><br>${escapeHtml(x.v).replace(/\n/g,"<br>")}</p>`);

  if(draft.perspective.trim()){
    parts.push(`<p><strong>${lang==="tl"?"At habang iniisip ko rin ang side mo…":"And as I think about your side too…"}</strong><br>${escapeHtml(draft.perspective).replace(/\n/g,"<br>")}</p>`);
  }
  $("letterBody").innerHTML = parts.length ? parts.join("") :
    `<p>${lang==="tl"?"Wala pa akong naisulat, pero gusto kong magsimula ng pag-uusap.":"I don't have all the words yet, but I wanted to start a conversation."}</p>`;

  $("letterClosing").textContent = draft.closing.trim() || (lang==="tl" ? "Mahal kita / Mahal ko kayo." : "With love.");
  $("result").classList.remove("hidden");
  $("result").scrollIntoView({behavior:"smooth", block:"start"});
}

function plainLetter(){
  const lines=[];
  lines.push(t("greeting")(draft.recipient.trim() || "Ma / Pa"),"");
  PROMPTS.forEach(p=>{
    const v=(draft.answers[p.id]||"").trim();
    if(v) lines.push((lang==="tl"?p.titleTl:p.titleEn), v, "");
  });
  if(draft.perspective.trim()) lines.push(lang==="tl"?"At habang iniisip ko rin ang side mo…":"And as I think about your side too…", draft.perspective.trim(), "");
  lines.push(draft.closing.trim() || (lang==="tl" ? "Mahal kita / Mahal ko kayo." : "With love."));
  return lines.join("\n");
}

async function share(data){
  if(navigator.share && (!navigator.canShare || navigator.canShare(data))){
    try { await navigator.share(data); return true; } catch(e){ if(e.name==="AbortError") return true; }
  }
  return false;
}

async function shareForm(){
  const data = {
    title: t("shareTitle"),
    text: t("shareText"),
    url: location.href.split("#")[0]
  };
  if(await share(data)) return;
  try {
    await navigator.clipboard.writeText(`${data.text}\n${data.url}`);
    toast(lang==="tl"?"Nakopya ang link!":"Form link copied!");
  } catch {
    window.prompt(lang==="tl"?"Kopyahin ang link:":"Copy this link:", data.url);
  }
}

async function shareLetter(){
  const text=plainLetter();
  if(await share({title:"Dear Ma, Dear Pa", text})) return;
  try { await navigator.clipboard.writeText(text); toast(lang==="tl"?"Nakopya ang sulat!":"Letter copied!"); }
  catch { window.prompt("Copy your letter:", text); }
}

function emailLetter(){
  const subject=encodeURIComponent(lang==="tl"?"Isang sulat para sa iyo":"A letter for you");
  const body=encodeURIComponent(plainLetter());
  location.href=`mailto:?subject=${subject}&body=${body}`;
}

function clearDraft(){
  if(!confirm(lang==="tl"?"Burahin ang draft na naka-save sa device na ito?":"Clear the draft saved on this device?")) return;
  draft={answers:{}, perspective:"", closing:"", recipient:""};
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
  $("perspective").value=""; $("closing").value="";
  $("result").classList.add("hidden");
  renderPrompts(); updateProgress();
  window.scrollTo({top:0, behavior:"smooth"});
  toast(lang==="tl"?"Nabura na ang draft.":"Draft cleared.");
}

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    lang=btn.dataset.lang;
    applyLanguage();
  });
});

$("startBtn").addEventListener("click", ()=>$("letter").scrollIntoView({behavior:"smooth"}));
$("shareFormBtn").addEventListener("click", shareForm);
$("shareFormBtn2").addEventListener("click", shareForm);
$("makeLetterBtn").addEventListener("click", buildLetter);
$("copyBtn").addEventListener("click", async ()=>{
  try { await navigator.clipboard.writeText(plainLetter()); toast(lang==="tl"?"Nakopya ang sulat!":"Letter copied!"); }
  catch { window.prompt("Copy your letter:", plainLetter()); }
});
$("shareLetterBtn").addEventListener("click", shareLetter);
$("emailBtn").addEventListener("click", emailLetter);
$("editBtn").addEventListener("click", ()=>$("letter").scrollIntoView({behavior:"smooth"}));
$("clearBtn").addEventListener("click", clearDraft);

$("perspective").value=draft.perspective||"";
$("closing").value=draft.closing||"";
$("perspective").addEventListener("input",()=>{draft.perspective=$("perspective").value;saveDraft();});
$("closing").addEventListener("input",()=>{draft.closing=$("closing").value;saveDraft();});

applyLanguage();
