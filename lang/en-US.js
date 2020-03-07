export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      my_name: 'Anna Serba',
      subheading: '.Net Programmer and entrepreneur',
      aboutMeHead: 'About me',
      aboutMe: `I am a business automation web engineer.
      The area of my expertise covers the full stack .Net technologies.
      But I specialize in front-end technologies.
      I have extensive experience in fixing software bugs.
      I work only remotely`,
      basicSkilsHead: 'Basic skils',
      contactsHead: 'Contacts',
      resume: 'Resume',
      moreDetails: 'More details'
    })
  })
}
