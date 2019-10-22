<template>
  <div id="task">
    <div class="col-lg-12 row">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-lg-4 offset-1">

        <b-form-group id="input-group-2" label="Amount:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="number"
            v-model="form.amount"
            required
            placeholder="Enter Amount"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Rates:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.currency"
            :options="currencies"
            required
            placeholder="Select Rate"
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-4 col-lg-4 offset-1" header="Response Data">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
      <hr />
      <b-card class="mt-3 col-lg-6 offset-3" header="Currency Conversion">
        <pre class="m-0">{{ results }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'task',
    data() {
      return {
        form: {
          amount: 1,
          currency: null
        },
        currencies: [],
        results: 0,
        show: true,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.amount = ''
        this.form.currency = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    mounted: function() {
      fetch('https://api.exchangeratesapi.io/latest', {
        method: 'get'
      })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.currencies = jsonData.rates
      })
    },
    watch: {
      form: function (val) {
        let numeral = require('numeral');
        let number = numeral(val);
        numeral.defaultFormat('0.00');
        this.amount = number.format();
      }
    }
  }
</script>


