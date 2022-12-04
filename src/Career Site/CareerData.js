// const details = [{
//     role : "Senior UIUX Designer",
//     domain : "Design",
//     time : "Fulltime",
//     experience : "5 Years +",
//     salary: "$10,000",
//     location : "California, USA",
//     update : "4 Hours ago"
// },
// {
//     role : "3D Isometric Illustrator",
//     domain : "Design",
//     time : "Freelancer",
//     experience : "1-2 Years",
//     salary: "$500",
//     location : "United States",
//     update : "12 Hours ago"
// },
// {
//     role : "2D Isometric Illustrator",
//     domain : "Design",
//     time : "Freelancer",
//     experience : "1-2 Years",
//     salary: "$500",
//     location : "California, USA",
//     update : "12 Hours ago"
// },
// {
//     role : "Project Manager",
//     domain : "Management",
//     time : "Fulltime",
//     experience : "1-2 Years",
//     salary: "$800",
//     location : "United States",
//     update : "23 Hours ago"
// },
// {
//     role : "Accounttant",
//     domain : "Fenance",
//     time : "Fulltime",
//     experience : "1-2 Years",
//     salary: "$500",
//     location : "California, USA",
//     update : "3 Days ago"
// },
// {
//     role : "UX Researcher",
//     domain : "Design",
//     time : "Fulltime",
//     experience : "3-5 Years",
//     salary: "$800",
//     location : "San Fransisco , CA",
//     update : "3 Days ago"
// },
// {
//     role : "UX Illustrator",
//     domain : "Design",
//     time : "Freelancer",
//     experience : "1-2 Years",
//     salary: "$500",
//     location : "United States",
//     update : "1 week ago"
// },
// {
//     role : "Copywriter",
//     domain : "Marketing",
//     time : "Fulltime",
//     experience : "1-2 Years",
//     salary: "$800",
//     location : "Washington DC",
//     update : "1 week ago"
// }
// ]

const details = [
  {
    role: {
      head: "Role",
      roles: [
        "Senior UIUX Designer",
        "3D Isometric Illustrator",
        "2D Isometric Illustrator",
        "Project Manager",
        "Accounttant",
        "UX Researcher",
        "UX Illustrator",
        "Copywriter",
      ],
    },
    experience: {
        head: "Experience",
        years: [
          "5 Years +",
          "1-2 Years",
          "1-2 Years",
          "1-2 Years",
          "1-2 Years",
          "3-5 Years",
          "1-2 Years",
          "1-2 Years",
        ],
      },
    salary: {
      head: "Salary",
      salaries: [
        "$10,000",
        "$500",
        "$500",
        "$800",
        "$500",
        "$800",
        "$500",
        "$800",
      ],
    },
      location: {
        head: "Location",
        locations: [
          "California, USA",
          "United States",
          "California, USA",
          "United States",
          "California, USA",
          "San Fransisco, CA",
          "United States",
          "Wasington DC",
        ],
      },
      update: {
        head: "Last updated",
        updates: [
          "4 Hours ago",
          "12 Hours ago",
          "12 Hours ago",
          "23 Hours ago",
          "3 Days ago",
          "3 Days ago",
          "1 Week ago",
          "1 Week ago",
        ],
      },
  },
];

export default details;
