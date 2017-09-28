import pages from './../pages';

const routes = {
  public: [{
    path: '/login',
    component: pages.Login
  }],
  private: [{
    path: '/',
    component: pages.Home
  }]
};

export default routes;