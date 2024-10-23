const fs = require('fs');

// Указываем жанры и количество файлов для создания
const genres = ['fantasy', 'krimina', 'horror', 'real', 'sport', 'triller'];
const numberOfFiles = 12;

// Создаем файлы в цикле
genres.forEach((genre) => {
  for (let i = 1; i <= numberOfFiles; i++) {
    const fileName = `${genre}${i}.js`;
    
    // Создаем пустой файл
    fs.writeFile(fileName, '', (err) => {
      if (err) {
        console.error(`Ошибка при создании файла ${fileName}:`, err);
      } else {
        console.log(`Файл ${fileName} успешно создан.`);
      }
    });
  }
});
