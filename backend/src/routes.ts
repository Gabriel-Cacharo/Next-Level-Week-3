import { Router } from 'express'
import multer from 'multer'

import UploadConfig from './config/upload'
import OrphanageController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(UploadConfig)

routes.get("/orphanages", OrphanageController.index)
routes.get("/orphanages/:id", OrphanageController.show)
routes.post("/orphanages", upload.array('images'), OrphanageController.create)

export default routes;