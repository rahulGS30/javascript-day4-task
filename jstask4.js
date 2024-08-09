const resume = {
    "name": "Rahul G S",
    "contact": [{
      "email": "rahul@gmail.com",
      "phone": "1234567890",
      "address": "123 Main St,chennai, India"
    }],
    "skills": ["JavaScript", "Python", "React", "Node.js"],
    "certifications": [
      {
        "name": "web Developer",
        "institution": "Guvi",
        "year": 2024
      }
    ]
  };
for(let key in resume){
    console.log(`${key}: ${JSON.stringify(resume[key],null,2)}`);
}
resume.contact.forEach(contact => {
    console.log(contact)
    
});

for(let certifications of resume.certifications){
    console.log(certifications.name)
    console.log(certifications.institution)
    console.log(certifications.year)
}
for(let i=0;i<resume.skills.length;i++){
    console.log(resume.skills[i])
}
