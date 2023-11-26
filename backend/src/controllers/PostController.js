import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createPost = async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: req.body,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    await prisma.post.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.status(200).json("Post updated!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    await prisma.post.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Post deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id } });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { createPost, updatePost, deletePost, getAllPost, getPost };
