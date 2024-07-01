class Model {
  apiUrl = null;
  apiRoutes = null;

  constructor(url, routes) {
    this.apiUrl = url
    this.apiRoutes = routes
  }

  async getPostById(id) {
    if (id === undefined) throw new Error('id not found')
    const url = `${this.apiUrl}/${this.apiRoutes.posts}/${id}`;
    const post = await fetch(url);
    const data = await post.json();
    return data
  };

  async getCommentById(id) {
    if (!id) throw new Error('id not found')
    const url = `${this.apiUrl}/${this.apiRoutes.comments}?postId=${id}`;
    const post = await fetch(url);
    const data = await post.json();
    return data;
  };

}

export default Model;