import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createComment = async (req, res) => {
  try {
    const comment = await prisma.comment.create({
      data: req.body,
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateComment = async (req, res) => {
  try {
    await prisma.comment.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.status(200).json("Comment updated!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    await prisma.comment.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Comment deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllComment = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: req.params.id },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { createComment, updateComment, deleteComment, getAllComment };
