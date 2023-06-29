import express, {json} from 'express';
import {router as CourseHttpController} from "./api/CourseHttpController"
import cors from 'cors';


const app = express();

app.use(cors());
app.use(json());

app.use('/api/v1/courses', CourseHttpController);
app.listen(8080, ()=> console.log("Server has been started at 8080"));