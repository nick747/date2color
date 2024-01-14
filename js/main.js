new Vue({
  el: "#app",
  data: {
    year: null,
    month: null,
    day: null,
    color: "background:rgb(0,0,0); box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.35)",
    colore: "#",
    error: false,
  },
  methods: {
    validateDate: function () {
      // Verifica se il formato della data è corretto
      var day = parseInt(this.day);
      var month = parseInt(this.month);
      var year = parseInt(this.year);

      if (
        Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year) ||
        day < 1 || day > 31 || month < 1 || month > 12 || year < 1
      ) {
        // Se il formato è non valido, imposta la variabile di stato error su true
        this.error = true;
      } else {
        // Resetta la variabile di stato error se il formato è valido
        this.error = false;

        // Se la data è valida, aggiorna il colore
        this.azione();
      }
    },

    azione: function () {
      // Calcola il colore
      var r = parseInt((255 * (this.day - 1)) / 31);
      var g = parseInt((255 * (this.month - 1)) / 12);
      var b = parseInt((255 * this.year) / 100);
      this.color = `background:rgb(${r},${g},${b}); box-shadow: 5px 10px 8px rgba(${r},${g},${b}, 0.35)`;
      this.colore = this.hex(r, g, b);
    },
    
    hex: function (r, g, b) {
      return "#" + this.decimaleAEsadecimale(r) + this.decimaleAEsadecimale(g) + this.decimaleAEsadecimale(b);
    },

    decimaleAEsadecimale: function (decimale) {
      var esadecimale = decimale.toString(16);
      if (esadecimale.length < 2) esadecimale = "0" + esadecimale;

      return esadecimale;
    }
  },
});