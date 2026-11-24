# Лабораторна робота № 7: Складні сценарії взаємодії з інтерфейсом (Playwright)

**Виконавець:** Баш Роман Олександрович  
**Група:** ІПЗ 1  
**Варіант:** 5 (`/context_menu`)

## Мета роботи

Опанувати автоматизацію взаємодій, які виходять за межі простого натискання та введення тексту: робота з елементами форм різних типів, читання й перевірка табличних даних, оброблення браузерних діалогів, вивантаження й завантаження файлів, керування кількома вкладками та вмістом вбудованих фреймів.

## Структура проєкту

- `playwright.config.ts` — конфігурація Playwright для стенду [The Internet](https://the-internet.herokuapp.com)
- `tests/forms.spec.ts` — тести елементів форм (`/dropdown`, `/checkboxes`, `/horizontal_slider`)
- `tests/tables.spec.ts` — читання, фільтрація, сортування та підрахунок суми в таблиці (`/tables`)
- `tests/dialogs.spec.ts` — оброблення браузерних діалогів `alert`, `confirm`, `prompt` (`/javascript_alerts`)
- `tests/files.spec.ts` — вивантаження файлу на сервер (`/upload`) і завантаження файлу зі сторінки (`/download`)
- `tests/windows-frames.spec.ts` — робота з новими вкладками (`/windows`) та вмістом `iframe` (`/iframe`)
- `tests/dynamic.spec.ts` — очікування динамічного завантаження вмісту без пауз (`/dynamic_loading/2`)
- `tests/context-menu.spec.ts` — індивідуальне завдання (Варіант 5: `/context_menu`, правий клік та оброблення діалогу)
- `tests/files/upload-sample.txt` — тестовий файл для сценарію вивантаження

## Запуск тестів та перевірка коду

```bash
npm test
npm run lint
npm run format
```
