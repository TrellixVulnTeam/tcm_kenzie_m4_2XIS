import { Router } from "express";
import animalCreateController from "../controllers/animals/animalCreate.controller";
import animalListController from "../controllers/animals/animalList.controller";
import commentsCreateController from "../controllers/comments/commentsCreate.controller";

import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

import verifyFieldsMiddleware from "../middlewares/verifyFields.middleware";
import verifyFieldsAnimalsCreateMiddleware from "../middlewares/verifyFieldsAnimalsCreate.middleware";
import verifyIdUserMiddleware from "../middlewares/verifyIdUser.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const router = Router();

router.get("/users", userListController);
router.post("/users", verifyFieldsMiddleware, userCreateController);
router.post("/users/login", userLoginController);
router.patch(
  "/users/:id",
  verifyTokenMiddleware,
  verifyIdUserMiddleware,
  userUpdateController
);
router.delete(
  "/users/:id",
  verifyTokenMiddleware,
  verifyIdUserMiddleware,
  userDeleteController
);

router.get("/animals", animalListController);
router.post(
  "/animals",
  verifyFieldsAnimalsCreateMiddleware,
  animalCreateController
);
router.patch("/animals/:id");

router.post("/comments", verifyTokenMiddleware, commentsCreateController); //:id user

export default router;
