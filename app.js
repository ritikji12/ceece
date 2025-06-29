console.log("✅ Injected!");

[...document.querySelectorAll("*")].forEach(e => {
  if (e.innerText?.includes("GPCSSI25")) {
    console.log("🎯 Flag:", e.innerText);
    alert("🎯 Flag Found!");
  }
});
