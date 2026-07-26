/* Theme control: Light / Dark / System (default). Class-based so the
   committed Tailwind build stays untouched; runs blocking in <head>. */
(function () {
  var root = document.documentElement;
  var KEY = "pf-theme";
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function choice() {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    return stored === "dark" || stored === "light" ? stored : "system";
  }

  function paint() {
    var c = choice();
    var dark = c === "dark" || (c === "system" && mq.matches);
    root.classList.add("theme-snap");
    root.classList.toggle("theme-dark", dark);
    setTimeout(function () { root.classList.remove("theme-snap"); }, 60);
  }

  paint();
  mq.addEventListener("change", function () { if (choice() === "system") paint(); });

  window.addEventListener("DOMContentLoaded", function () {
    var opts = document.querySelectorAll(".pf-lamp button");
    function reflect() {
      var c = choice();
      opts.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-set-theme") === c));
      });
    }
    opts.forEach(function (b) {
      b.addEventListener("click", function () {
        var pick = b.getAttribute("data-set-theme");
        try {
          if (pick === "system") localStorage.removeItem(KEY);
          else localStorage.setItem(KEY, pick);
        } catch (e) {}
        paint();
        reflect();
      });
    });
    reflect();
  });
})();
