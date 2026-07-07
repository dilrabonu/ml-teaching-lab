/* ==========================================================
   SCRIPT.JS
   Bu fayl — ilovaning "miyasi". Har bir bo'lim mavzu tartibida
   yozilgan: avval NAVIGATSIYA, keyin 1-DOM, 2-BOM, 3-ELEMENT,
   4-EVENT. Darsda har bo'limni Windsurf'da ochib, o'sha bo'lim
   ekranda qanday ishlashini birga ko'rsating.
   ========================================================== */


/* ====================================================
   NAVIGATSIYA — sidebar tugmalari sahifalarni almashtiradi
   ==================================================== */
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.page;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById("page-" + target).classList.add("active");
  });
});


/* ====================================================
   1-BO'LIM: DOM — elementni "topib", daraxtda ajratib ko'rsatish
   ==================================================== */
const domCode = document.getElementById("domCode");

document.getElementById("domHighlightBtn").addEventListener("click", () => {
  const nodes = document.querySelectorAll("#domTree .tree-node");
  nodes.forEach((n) => n.classList.remove("highlight"));

  // Har bosishda navbat bilan bitta "shoxni" yoritamiz
  let current = document.querySelector("#domTree .tree-node.current-index");
  let nextIndex = 0;
  if (current) {
    nextIndex = (Array.from(nodes).indexOf(current) + 1) % nodes.length;
    current.classList.remove("current-index");
  }
  nodes[nextIndex].classList.add("highlight", "current-index");

  domCode.innerHTML =
    `document.querySelectorAll(".tree-node") <span class="fn">// ${nodes[nextIndex].dataset.node} topildi</span>`;
});


/* ====================================================
   2-BO'LIM: BOM — brauzerning o'zi bilan ishlash
   ==================================================== */
const bomCode = document.getElementById("bomCode");

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

document.getElementById("bomWidthBtn").addEventListener("click", () => {
  showToast("Sizning brauzeringiz kengligi: " + window.innerWidth + " piksel");
  bomCode.innerHTML = `<span class="kw">alert</span>(window.<span class="fn">innerWidth</span>);`;
});

document.getElementById("bomAlertBtn").addEventListener("click", () => {
  document.getElementById("modalOverlay").classList.add("show");
  bomCode.innerHTML = `window.<span class="fn">alert</span>(<span class="str">"Salom!"</span>);`;
});

document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("modalOverlay").classList.remove("show");
});


/* ====================================================
   3-BO'LIM: ELEMENTNI BOSHQARISH — querySelector, textContent, style
   ==================================================== */
const elementCode = document.getElementById("elementCode");
const liveH1 = document.getElementById("liveH1");

const texts = ["Salom, Dunyo!", "Men o'zgardim!", "JavaScript ishlayapti!"];
let textIndex = 0;
document.getElementById("elTextBtn").addEventListener("click", () => {
  textIndex = (textIndex + 1) % texts.length;
  liveH1.textContent = texts[textIndex];
  elementCode.innerHTML =
    `document.<span class="fn">querySelector</span>(<span class="str">"#liveH1"</span>).textContent = <span class="str">"${texts[textIndex]}"</span>;`;
});

const colors = ["#453FE0", "#1D9E75", "#BA7517", "#D6336C", "#1B2430"];
let colorIndex = 0;
document.getElementById("elColorBtn").addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  liveH1.style.color = colors[colorIndex];
  elementCode.innerHTML =
    `document.<span class="fn">querySelector</span>(<span class="str">"#liveH1"</span>).style.color = <span class="str">"${colors[colorIndex]}"</span>;`;
});

document.getElementById("elResetBtn").addEventListener("click", () => {
  textIndex = 0;
  colorIndex = 0;
  liveH1.textContent = texts[0];
  liveH1.style.color = "#1B2430";
  elementCode.innerHTML = `<span class="fn">// Boshlang'ich holatga qaytarildi</span>`;
});


/* ====================================================
   4-BO'LIM: EVENT'LAR — click va hover
   ==================================================== */
const eventCode = document.getElementById("eventCode");
let clickCount = 0;

document.getElementById("eventClickBtn").addEventListener("click", () => {
  clickCount++;
  document.getElementById("clickCounter").textContent = clickCount;
  eventCode.innerHTML =
    `tugma.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () => {<br>&nbsp;&nbsp;hisoblagich++; <span class="fn">// hozir: ${clickCount}</span><br>});`;
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "var(--green-light)";
  hoverBox.style.color = "var(--green)";
  hoverBox.textContent = "Zo'r! Siz 'mouseover' event'ini ishga tushirdingiz!";
  eventCode.innerHTML =
    `quti.<span class="fn">addEventListener</span>(<span class="str">"mouseover"</span>, () => { ... });`;
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "";
  hoverBox.style.color = "";
  hoverBox.textContent = "Sichqonchani shu yerga olib keling";
});