export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      my_name: 'Анна Серба',
      subheading: '.Net программист и предприниматель',
      aboutMeHead: 'Обо мне',
      aboutMe: `Я веб-инженер автоматизации бизнеса.
      Область моей компетенции охватывает полный стек технологий .Net.
      Но я специализируюсь на front-end технологиях.
      У меня большой опыт исправления ошибок в программном обеспечении.
      Я работаю только удаленно`,
      basicSkilsHead: 'Базовые навыки',
      contactsHead: 'Котакты',
      resume: 'Резюме',
      moreDetails: 'Подробнее',
      source: 'Источник',
      blog: 'Блог'
    })
  })
}
