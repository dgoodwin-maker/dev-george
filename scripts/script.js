fetch('scripts/data.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      // Handle errors
      console.error('Fetch Error :-S', error);
  }); 









// $(document).ready(function () {
//   const dataEntry = [
//   {
//     "id": 1,
//     "title": "Complete Dev-George Project",
//     "description": "Finish this final web development project for the semester",
//     "dueDate": "2025-04-28",
//     "priority": "High",
//     "completed": false
//   },
//   {
//     "id": 2,
//     "title": "Study for Web Dev Exam",
//     "description": "Review JavaScript and pray a little harder as well",
//     "dueDate": "TBD",
//     "priority": "Medium",
//     "completed": false
//   },
//   {
//     "id": 3,
//     "title": "Read more",
//     "description": "Read brotha man",
//     "dueDate": "2025-05-10",
//     "priority": "Low",
//     "completed": false
//   },
//   {
//     "id": 4,
//     "title": "Learn GitHub Basics",
//     "description": "Ability to learn GitHub basics",
//     "dueDate": "2025-04-29",
//     "priority": "Medium",
//     "completed": true
//   }
// ]
//   console.log(dataEntry);
// })




