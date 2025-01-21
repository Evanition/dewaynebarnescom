<template>
  <div class="contact-container">
    <h2>Contact Me</h2>
    <div class="contact-info">
      <p>
        Email: <a href="mailto:dewaynebarnes123@gmail.com">dewaynebarnes123@gmail.com</a>
      </p>
      <p>
        GitHub:
        <a href="https://github.com/Evanition" target="_blank" rel="noopener noreferrer"
          >Evanition</a
        >
      </p>
      <p>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/dewayne-barnes-b081b0225/"
          target="_blank"
          rel="noopener noreferrer"
          >Dewayne Barnes</a
        >
      </p>
       <p>
         Resume: <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="resume-link">View Resume</a>
        </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
    text-align: center;
  padding: 20px;
}

.contact-info {
  margin-top: 20px;
  font-size: 1.1em;
  text-align: left;
    width: fit-content;
}

.contact-info p {
  margin-bottom: 10px;
}

.contact-info a {
  color: #00ff95;
    text-decoration: none;
      transition: color 0.3s ease;
  cursor: pointer;
}
    .contact-info a:hover{
        text-decoration: underline;
      color: #00ff95;
}
    .resume-link{
     padding: 8px 16px;
     background-color: #333;
     color: #fff;
     border: none;
     cursor: pointer;
     text-decoration: none;
     border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: inline-block;
    margin-top: 10px
 }

    .resume-link:hover{
      background-color: #00ff95;
       transform: scale(1.05);
  }
</style>