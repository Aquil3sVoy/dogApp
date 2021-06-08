const publicRoutes = [
  {
    path: '/',
    loader: () => import('src/view/home/HomePage'),
  },
].filter(Boolean);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  publicRoutes,
};
