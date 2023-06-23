// Select the database to use.
use('ReactBackendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
          
            image: 'https://cdn.dribbble.com/userupload/7898778/file/original-944f5335f22913ed9caee242690d169d.jpg?compress=1',
            title: 'Cube Aesthetics',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898779/file/original-3c59f77d90626a5076d657ed34a4fa65.png?compress=1',
            title: 'Education App UIX',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
            image: 'https://cdn.dribbble.com/userupload/7898780/file/original-47f1fcc8a1b79a045b644aa9a37ca8ad.jpg?compress=1',
            title: 'Recipe app design',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
        
            image: 'https://cdn.dribbble.com/userupload/7898785/file/original-4578e71bf0af8ba17a1e1144e7d7b494.png?compress=1',
            title: 'OnStep - Shoes Store',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
     
            image: 'https://cdn.dribbble.com/userupload/7898782/file/original-1870d052ffe1a00e44c550be54787566.jpg?compress=1',
            title: 'Mobile App Exploration',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898781/file/original-2e35d60dc93ee1d55650a9166941addc.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898786/file/original-1008ed15dba30d220a2b8a553460f4e0.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898784/file/original-678fef2288fa8b45989d0cf95d9b755d.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898783/file/original-6968dfad0b83f9aab4547b09c427f97c.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        }

    ]
);

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'James Brown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
        
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
//           name: 'Tina Snow ',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//           name: 'Kevin Roussel',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: 'Louisa McBrown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
      
      
//       ]
// );