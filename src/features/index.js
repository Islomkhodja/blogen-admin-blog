const db = require("../lib/db");
const { repositoryFactory } = require("objection-repositories");
let { Categories, CategoriesRepo } = require("./categories");
let { Users, UsersRepo } = require("./users");
let { PostsRepo, Posts } = require("./posts");
const { UsersController, UsersService } = require("./users");

CategoriesRepo = repositoryFactory.getCustomRepository(
  CategoriesRepo,
  db,
  Categories
);
UsersRepo = repositoryFactory.getCustomRepository(UsersRepo, db, Users);
PostsRepo = repositoryFactory.getCustomRepository(PostsRepo, db, Posts);

const repositories = {
  UsersRepo,
  CategoriesRepo,
  PostsRepo,
};

const usersService = new UsersService(repositories);

const services = {
  usersService,
};

const usersController = new UsersController(services);

module.exports = {
  CategoriesRepo,
  PostsRepo,
  UsersRepo,
  usersController,
};
