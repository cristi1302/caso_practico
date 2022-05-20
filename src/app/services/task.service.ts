import { Injectable } from '@angular/core';
import { Task} from '../models/Tasks';

const TasksList = [
  {
    "id" : 1,
    "title" : "cuenta asociada",
    "descripcion" : "numero de cuenta"
  },
  {
    "id" : 2,
    "title" : "nombre",
    "descripcio" : "importante"
  },
  {
    "id" : 3,
    "title" : "rfc",
    "descripcio" : "con homoclave"
  },
]


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return TasksList;
  }
  
  getOneTask(_id:number){
    return TasksList.find(task => task.id === _id)
  }

  addTask(task : Task){
    TasksList.push(task);
  }




}
