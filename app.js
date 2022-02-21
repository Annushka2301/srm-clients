let students = [
  {
    name: 'Вася',
    surname: 'Иванов',
    middleName: 'Петрович',
    date: new Date("1997-01-23"),
    startEduc: '2021',
    faculty: 'ИнФак',
  },
  {
    name: 'Вася',
    surname: 'Иванов',
    middleName: 'Егорович',
    date: new Date("1997-01-23"),
    startEduc: '2021',
    faculty: 'ИнФак',
  },
  {
    name: 'Петя',
    surname: 'Иванов',
    middleName: 'Петрович',
    date: new Date("1998-01-23"),
    startEduc: '2017',
    faculty: 'ПедФак',
  },
  {
    name: 'Артем',
    surname: 'Абрамов',
    middleName: 'Петрович',
    date: new Date("2000-01-23"),
    startEduc: '2010',
    faculty: 'ФФ',
  },
];

(() => {
  const body = document.querySelector('body');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputSurname = document.createElement('input');
  const inputMiddleName = document.createElement('input');
  const inputDate = document.createElement('input');
  const inputStartStudy = document.createElement('input');
  const inputFaculty = document.createElement('input');
  const submitBtn = document.createElement('button');

  const resultTable = document.createElement('div');
  const resultWrap = document.createElement('div');
  const btnsWrap = document.createElement('div');
  const btnName = document.createElement('button');
  const btnFaculty = document.createElement('button');
  const btnDate = document.createElement('button');
  const btnStudyYears = document.createElement('button');
  const filtrsWrap = document.createElement('form');
  const filtrName = document.createElement('input');
  const filtrFaculty = document.createElement('input');
  const filtrDate = document.createElement('input');
  const wrapFiltrStudyYears = document.createElement('div');
  const filtrStartStudy = document.createElement('input');
  const filtrFinishStudy = document.createElement('input');

  const now = new Date();
  let yearNow = now.getFullYear();

  function createForm () {
    form.classList.add('form', 'p-3')
    inputName.classList.add('form-control', 'mb-2', 'input-name');
    inputSurname.classList.add('form-control', 'mb-2', 'input-surname');
    inputMiddleName.classList.add('form-control', 'mb-2', 'input-middlename');
    inputDate.classList.add('form-control', 'mb-2', 'input-date');
    inputStartStudy.classList.add('form-control', 'mb-2', 'input-startstudy');
    inputFaculty.classList.add('form-control', 'mb-2', 'input-fuvulty');
    submitBtn.classList.add('btn', 'btn-warning', 'w-100');
    submitBtn.innerHTML = 'Добавить'

    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputMiddleName.placeholder = 'Отчество';
    inputDate.placeholder = 'Дата рождения';
    inputStartStudy.placeholder = 'Год начала обучения';
    inputFaculty.placeholder = 'Факультет';

    inputName.setAttribute('type', 'text');
    inputSurname.setAttribute('type', 'text');
    inputMiddleName.setAttribute('type', 'text');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('id', 'date');
    inputStartStudy.setAttribute('type', 'number');
    inputStartStudy.setAttribute('id', 'startStudy');
    inputFaculty.setAttribute('type', 'text');
    submitBtn.setAttribute('type', 'submit')

    body.append(form);
    form.append(inputName);
    form.append(inputSurname);
    form.append(inputMiddleName);
    form.append(inputDate);
    form.append(inputStartStudy);
    form.append(inputFaculty);
    form.append(submitBtn);

    return form;
  };

  function createResultsTable() {
    resultTable.classList.add('d-flex', 'flex-column', 'w-100', 'p-3');

    filtrsWrap.classList.add('d-flex', 'w-100');
    filtrName.classList.add('form-control', 'w-25', 'm-2');
    filtrFaculty.classList.add('form-control', 'w-25', 'm-2');
    filtrDate.classList.add('form-control', 'w-25', 'm-2');
    wrapFiltrStudyYears.classList.add('d-flex','w-25', 'm-2');
    filtrStartStudy.classList.add('form-control', 'w-50');
    filtrFinishStudy.classList.add('form-control', 'w-50');
    btnsWrap.classList.add('d-flex', 'w-100');
    btnName.classList.add('btn', 'btn-primary', 'w-25', 'm-2');
    btnFaculty.classList.add('btn', 'btn-primary', 'w-25', 'm-2');
    btnDate.classList.add('btn', 'btn-primary', 'w-25', 'm-2');
    btnStudyYears.classList.add('btn', 'btn-primary', 'w-25', 'm-2');

    btnName.innerHTML = 'ФИО';
    btnFaculty.innerHTML = 'Факультет';
    btnDate.innerHTML = 'ДР и возраст';
    btnStudyYears.innerHTML = 'Годы обучения';
    filtrName.placeholder = 'поиск';
    filtrFaculty.placeholder = 'поиск';
    filtrDate.placeholder = 'поиск';
    filtrDate.setAttribute('type', 'date');
    filtrStartStudy.placeholder = 'поиск';
    filtrStartStudy.setAttribute('type', 'number');
    filtrFinishStudy.placeholder = 'поиск';
    filtrFinishStudy.setAttribute('type', 'number');

    body.append(resultTable);
    resultTable.append(btnsWrap);
    resultTable.append(filtrsWrap);

    filtrsWrap.append(filtrName);
    filtrsWrap.append(filtrFaculty);
    filtrsWrap.append(filtrDate);
    filtrsWrap.append(wrapFiltrStudyYears);
    wrapFiltrStudyYears.append(filtrStartStudy);
    wrapFiltrStudyYears.append(filtrFinishStudy);
    btnsWrap.append(btnName);
    btnsWrap.append(btnFaculty);
    btnsWrap.append(btnDate);
    btnsWrap.append(btnStudyYears);
  }

  function completeStudentsTable (array) {
    resultWrap.innerHTML = '';
    let studentResultName = document.createElement('div');
    let studentResultDate = document.createElement('div');
    let studentResultStartStudy = document.createElement('div');
    let studentResultFaculty = document.createElement('div');

    studentResultName.classList.add('d-flex', 'flex-column', 'w-25');
    studentResultDate.classList.add('d-flex', 'flex-column', 'w-25');
    studentResultStartStudy.classList.add('d-flex', 'flex-column', 'w-25');
    studentResultFaculty.classList.add('d-flex', 'flex-column', 'w-25');
    resultWrap.classList.add('d-flex', 'w-100');

    let arrayNames = array.map(student => student.name);
    let arraySurnames = array.map(student => student.surname);
    let arrayMiddleNames = array.map(student => student.middleName);
    let arrayDates = array.map(student => student.date);
    let arrayFaculties = array.map(student => student.faculty);
    let arrayStartEducs = array.map(student => student.startEduc);

    resultTable.append(resultWrap);
    resultWrap.append(studentResultName);
    resultWrap.append(studentResultFaculty);
    resultWrap.append(studentResultDate);
    resultWrap.append(studentResultStartStudy);

    for (let i = 0; i < arrayNames.length; i++) {
      let studentName = document.createElement('p');
      studentName.classList.add('w-100', 'm-2', 'height');
      studentResultName.append(studentName);
      studentName.textContent = `${arraySurnames[i]} ${arrayNames[i]} ${arrayMiddleNames[i]}`;
    }

    for (let i = 0; i < arrayFaculties.length; i++) {
      let studentFaculty = document.createElement('p');
      studentFaculty.classList.add('w-100', 'm-2', 'height');
      studentResultFaculty.append(studentFaculty);
      studentFaculty.textContent = arrayFaculties[i];
    }

    for (let i = 0; i < arrayDates.length; i++) {
      let fullDate = arrayDates[i];
      let day = fullDate.getDate();
      if (day < 10) day = '0' + day;
      let month = fullDate.getMonth() + 1;
      if (month < 10) month = '0' + month;
      let year = fullDate.getFullYear();
      let studentDate = document.createElement('p');
      studentDate.classList.add('w-100', 'm-2', 'height');
      studentResultDate.append(studentDate);
      let age = yearNow - year;
      studentDate.textContent = `${day}.${month}.${year} (${age} лет)`;
    }

    for (let i = 0; i < arrayStartEducs.length; i++) {
      let studentStartStudy = document.createElement('p');
      studentStartStudy.classList.add('w-100', 'm-2', 'height');
      studentResultStartStudy.append(studentStartStudy);
      let finishStudy = Number(arrayStartEducs[i]) + 4;
      let curse = yearNow - Number(arrayStartEducs[i]);
      if (finishStudy <= yearNow) {
        studentStartStudy.textContent = `${arrayStartEducs[i]}-${finishStudy} (Закончил)`;
      } else {
        studentStartStudy.textContent = `${arrayStartEducs[i]}-${finishStudy} (${curse + 1} курс)`;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    createForm();
    createResultsTable();
    completeStudentsTable(students);

    let generateError = function (text) {
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.style.position = 'absolute';
      error.style.fontSize = '8px';
      error.innerHTML = text;
      return error;
    }

    let removeValidation = function() {
      let errors = form.querySelectorAll('.error');

      for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
      }
    }

    let checkInputsPresence = function () {
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
          let error = generateError('нужно заполнить');
          form[i].parentElement.insertBefore(error, inputs[i]);
        }
      }
    }

    const now = new Date();
    const earliestDate = new Date('01.01.1900');
    const yearNow = now.getFullYear();

    let checkDate = function() {
      if ((inputDate.valueAsDate < earliestDate || inputDate.valueAsDate > now) && inputDate.value !== '') {
        let error = generateError('неправильная дата');
        inputDate.parentElement.insertBefore(error, inputDate);
      }
    }

    let checkStartStudy = function() {
      const inputStartStudy = document.getElementById('startStudy');
      if ((Number(inputStartStudy.value) < 2000 || Number(inputStartStudy.value) > yearNow)  && inputStartStudy.value !== ''){
        let error = generateError('неправильный год');
        inputStartStudy.parentElement.insertBefore(error, inputStartStudy);
      }
    }

    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      removeValidation();
      checkInputsPresence();
      checkDate();
      checkStartStudy();

      let errors = form.querySelectorAll('.error');

      if (errors.length === 0) {
        let student = {
          name: inputName.value.trim(),
          surname: inputSurname.value.trim(),
          middleName: inputMiddleName.value.trim(),
          date: inputDate.valueAsDate,
          startEduc: inputStartStudy.value.trim(),
          faculty: inputFaculty.value.trim(),
        };

        const inputs = form.querySelectorAll('input');

        students.push(student);
        completeStudentsTable(students);
        inputs.forEach(input => input.value = '');
      }
    });

    btnName.addEventListener('click', function(e){
      e.preventDefault();
      let studentsByName = students.slice(0);

      studentsByName.sort(function (a,b) {
        if (a.surname > b.surname) {return 1;}
        if (a.surname < b.surname) {return -1;}
        return 0;
      });
      completeStudentsTable(studentsByName);
    });

    btnFaculty.addEventListener('click', function(e){
      e.preventDefault();

      let studentsByFaculty = students.slice(0);

      studentsByFaculty.sort(function (a,b) {
        if (a.faculty > b.faculty) {return 1;}
        if (a.faculty < b.faculty) {return -1;}
        return 0;
      });
      completeStudentsTable(studentsByFaculty);
    });

    btnDate.addEventListener('click', function(e){
      e.preventDefault();
      let studentsByDate = students.slice(0);
      studentsByDate.sort(function (a,b) {
        if (a.date > b.date) {return 1;}
        if (a.date < b.date) {return -1;}
        return 0;
      });
      studentsByDate.reverse();
      completeStudentsTable(studentsByDate);
    });

    btnStudyYears.addEventListener('click', function(e){
      e.preventDefault();

      let studentsByStudyYears = students.slice(0);

      studentsByStudyYears.sort(function (a,b) {
        if (a.startEduc > b.startEduc) {return -1;}
        if (a.startEduc < b.startEduc) {return 1;}
        return 0;
      });
      completeStudentsTable(studentsByStudyYears);
    });

    function ifEmpty() {
      if (!filtrName.value.trim() && !filtrFaculty.value.trim() && !filtrDate.value.trim() && !filtrStartStudy.value.trim() && !filtrFinishStudy.value.trim()) {
        completeStudentsTable(students);
      }
    }

    function filter () {
      let newStudents = students.slice();
      if (filtrName.value.trim()) {
        newStudents = newStudents.filter(function(student) {
          let filtrFullName = filtrName.value.trim().toLowerCase();
          let fullName = `${student.surname} ${student.name} ${student.middleName}`;
          if (fullName.toLowerCase().includes(filtrFullName)) {
            return student
          }
        });
        completeStudentsTable(newStudents);
      }
      if (filtrFaculty.value.trim() ) {
        newStudents = newStudents.filter(function(student) {
          let facultyLowerCase = student.faculty.toLowerCase();
          let filtrLowerCase = filtrFaculty.value.trim().toLowerCase();
          if (facultyLowerCase.includes(filtrLowerCase)) {
            return student;
          }
        });
        completeStudentsTable(newStudents);
      }
      if (filtrDate.value.trim()) {
        let studentCheckDate = filtrDate.valueAsDate;
        newStudents = newStudents.filter(student => {
          let fullDate = `${student.date.getDate()}${student.date.getMonth()}${student.date.getFullYear()}`;
          let filtrFullDate = `${studentCheckDate.getDate()}${studentCheckDate.getMonth()}${studentCheckDate.getFullYear()}`
          if (fullDate === filtrFullDate) {
            return student;
          }
        });
        completeStudentsTable(filterByDate);
      }
      if (filtrStartStudy.value.trim()) {
        newStudents = newStudents.filter(student => student.startEduc === filtrStartStudy.value);
        completeStudentsTable(newStudents);
      }
      if (filtrFinishStudy.value.trim()) {
        let finishStudy = filtrFinishStudy.value - 4;
        newStudents = newStudents.filter(student => Number(student.startEduc) === finishStudy);
        completeStudentsTable(newStudents);
      }
      if (newStudents.length === students.length) {
        ifEmpty();
      }
    }

    filtrName.addEventListener('input', filter);
    filtrFaculty.addEventListener('input', filter);
    filtrDate.addEventListener('input', filter);
    filtrStartStudy.addEventListener('input', filter);
    filtrFinishStudy.addEventListener('input', filter);
  });

})();

