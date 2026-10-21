// Professional facts come from the supplied four-page curriculum vitae.
export const profile = {
  name: "Abdullahi Ahmad",
  title: "Machine Learning Engineer",
  email: "abdulll8392@gmail.com",
  location: "Abuja, Nigeria",
  cvFilename: "Abdullahi_Ahmad_Curriculum_Vitae.pdf",
  // The CV names these profiles without URLs. These destinations were retained
  // from the existing portfolio and its previously reviewed source material.
  github: "https://github.com/abdull6771",
  linkedin: "https://www.linkedin.com/in/abdullahi-ahmad-babura-57653b205/",
};

export const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFilename}`;
