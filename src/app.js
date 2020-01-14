import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {},
      // currencyKeys: []
    },
    mounted: function() {
      this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data)
        // .then(keyData => this.getKeys())
        .then(console.log(this.currencies))

      },
      selectedCurrency: function () {

      }
      // getKeys: function () {
      //   Object.keys(this.currencies.rates).forEach(function(key) {
      //     this.currencyKeys.push(key)
      //   })
      // }
    }
  });
});
