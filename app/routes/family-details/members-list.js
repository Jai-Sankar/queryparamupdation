import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    filter_by: {
      refreshModel: true
    }
  },

  model(params) {
    let familyName = this.modelFor('family-details').family_name;
    let model = {};
    model.family_members = [];
    if (params.filter_by === 'men' || params.filter_by === 'all') {
      if (familyName === 'Clifton Family') {
        model.family_members.pushObject({
          name: 'Arthur Clifton',
          member_id: 1
        });
        model.family_members.pushObject({
          name: 'Harry Clifton',
          member_id: 2
        });
      } else {
        model.family_members.pushObject({
          name: 'Hugo Barrington',
          member_id: 3
        });
        model.family_members.pushObject({
          name: 'Giles Barrington',
          member_id: 4
        });
      }
    }
    if (params.filter_by === 'women' || params.filter_by === 'all') {
      if (familyName === 'Clifton Family') {
        model.family_members.pushObject({
          name: 'Maisie Clifton',
          member_id: 5
        });
        model.family_members.pushObject({
          name: 'Emma Clifton',
          member_id: 6
        });
      } else {
        model.family_members.pushObject({
          name: 'Elizabeth Barrington',
          member_id: 7
        });
        model.family_members.pushObject({
          name: 'Emma Barrington',
          member_id: 8
        });
      }
    }
    return model;
  }
});
