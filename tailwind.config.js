module.exports = {
    theme: {
      extend: {
        backgroundColor: {
          customRgba: 'rgba(255, 231, 149, 0.5)', // Добавляем кастомный цвет с альфа-каналом
        },
        boxShadow: {
          custom: '0px 4px 5px 0px rgba(0, 0, 0, 0.05)', // Добавляем кастомную тень
        },
        fontFamily: {
          baumans: ['BaumansRegular', 'sans-serif'], // Добавляем ваш шрифт
        },
      },
    },
    variants: {},
    plugins: [],
  }