import express from "express";

// consts
const router = express.Router();

router.get("/", (req, res)=> {

    res.send('API online')

});

export default router;
