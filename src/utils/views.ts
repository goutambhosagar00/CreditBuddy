export const getPostViews = (postId: number, initialViews: number = 0): number => {
  const storedViews = localStorage.getItem(`post_views_${postId}`);
  if (storedViews) {
    return parseInt(storedViews, 10);
  }
  return initialViews;
};

export const incrementPostViews = (postId: number, initialViews: number = 0): number => {
  const currentViews = getPostViews(postId, initialViews);
  const newViews = currentViews + 1;
  localStorage.setItem(`post_views_${postId}`, newViews.toString());
  return newViews;
};

export const getAllPostViews = <T extends { id: number; views?: number }>(posts: T[]): (T & { views: number })[] => {
  return posts.map(post => ({
    ...post,
    views: getPostViews(post.id, post.views || 0)
  }));
};
