import { Component, TemplateRef, Input, ElementRef } from '@angular/core'; 
  

interface Task{
    title: string,
    is_canceled: boolean
   }

@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  
    /* An empty array that is responsible 
       to add a division */
    public items = []; 
  
    /* A two-way binding performed which 
       pushes text on division */
    public newTask; 
  
  
    /* When input is empty, it will 
       not create a new division */
    public addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
  
    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index) { 
        let do_delete = confirm("Are you sure to delete Work on new e-commerce web app?");
        if (do_delete){
          this.items.splice(index, 1);
       }
} 


}