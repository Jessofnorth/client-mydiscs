import React from "react";

const About = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <article className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center pt-2">About page</h1>
        <p>This page is a school project by Jessica Ejelöv for the course Webdevelopment with .Net at Mid Sweden University.</p>
        <p>The content on this page is consumed from an API that can be managed from an admin site. On this admin site there is full CRUD funcitonality and users can add categories, brands and discs.</p>
      </article>
    </main>
  );
};

export default About;
