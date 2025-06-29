// localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "aarav@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 101,
        "title": "Design Homepage",
        "description": "Create the UI for the landing page",
        "date": "2025-06-01",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 102,
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in navbar",
        "date": "2025-06-03",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 103,
        "title": "Update Footer",
        "description": "Redesign footer with new links",
        "date": "2025-06-05",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounter": {
      "newTask": 1,
      "completed": 1,
      "active": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "sneha@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 201,
        "title": "Write API Docs",
        "description": "Complete REST API documentation",
        "date": "2025-06-01",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 202,
        "title": "Optimize Images",
        "description": "Compress and replace all high-res images",
        "date": "2025-06-02",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 203,
        "title": "Backend Integration",
        "description": "Integrate backend with frontend forms",
        "date": "2025-06-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 204,
        "title": "Cross-Browser Testing",
        "description": "Test layout in Firefox, Safari, and Edge",
        "date": "2025-06-04",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounter": {
      "newTask": 1,
      "completed": 1,
      "active": 2,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Kabir",
    "email": "kabir@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 301,
        "title": "SEO Analysis",
        "description": "Run an SEO audit on the homepage",
        "date": "2025-06-01",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 302,
        "title": "Create Blog Draft",
        "description": "Draft a new blog post on product features",
        "date": "2025-06-03",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 303,
        "title": "Social Media Plan",
        "description": "Design June campaign strategy",
        "date": "2025-06-02",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "id": 304,
        "title": "Newsletter Setup",
        "description": "Set up new template for email newsletter",
        "date": "2025-06-06",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 305,
        "title": "Competitor Research",
        "description": "Analyze top 5 competitors' pricing strategy",
        "date": "2025-06-05",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounter": {
      "newTask": 2,
      "completed": 1,
      "active": 2,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Ritika",
    "email": "ritika@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 401,
        "title": "Database Backup",
        "description": "Perform a full backup of the production DB",
        "date": "2025-06-02",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 402,
        "title": "Create Test Cases",
        "description": "Write unit test cases for the auth module",
        "date": "2025-06-03",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 403,
        "title": "Refactor Code",
        "description": "Improve readability and remove dead code",
        "date": "2025-06-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounter": {
      "newTask": 1,
      "completed": 2,
      "active": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Ananya",
    "email": "ananya@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 501,
        "title": "User Feedback Analysis",
        "description": "Summarize feedback from user surveys",
        "date": "2025-06-01",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 502,
        "title": "Deploy Update",
        "description": "Push new build to production",
        "date": "2025-06-05",
        "category": "Deployment",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 503,
        "title": "Monitor Logs",
        "description": "Track logs for performance issues",
        "date": "2025-06-06",
        "category": "Monitoring",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 504,
        "title": "Roll Back Test",
        "description": "Try rollback from staging",
        "date": "2025-06-04",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounter": {
      "newTask": 1,
      "completed": 1,
      "active": 2,
      "failed": 1
    }
  }
];

const admin = [{
  "id": 100,
  "firstName": "Darsh",
  "email": "admin@example.com",
  "password": "123"
}];

export const setlocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
