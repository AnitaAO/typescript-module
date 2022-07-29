// Import stylesheets
import './style.css';
import { Point } from './points'

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Modules</h1>
  <p>Modules are used to access files across a project</p>
  <p>Example is creating a class in a project e.g index.ts, copying that class into another new file points.ts</p>
  `;


  // class Point{
  //   constructor(private x?: number, private y?: number){

  //   }
  //   draw(){
  //     console.log('X: ' + this.x + ', Y: ' + this.y);
  //   }
  // }

  //this class Point can be taken to point.ts file and "export" added to the prefix of the class
  //then, that file can now be imported into index.ts
  //At this point, the point.ts file exported to index.ts becomes a MODULE

let point = new Point(1, 2)
point.draw()

//notice the compilation error on 'Point' in line 26?
//that is because we have not imported the point.ts file/module that has the class where 'Point' is defined

//so, in line 2, we import Point from the file location but in this case, we won't add ".ts" as both are located inside the same file.
//the importation would remove the compilation error on 'Point' => line 27
//now we can now use instances of 'Point' and use them

//However in angular we do not import file this was, rather we use the library names e.g @angular/core

