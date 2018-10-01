import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['filter_by'],

  filter_by: 'all',

  actions: {
    filterUpdated(status) {
      this.set('filter_by', status)
    }
  }
});
