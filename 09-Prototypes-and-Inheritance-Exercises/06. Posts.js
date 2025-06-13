function generatePosts() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      const output = [];
      output.push(`Post: ${this.title}`, `Content: ${this.content}`);
      return output.join("\n");
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.comments = [];
      this.rating = likes - dislikes;
    }

    addComment(comment) {
      this.comments.push(" * " + comment);
    }

    toString() {
      const output = [];
      output.push(Post.prototype.toString.call(this));
      output.push(`Rating: ${this.rating}`);
      if (this.comments.length > 0) {
        output.push(`Comments:\n${this.comments.join("\n")}`);
      }
      return output.join("\n");
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views += 1;
      return this;
    }

    toString() {
      const output = [];
      output.push(Post.prototype.toString.call(this));
      output.push(`Views: ${this.views}`);
      return output.join("\n");
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}
const classes = generatePosts();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content
console.log("-----------");
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
console.log("-----------");
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow
let blog = new classes.BlogPost("Chaining Test", "This is awesome", 10);
console.log(blog.view().view().toString());
// console.log(blog.toString());
// Post: The Best Title
// Content: Some Content
// Views: 51
