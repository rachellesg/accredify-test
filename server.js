const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


app.get('/api/user', (req, res) => {
  const users = {
    data: {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      profile_picture_url: 'https://placehold.co/600x400.png',
      email_verified_at: '2022-01-01 15:38:33.0 Asia/Singapore (+08:00)',
      identification_number: 'S9****567A',
      current_organisation: {
        id: 2,
        name: 'Sample Bank ABC',
        logo_url: 'https://placehold.co/600x400.png',
        is_personal: false, // true if Personal User
      },
    },
  };

  res.json(users);
});

app.get('/api/document', (req, res) => {
  const documents = {
    "data": [
      {
        "id": 1,
        "status": "issued",
        "document_name": "SWAB Test Result",
        "issuer_name": "ISSUER NAME",
        "issuer_logo_url": "https://placehold.co/600x400.png",
        "recipient_name": "John Frusciante",
        "received_on": "2022-01-12T17:58:25.000000Z",
        "expire_at": "2023-01-12T00:00:00.000000Z",
        "created_at": "2022-01-12T10:45:10.000000Z",
        "updated_at": "2022-01-12T17:58:25.000000Z",
        "archived_at": null,
        "deleted_at": null
      },
      {
        "id": 2,
        "status": "approved",
        "document_name": "SWAB Test Result",
        "issuer_name": "ISSUER NAME",
        "issuer_logo_url": "https://placehold.co/600x400.png",
        "recipient_name": "John Frusciante",
        "received_on": null,
        "expire_at": null,
        "created_at": "2022-01-12T10:45:10.000000Z",
        "updated_at": "2022-01-12T17:58:25.000000Z",
        "archived_at": null,
        "deleted_at": null
      },
    ],
    "links": {
      "first": "http://localhost/document-module/identities/1/documents?page=1",
      "last": "http://localhost/document-module/identities/1/documents?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "pagination.previous",
          "active": false
        },
        {
          "url": "http://localhost/document-module/identities/1/documents?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "pagination.next",
          "active": false
        }
      ],
      "path": "http://localhost/document-module/identities/1/documents",
      "per_page": 10,
      "to": 10,
      "total": 2
    }
  }

  res.json(documents)
})

app.get('/api/goal', (req, res) => {
  const goals = {
    "data": [
      {
        "id": 1,
        "name": "Account Manager",
        "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
        "category": "Sales and Marketing",
        "type": "technical", // or "core"
        "progress": 35 // integer ranging from 0 to 100
      }
    ]
  }

  res.json(goals);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
