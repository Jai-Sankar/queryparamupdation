import Route from '@ember/routing/route';

const senapathyFamily = {
  1 : {
    name: 'Arthur Clifton'
  },
  2 : {
    name: 'Harry Clifton'
  },
  3 : {
    name: 'Hugo Barrington'
  },
  4 : {
    name: 'Giles Barrington'
  },
  5 : {
    name: 'Maisie Clifton'
  },
  6 : {
    name: 'Emma Clifton'
  },
  7 : {
    name: 'Elizabeth Barrington'
  },
  8 : {
    name: 'Emma Barrington'
  }
}

export default Route.extend({

  model({ member_id }) {
    return senapathyFamily[member_id];
  }

});
