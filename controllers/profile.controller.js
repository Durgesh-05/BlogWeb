import { User } from "../models/user.model.js";
import { Blog } from "../models/blog.model.js";
async function renderUserProfile(req, res) {
  const allBlogsByUser = await Blog.find({
    author: req.params.userId,
  });
  const userData = await User.findById({ _id: req.params.userId });
  res.render("profile", {
    user: req.user,
    userData,
    blogs: allBlogsByUser,
  });
}

async function handleDeleteBlogFromProfile(req, res) {
  await Blog.deleteOne({ _id: req.params.blogId });
  res.redirect(`/api/v1/profile/${req.user._id}`);
}

async function handleEditUserProfile(req, res) {
  const updateData = {};
  if (req.body.interest) {
    updateData.interest = req.body.interest.split(",");
  }
  if (req.file) {
    const { filename } = req.file;
    updateData.profileImageUrl = `/uploads/${filename}`;
  }

  if (Object.keys(updateData).length > 0) {
    await User.findByIdAndUpdate({ _id: req.user._id }, updateData);
  }
  res.redirect(`/api/v1/profile/${req.user._id}`);
}

export {
  handleDeleteBlogFromProfile,
  handleEditUserProfile,
  renderUserProfile,
};
