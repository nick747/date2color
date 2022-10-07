var app = new Vue({
  el: "#app",
  data: {

    color: "background:rgb(0,0,0); box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.35)",
    year: null,
    month: null,
    day: null,
    colore: "#",
  },
  methods: {
    azione: function () {
      var r = parseInt((255 * (this.day - 1)) / 31);
      var g = parseInt((255 * (this.month - 1)) / 12);
      var b = parseInt((255 * this.year) / 100);
      this.color = `background:rgb(${r},${g},${b}); box-shadow: 5px 10px 8px rgba(${r},${g},${b}, 0.35)`;
      this.colore = this.hex(r, g, b);
    },
    
    hex: function (r, g, b) {
      return "#" + decimaleAEsadecimale(r) + decimaleAEsadecimale(g) + decimaleAEsadecimale(b);
    }
  },
});

function decimaleAEsadecimale(decimale) {
    var esadecimale = decimale.toString(16);
    if (esadecimale.lenght < 2) esadecimale = "0" + esadecimale;

    return esadecimale;
}
