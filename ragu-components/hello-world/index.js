import App from '../../src/App';
import Vue from 'vue';

export default {
  render(_, state) {
    return new Vue({
      render: h => h(App, { props: state })
    });
  }
}