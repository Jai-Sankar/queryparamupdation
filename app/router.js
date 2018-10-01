import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('family-details', { path: '/:family_id' }, function() {
    this.route('members-list', function() {
      this.route('member-details', { path: '/:member_id' });
    });
  });
});

export default Router;
