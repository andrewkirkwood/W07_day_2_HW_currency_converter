import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {},
      selectedCurrency: null,
      amountInput: null,
      newAmount: null,
      convertDirection: null
    },
    computed: {
      currencyConversion: function () {
        euroCalculation()
      }
    },
    mounted: function() {
      this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data)
      }
      // euroCalculation: function(){
      //   Object.keys(this.currencies.rates).forEach(function (currency) {
      //     if this.selectedCurrency === currency {
      //       return this.newAmount = this.amountInput
      //     }
      //   })
      // }
    }
  });
});
