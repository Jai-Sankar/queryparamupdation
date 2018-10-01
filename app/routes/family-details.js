import Route from '@ember/routing/route';

const familyDetails = {
  cliftons : {
    family_name : 'Clifton Family'
  },
  barringtons : {
    family_name : 'Barrington Family'
  }
}

export default Route.extend({

  model({ family_id }) {
    return familyDetails[family_id];
  }
});
