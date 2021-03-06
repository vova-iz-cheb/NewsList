import { CREATE_NEWS, SPECIFY_EDITABLE_NEWS, EDIT_NEWS, DELETE_NEWS } from '../constants'

const initialState = {
  editableNewsId: 0, // 0 - not editable news
  allNews: [
    {
      id: 1,
      title: 'В четверг четвертого числа...',
      content: 'В четверг четвертого числа в четыре с четвертью часа лигурийский регулировщик регулировал в Лигурии, но тридцать три корабля лавировали, лавировали, да так и не вылавировали. И потом протокол про протокол протоколом запротоколировал, как интервьюером интервьюируемый лигурийский регулировщик речисто, да не чисто рапортовал, да так зарапортовался про размокропогодившуюся погоду что, дабы инцидент не стал претендентом на судебный прецедент, лигурийский регулировщик акклиматизировался в неконституционном Константинополе, где хохлатые хохотушки хохотом хохотали и кричали турке, который начерно обкурен трубкой: "Не кури, турка трубку, купи лучше кипу пик, лучше пик кипу купи, а то придет бомбардир из Бранденбурга – бомбами забомбардирует за то, что некто чернорылый у него полдвора рылом изрыл вырыл и подрыл.',
      author: 'admin',
      timestamp: new Date(2019, 0, 1).getTime(),
    },
    {
      id: 2,
      title: 'Как писать статьи для сайта?',
      content: 'Писать контент для интернет-сайта нужно быстро. Чем дольше протекает работа над статьей, тем этот процесс мучительнее. Как же можно в короткие сроки написать текст, который заинтересует пользователей и дать им много полезной информации? Сегодня копирайтеры используют различные способы, но мы рассмотрим три наиболее оптимальных. С их помощью дедлайн всегда будет соблюден.',
      author: 'Nataly',
      timestamp: new Date(2018, 0, 1).getTime(),
    },
    {
      id: 3,
      title: 'Изучение наследственной болезни чувашей помогло совершить нобелевское открытие',
      content: 'Очень интересный факт, имеющий отношение к нашей работе и связанный с Россией, это чувашская полицитемия - заболевание, при котором тело вырабатывает слишком много красных кровяных клеток. Оно хорошо известно в России и изучалось многими специалистами, включая американца Джозефа Прхала, - отметил собеседник агентства. - Работы Джо, посвященные чувашской полицитемии, были достаточно важны для того, чтобы понять, что происходит, когда [регулирующая уровень кислорода] система "включается". Дело в том, что у пациентов с чувашской полицитемией есть мутация в геноме, которая держит систему во "включенном" состоянии даже тогда, когда она могла бы быть "выключена". Изучение этих особенностей дало нам много информации, и можно говорить, что это был российский вклад в нашу работу',
      author: 'admin',
      timestamp: new Date(2019, 3, 21).getTime(),
    }
  ]
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEWS:
      return {
        editableNewsId: state.editableNewsId,
        allNews: [
          ...state.allNews,
          action.news
        ]
      }

    case SPECIFY_EDITABLE_NEWS:
      return {
        ...state,
        editableNewsId: action.id
      }

    case EDIT_NEWS:
      let cloneAllNews = [...state.allNews];
      const index = cloneAllNews.findIndex(item => item.id === action.news.id);

      cloneAllNews.splice(index, 1, action.news);
      return {
        ...state,
        allNews: cloneAllNews
      }

    case DELETE_NEWS:
      const allNews = state.allNews.filter( (item) => {
        if(item.id === action.id) return false;
        return true;
      });
      return {
        ...state,
        allNews
      };

    default:
      return state
  }
}

export default news