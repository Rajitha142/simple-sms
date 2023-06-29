import express,{json} from 'express';
import {datasource} from "../db/dbcp";

export const router = express.Router();

type Course = {
    "id": string,
    "description": string,
    "duration": string
}
router.get("/", async (req, res) => {
    const courses = await datasource.query('SELECT * FROM course');
    res.json(courses);
});

router.post("/", async (req, res) => {
    const course  = (req.body as Course);
    if (!course.id?.trim() || !course.description?.trim() || !course.duration?.trim()) {
        res.sendStatus(400);
        return
    }

    const result = await datasource.query('INSERT INTO course (id, description, duration) VALUES (?, ?, ?)', [course.id, course.description, course.duration]);
    res.status(201).json(course);
});

router.delete("/:id", async (req, res) => {
    const result = await datasource.query('DELETE FROM course WHERE id = ?', [req.params.id]);
    res.sendStatus(result.affectedRows ? 204: 404);
});