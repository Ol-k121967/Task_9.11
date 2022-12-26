let gender = '';
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Светлана",
            "id_2": "Мария",
            "id_3": "Татьяна",
            "id_4": "Алина",
            "id_5": "Дарья",
            "id_6": "Надежда",
            "id_7": "Мирослава",
            "id_8": "Галина",
            "id_9": "Валентина",
            "id_10": "Анастасия"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    secondNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иваныч",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    secondNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитовна",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionalMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Шахтер",
            "id_3": "Слесарь",
            "id_4": "Учитель",
            "id_5": "Лаборант",
            "id_6": "Актер",
            "id_7": "Солдат",
            "id_8": "Стропальщик",
            "id_9": "Инженер",
            "id_10": "Программист"
        }
    }`,
    professionalFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Продавец",
            "id_3": "Уборщица",
            "id_4": "Учитель",
            "id_5": "Лаборант",
            "id_6": "Актриса",
            "id_7": "Стюардесса",
            "id_8": "Ткачиха",
            "id_9": "Инженер",
            "id_10": "Дизайнер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',




    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        randomNumber = Math.round(Math.random());

    gender = (randomNumber == 0) ? JSON.parse(JSON.stringify(personGenerator)).GENDER_MALE
            : JSON.parse(JSON.stringify(personGenerator)).GENDER_FEMALE;
            return gender;
    

    },

    randomFirstName: function() {
         if (gender == 'Мужчина') {
   
               return this.randomValue(this.firstNameMaleJson);
            }
            else {
                return this.randomValue(this.firstNameFeMaleJson);  
            }
    },
    randomProfession: function() {
        if (gender == 'Мужчина') {
  
              return this.randomValue(this.professionalMaleJson);
           }
           else {
               return this.randomValue(this.professionalFeMaleJson);  
           }
   },

     randomSecondName: function() {
        if (gender == 'Мужчина') {
     
            return this.randomValue(this.secondNameMaleJson);
         }
         else {
        return this.randomValue(this.secondNameFeMaleJson);
         }
    },

    randomSurname: function() {
        if (gender == 'Мужчина') {
    
            return this.randomValue(this.surnameJson);
         }
         else {
        return this.randomValue(this.surnameJson)+'а';
         }
    },


    getPerson: function () {
        this.person = {};
        this.person.genderName = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.secondName = this.randomSecondName();
        this.person.professionOutput = this.randomProfession();
       
        return this.person;
    },
}

